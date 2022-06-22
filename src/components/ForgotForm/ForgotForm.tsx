import React from "react";
import { Link } from "react-router-dom";
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { IForgotFromProps } from "../../interfaces/IForgotFromProps";
import {useTranslation} from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { forgot } from "../../redux/actions";
import { AlertMessage } from "../AlertMessage";
import { STORES } from "../../helper/constants";

export default function RegisterForm() {
  const { useState } = React;
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<IForgotFromProps>({
    email: '',
  });
  const [emailError, setEmailError] = useState<boolean | null>(null)
  const validateEmail = (e: any) => {
    var email = e.target.value

    if (!email) {
      setEmailError(false)
    } else {

      if (validator.isEmail(email)) {
        setEmailError(true);

      } else {
        setEmailError(false);
      }
    }
  }
  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleforgot = (e: any) => {
    const { email } = formData;

    if (!email || !emailError ) {
      if (!email || !emailError) {
        setEmailError(false);
      }
    } else {

      dispatch(forgot(formData));
    }
  }

  const [t] = useTranslation('common');

  return (
    <>
    <div className="loginsignup login_page">
      <div className="container">
        <div className="forgot_inner">
        <h3>{t('login_form.forgot_password')}</h3>
        <p> {t('forgot_form.forgot_text')}</p>
        <AlertMessage store={STORES.FORGOT_STORE} />

      <FormGroup>
        <Label for="exampleEmail">
        {t('register_form.email')}
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          value={formData.email}
          placeholder={t('login_form.enter_your_email')}
          type="email"
          onChange={e => { handleChange(e); validateEmail(e) }}
          valid={emailError === true}
          invalid={emailError !== null && emailError === false}
        />
      </FormGroup>
    
      <div className="loginpage_btn">
      <Button onClick={handleforgot}>
      {t('register_form.submit')}
      </Button>
      <Link to="/login" className="back_login"> {t('register_form.back_to_login')}</Link>
      </div>
      </div>
      </div>
      </div>
    </>);

}
