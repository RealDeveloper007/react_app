import React, { useEffect } from "react";
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { IRegisterFromProps } from "../../interfaces/IRegisterFormProps";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions";
import validator from "validator";
import { AlertMessage } from "../../components/AlertMessage";
import { STORES } from "../../helper/constants";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { useState } = React;

  const [formData, setFormData] = useState<IRegisterFromProps>({
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  });
  const [disableRegister, setDisableRegister] = useState(false);


  const registerStore = useSelector((state: any) => state.registerStore)

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

  const [usernameError, setUsernameError] = useState<boolean | null>(null)
  const validateUsername = (e: any) => {
    var username = e.target.value

    if (!username) {
      setUsernameError(false)
    } else {

      if (username.length < 4) {
        setUsernameError(false);
      } else {
        setUsernameError(true);
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

  const [confirmpasswordError, setConfirmPasswordError] = useState<boolean | null>(null)

  const validateConfirmPassword = (e: any) => {
    var confirmPassword = e.target.value;
    const {password} = formData;

    if (!confirmPassword) {
      setConfirmPasswordError(false)
    } else {
      if (confirmPassword.length < 8) {
        setConfirmPasswordError(false);
      } else {
        if(confirmPassword !== password ) {
          setConfirmPasswordError(false);
        } else {
          setConfirmPasswordError(true);
        }
      }
    }

  }

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e: any) => {
    setDisableRegister(true);

    const { username, email, password, confirm_password} = formData;
    if (username && email && password && emailError && passwordError && usernameError && confirmpasswordError) {
      dispatch(register(formData));
    } else {
      setDisableRegister(false);

      if(!username || !usernameError) {
        setUsernameError(false)
      }
      if (!email || !emailError) {
        setEmailError(false);
      }
      if (!password || !passwordError ) {
        setPasswordError(false);
      }
      if (!confirm_password || !confirmpasswordError ) {
        setConfirmPasswordError(false);
      }

      // alert('Please fill username, email & password');
    }
  }

  useEffect(() => {
    const { status } = registerStore;

    if (status) 
    {
      setTimeout(() => {
        window.location.reload();
      },3000)
    } else {
      setDisableRegister(false);

    }
  }, [registerStore, navigate])

  const [t] = useTranslation('common');

  return (
    <>
      <div className="loginsignup register_form">
        <div className="container">
          <h3>{t('register_form.signup_to')}</h3>
          <AlertMessage store={STORES.REGISTER_STORE} />
          <FormGroup>
            <Label for="username">
              {t('register_form.username')}
            </Label>
            <Input
              id="username"
              name="username"
              placeholder={t('register_form.enter_username')}
              type="text"
              value={formData.username}
              onChange={e => { handleChange(e); validateUsername(e) }}
              valid={usernameError === true}
              invalid={usernameError !== null && usernameError === false}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">
              {t('register_form.email')}
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              value={formData.email}
              placeholder={t('register_form.enter_email')}
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
          <FormGroup>
            <Label for="confirm_password">
              {t('register_form.confirm_password')}
            </Label>
            <Input
              id="confirm_password"
              name="confirm_password"
              placeholder={t('register_form.enter_confirm_password')}
              type="password"
              onChange={e => { handleChange(e); validateConfirmPassword(e) }}
              valid={confirmpasswordError === true}
              invalid={confirmpasswordError!== null && confirmpasswordError === false}
            />
          </FormGroup>

          <Button onClick={handleRegister} disabled={disableRegister}>
            {t('register_form.submit')}
          </Button>

          <Link to="/login" className="back_login"> {t('register_form.back_to_login')}</Link>

        </div>
      </div>
    </>);

}
