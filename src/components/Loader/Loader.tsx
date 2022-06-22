import React from "react";
import { Spinner } from "reactstrap";
import { useSelector } from "react-redux";
import {  LOADING } from "../../helper/constants";

export default function Loader() {

    const { loginStore, registerStore,contactStore, companyStore,pictureSubmitStore,commentSubmitStore,profileStore } = useSelector((state:any)=>state);
    const loading:boolean = loginStore.phase === LOADING || registerStore.phase === LOADING || profileStore.phase === LOADING;
    return (
        <>
        {
        loading &&
        <Spinner size="" color="warning" type="border" className="loading"> Loading...</Spinner>
        }
        </>
    )
}
