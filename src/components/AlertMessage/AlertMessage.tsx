import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "reactstrap"
import { ALERT_CLASS, ALERT_TIMEOUT, ERROR, SUCCESS, STORES } from "../../helper/constants";
import { resetLoginAlert, resetProfileAlert, resetForgotAlert } from "../../redux/actions";

export default function AlertMessage(props: any) {

  const { loginStore, registerStore,forgotStore,profileStore } = useSelector((state: any) => state);
  const { store }: {store: STORES} = props;
  const stores = {
    [STORES.LOGIN_STORE]: loginStore,
    [STORES.REGISTER_STORE]: registerStore,
    [STORES.FORGOT_STORE]: forgotStore,
    [STORES.PROFILE_STORE]: profileStore,

  };
  const dispatch = useDispatch();
  const message: boolean = stores[store].message;
  const phase: string = stores[store].phase;
  const { SUCCESS: ALERT_SUCCESS, ERROR: ALERT_ERROR } = ALERT_CLASS;

  useEffect(() => {
    if ([SUCCESS, ERROR].find(status => status === phase)) {
      // alert(message)

      setTimeout(() => {
        switch (store) {
          case STORES.LOGIN_STORE:
            dispatch(resetLoginAlert());
            break;
          case STORES.FORGOT_STORE:
              dispatch(resetForgotAlert());
              break;
          case STORES.PROFILE_STORE:
              dispatch(resetProfileAlert());
              break;
            break;
          default:
            break;
        }
      }, ALERT_TIMEOUT);
    }
  }, [dispatch, message, phase, store]);


  return (
    <>
      {
        <Alert color={phase === SUCCESS ? ALERT_SUCCESS : ALERT_ERROR} isOpen={!!message}>
          {message}
        </Alert>
      }
    </>
  )
}
