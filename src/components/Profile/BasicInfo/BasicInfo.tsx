import React, { useEffect } from 'react';
import { Card, Row, Col, CardTitle, CardImg, Button, FormGroup, Input } from 'reactstrap';
import { IProfileBasicProps } from '../../../interfaces/IProfileBasicProps';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { profile } from '../../../redux/profile/actions';
import { PROFILE_BASIC_URL, STORES, SUCCESS } from '../../../helper/constants';
import { Radio } from '../../../customComponents/Radio';
import { Checkbox } from '../../../customComponents/Checkbox';
import { PROFILE_URL } from '../../../helper/constants';
import { AlertMessage } from '../../AlertMessage';
import { useNavigate } from 'react-router';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BasicInfo() {
    const dispatch = useDispatch();
    const [t] = useTranslation('common');
    const loginStore = useSelector((state: any) => state.loginStore)
    const userInfo = loginStore.user;
    const navigate = useNavigate();

    const profileStore = useSelector((state: any) => state.profileStore);
    const {  phase } = profileStore;

    const { useState } = React;
    const [formData, setFormData] = useState<IProfileBasicProps | any>({
        image: userInfo?.image,
        name: userInfo?.username,
        phone: userInfo?.phone,
        email: userInfo?.email,
        dob: userInfo?.dob,
        net_salary: userInfo?.basic_info?.net_salary,
        user_status:userInfo?.basic_info?.user_status,
        user_interest:userInfo?.basic_info?.user_interest,
        cv:userInfo?.basic_info?.cv,
        category_driving_licence: userInfo?.basic_info?.category_driving_licence,
    });


    const handleFileChange = (e: any) => { 
        const name = e.target.name;
        setFormData({ ...formData, [name]: e.target.files[0] });
    }
    const handleChange = (e: any) => {
        if(e?.target === undefined)
        {
            const name = 'dob';
            const value = e;
            setFormData({ ...formData, [name]: value });
            setStartDate(e);
        } else {
            const name = e.target.name;
            const value = e.target.value;
            setFormData({ ...formData, [name]: value });
        }
    };
    const [startDate, setStartDate] = useState(new Date());

    const handleCheckBoxChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        let checkBoxData = formData[name] ? [...formData[name]]: [];
        if (!e.target.checked) {
            checkBoxData.push(value);
        } else {
            checkBoxData = checkBoxData.filter(item => item !== value);
        }
        setFormData({ ...formData, [name]: checkBoxData }); 
    }
    const handleUpdateProfile = (e: any) => {
        if(formData.user_status === undefined)
        {
            alert(t('messages.select_user_status'));
        } else if(formData.name === undefined)
        {
            alert(t('messages.fill_name'));
        } else if(formData.phone === undefined)
        {
            alert(t('messages.fill_phone'));
        }  else if(formData.net_salary === undefined)
        {
            alert(t('messages.select_net_salary'));

        }  else if(formData.category_driving_licence === undefined)
        {
            alert(t('messages.select_driving_licence'));

        } else {

            dispatch(profile(formData));
        }
    }

    useEffect(() => {

          if (phase === SUCCESS) 
          {
            // navigate('/profile', { replace: true });
            // console.log(data);
            setTimeout(() => {
                window.location.reload();
              },3000)
          } 
      }, [phase,navigate])

    const downloadCV = (cv: any) => {
        // download file
        return true;
    }

   
    return (
        <>
            <div className="profile_sec">
                <div className="container">
                    <Card body>
                        <Row>
                            <Col sm="4">
                                <div className="profile_image">
                                    <CardImg
                                        alt={formData.name}
                                        src={PROFILE_URL}
                                        top
                                        width="20%"
                                    />
                                </div>
                            </Col>
                            <Col sm="8">
                                <div className="stats_detail">
                                    <CardTitle tag="h1">
                                        {t('profile.title')}
                                    </CardTitle>
                                    {/* <a href={PROFILE_BASIC_URL+formData.cv} target="_blank" >   <Button onClick={(e) => downloadCV(formData.cv)}>{t('profile.download_cv')}</Button></a> */}
                                </div>
                            </Col>
                        </Row>
                    </Card>

                    <div className="status_sec">
                        <Row>
                           
                            {/* <Col sm="4">
                        <Card body>
                            <FormGroup check>
                                <Input
                                    name="status"
                                    type="radio"
                                />
                                {' '}
                                <Label check>
                                    I am actively looking
                                    for a job
                                </Label>
                            </FormGroup>
                        </Card>

                    </Col>
                    <Col sm="4">
                        <Card body>
                            <FormGroup check>
                                <Input
                                    name="status"
                                    type="radio"
                                />
                                {' '}
                                <Label check>
                                    I Would Consider
                                    Better Jobs
                                </Label>
                            </FormGroup>
                        </Card>

                    </Col>
                    <Col sm="4">
                        <Card body>
                            <FormGroup check>
                                <Input
                                    name="status"
                                    type="radio"
                                />
                                {' '}
                                <Label check>
                                    I’m not looking for a
                                    job
                                </Label>
                            </FormGroup>
                        </Card>

                    </Col> */}
                        </Row>
                        <Row>
                           
                        </Row>
                    </div>
                    <div className="basic_info">
                        <h3>Basic Info</h3>
                        <FormGroup>
                            <p>
                                {t('profile.name')}
                            </p>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                        <p>
                                {t('register_form.email')}
                            </p>
                            <Input
                                id="exampleemail"
                                name="email"
                                value={formData.email}
                                type="email"
                                onChange={handleChange}
                                disabled
                            />
                        </FormGroup>
                        <FormGroup>
                            <p>
                                {t('profile.phone')}
                            </p>
                            <Input
                                id="examplephone"
                                name="phone"
                                value={formData.phone}
                                type="text"
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <p >
                                {t('profile.year')}
                            </p>
                            <Input
                                id="exampledob"
                                name="dob"
                                value={formData.dob}
                                type="date"
                                onChange={handleChange}
                            />
                            {/* <Input
                                id="exampleyear"
                                name="year"
                                type="select"
                            >
                                {
                                    profileYears.map((value, index) =>

                                        <option key={`opt${index}`}
                                            value={value}>
                                            {value}
                                        </option>

                                    )
                                }
                            </Input> */}
                           
                            {/* <DatePicker selected={startDate} onChange={(e:any) => handleChange(e) } /> */}

                        </FormGroup>
                        <FormGroup>
                            <p>
                                CV
                            </p>
                            <Input
                                id="cv_file"
                                name="cv"
                                type="file"
                                onChange={handleFileChange}
                            />
                        </FormGroup>
                    </div>
                    <div className="more_info">
                        <FormGroup tag="fieldset">
                            <legend>
                                {t('profile.more_info')}
                            </legend>
                        </FormGroup>
                        
                        {/* <FormGroup check>
                    <Input
                        name="salary"
                        type="radio"
                    />
                    {' '}
                    <Label check>
                        0-200 EUR
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Input
                        name="salary"
                        type="radio"
                    />
                    {' '}
                    <Label check>
                        200-400 EUR
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Input
                        name="salary"
                        type="radio"
                    />
                    {' '}
                    <Label check>
                        400-800 EUR
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Input
                        name="salary"
                        type="radio"
                    />
                    {' '}
                    <Label check>
                        800-1200 EUR
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Input
                        name="salary"
                        type="radio"
                    />
                    {' '}
                    <Label check>
                        1200-1800 EUR
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Input
                        name="salary"
                        type="radio"
                    />
                    {' '}
                    <Label check>
                        1800+ EUR
                    </Label>
                </FormGroup> */}

                       
                    </div>
                    <AlertMessage store={STORES.PROFILE_STORE} />

                    <Button onClick={handleUpdateProfile}>
                        {t('register_form.submit')}
                    </Button>
                </div>
            </div>
            <div>
            </div>
        </>
    )
}