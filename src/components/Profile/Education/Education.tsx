import React, { useEffect, useState } from 'react';
// import { Accordion,AccordionItem,AccordionHeader } from 'reactstrap';
import {Collapse,Card,CardBody, CardText, Button } from 'reactstrap';
import {useTranslation} from "react-i18next";
import { DynamicSection } from '../../../customComponents/DynamicSection';
import { EducationForm } from '../EducationForm';
import { AlertMessage } from '../../AlertMessage';
import { useDispatch, useSelector } from 'react-redux';
import { STORES } from '../../../helper/constants';
import { addEducation } from '../../../redux/actions';

export default function Education() {
  const [t] = useTranslation('common');
    const dispatch = useDispatch();

    const dataset = {
      school_college: '',
      city: '',
      period: '',
    };
    
    const loginStore = useSelector((state: any) => state.loginStore)
    const userInfo = loginStore.user;
    const [educations, setEducations] = useState<any[]>([]);
    const { education_details } = userInfo;
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
        const educatonsData = education_details.map((item: any) => {
            const {
              school_college,
              city,
              period,
            } = item;
            return {
              school_college,
              city,
              period,
            }; 
        });
        setEducations(educatonsData);
    }, [education_details]);
    
    const updateEducation = (educations: any) => {
      setEducations(educations);
    };

    const saveEducationDetails = () => {
        // const payload = {
        //     experiences,
        // }
        dispatch(addEducation(educations));
    };


    return (
        <>             
             <Card onClick={()  => setIsCollapsed(!isCollapsed)}>
                     <CardBody>
                         <CardText>{t('profile.education')}</CardText>
                     </CardBody>
                     </Card>
             <Collapse isOpen={isCollapsed}>
                 <Card>
                     <CardBody>
                     <DynamicSection data={educations} dataset={dataset} updateData={updateEducation} addButtonClass="">
                            <EducationForm />
                        </DynamicSection>
                        <Button type="button" onClick={saveEducationDetails} className="btn btn-primary">{t('profile.save')}</Button>
                        <AlertMessage store={STORES.LOGIN_STORE} />
                     </CardBody>
                 </Card>
             </Collapse>         
           {/* <div>
     { 
     // @ts-ignore
     }
  <Accordion
    open={isOpen}
    toggle={toggle}
  >
    <AccordionItem>
      <AccordionHeader targetId="1">
        Education
      </AccordionHeader>
      <AccordionItem>
        Preview
      </AccordionItem>
    </AccordionItem>
  </Accordion>
</div> */}
        </>
    )
}
