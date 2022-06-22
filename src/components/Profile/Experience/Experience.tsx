import React, { useEffect, useState }  from 'react';
import {Collapse,Card,CardBody, CardText, Button } from 'reactstrap';
import {useTranslation} from "react-i18next";
import { useDispatch,useSelector } from 'react-redux';
import { DynamicSection } from '../../../customComponents/DynamicSection';
import { ExperienceForm } from '../ExperienceForm';
import { addExperience } from '../../../redux/actions';
import { AlertMessage } from '../../AlertMessage';
import { STORES } from '../../../helper/constants';

export default function Experience() {
    const [t] = useTranslation('common');
    const dispatch = useDispatch();

    const dataset = {
        companyName: '',
        location: '',
        position: '',
        description: '',
        from: '',
        to: ''
    };
    
    const loginStore = useSelector((state: any) => state.loginStore)
    const userInfo = loginStore.user;
    const [experiences, setExperiences] = useState<any[]>([]);
    const { work_experience } = userInfo;
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
        const experiencesData = work_experience.map((item: any) => {
            const {
                companyName,
                location,
                position,
                description,
                from,
                to
            } = item;
            return {
                companyName,
                location,
                position,
                description,
                from,
                to
            }; 
        });
        setExperiences(experiencesData);
    }, [work_experience]);
    
    const updateExperience = (experiences: any) => {
        setExperiences(experiences);
    };

    const saveWorkExperiences = () => {
        // const payload = {
        //     experiences,
        // }
        dispatch(addExperience(experiences));
    };

    return (
        <>
             <Card onClick={()  => setIsCollapsed(!isCollapsed)}>
                     <CardBody>
                         <CardText>{t('profile.work_exp')}</CardText>
                     </CardBody>
                     </Card>
             <Collapse isOpen={isCollapsed}>
                 <Card>
                     <CardBody>
                        <DynamicSection data={experiences} dataset={dataset} updateData={updateExperience} addButtonClass="">
                            <ExperienceForm />
                        </DynamicSection>
                        <Button type="button" onClick={saveWorkExperiences} className="btn btn-primary">{t('profile.save')}</Button>
                        <AlertMessage store={STORES.LOGIN_STORE} />

                     </CardBody>
                 </Card>
             </Collapse>
        </>
    )
}
