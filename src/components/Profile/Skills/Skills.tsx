import React, { useEffect, useState }  from 'react';
import {Collapse,Card,CardBody, CardText, Button} from 'reactstrap';
import {useTranslation} from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';
import { SkillsForm } from '../SkillsForm';
import { addSkill } from '../../../redux/actions';
import { DynamicSection } from '../../../customComponents/DynamicSection';
import { AlertMessage } from '../../AlertMessage';
import { STORES } from '../../../helper/constants';

export default function Skills(props: any) {
    const [t] = useTranslation('common');
    const dispatch = useDispatch();

    const [isCollapsed, setIsCollapsed] = useState(false);

    const loginStore = useSelector((state: any) => state.loginStore)
    const userInfo = loginStore.user;
    const [skills, setSkills] = useState<string[]>([]);
    const { skill_knowledge } = userInfo;
    
    useEffect(() => { 
        const skills = skill_knowledge.map((item: any) => item.title==undefined ? item : item.title);
        setSkills(skills);
    }, [skill_knowledge]);
    
    const saveSkillKnowledge = () => {
        const payload = {
            title: skills
        }
        dispatch(addSkill(payload));
    };
    
    const updateSkills = (skills: string[]) => {
        setSkills(skills);
    }

    console.log({ skill_knowledge, skills });
    return (
        <>
            <Card onClick={()  => setIsCollapsed(!isCollapsed)}>
                    <CardBody>
                        <CardText>{t('profile.skills')}</CardText>
                    </CardBody>
                    </Card>
            <Collapse isOpen={isCollapsed}>
                <Card>
                    <CardBody>
                        <DynamicSection data={skills} dataset="" updateData={updateSkills} addButtonClass="">
                            <SkillsForm />
                        </DynamicSection>
                        <AlertMessage store={STORES.LOGIN_STORE} />
                        <Button onClick={saveSkillKnowledge} className="btn btn-primary">{t('profile.save')}</Button>
                    </CardBody>
                </Card>
            </Collapse>
        </>
    )
}
