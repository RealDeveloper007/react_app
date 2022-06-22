import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CardFooter, Row, Col, Nav, Input, Button } from 'reactstrap';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';
import { INIT, LOADING, LOGO_URL, STORES } from '../../helper/constants';
import validator from "validator";
import { AlertMessage } from '../AlertMessage';
import CookieConsent from "react-cookie-consent";

export default function Footer() { 
    const [t] = useTranslation('common');
    const dispatch = useDispatch();
    const { useState } = React;
 
    return (
        <>
        <div className="footer">
            <div className="container">
                <Row>
                    <Col sm="4">
                        
                    </Col>
                    <Col sm="4">
               
                        
                    </Col>
                    <Col sm="4">
              
                      

                    </Col>
                </Row>
            </div>
        </div>
        </>
    )
}