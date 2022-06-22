import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { ILoginFromProps } from '../../interfaces/ILoginFormProps'
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions";
import validator from "validator";
import { AlertMessage } from "../../components/AlertMessage";
import { INIT, LOADING, STORES } from "../../helper/constants";

export default function LoginForm() {
  const [t] = useTranslation('common');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { useState } = React;
  const [formData, setFormData] = useState<ILoginFromProps>({
    email: '',
    password: ''
  });
  const [disableLogin, setDisableLogin] = useState(false);

  const loginStore = useSelector((state: any) => state.loginStore);
  const { isLoggedIn, phase } = loginStore;

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

  const [passwordError, setPasswordError] = useState<boolean | null>(null)

  const validatePassword = (e: any) => {
    var password = e.target.value;

    if (!password) {
      setPasswordError(false)
    } else {
      if (password.length < 8) {
        setPasswordError(false);
      } else {
        setPasswordError(true);
      }
    }

  }

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e: any) => {
    const { email, password } = formData;

    if (!email || !password || !emailError || !passwordError) {
      if (!email || !emailError) {
        setEmailError(false);
      }
      if (!password || !passwordError) {
        setPasswordError(false);
      }
    } else {

      dispatch(login(formData));
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/profile', { replace: true });
    } else {

      if (phase === INIT) {
        setDisableLogin(false);
      } else if (phase === LOADING) {
        setDisableLogin(true);
      }
    }

  }, [isLoggedIn, navigate, setDisableLogin, phase])

  return (
    <>
      <div className="loginsignup login_page">
        <div className="container">
          <div className="login_inner">
            <h4> {t('navbar.login')}</h4>
            <AlertMessage store={STORES.LOGIN_STORE} />
            <FormGroup>
              <Label for="exampleEmail">
                {t('login_form.email_or_phone')}
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
            <FormGroup>
              <Label for="examplePassword">
                {t('login_form.password')}
              </Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder={t('login_form.enter_password')}
                type="password"
                onChange={e => { handleChange(e); validatePassword(e) }}
                valid={passwordError === true}
                invalid={passwordError !== null && passwordError === false}
              />
            </FormGroup>
            <div className="loginpage_btn">
              <Button className="login_btn" onClick={handleLogin} disabled={disableLogin}>
                {t('navbar.login')}
              </Button>
              <br/>
              <Link to="/forgot">{t('login_form.forgot_password')}</Link>
            </div>
          </div>
        </div>
      </div>
    </>);

}
