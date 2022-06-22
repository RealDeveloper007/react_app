import React from 'react';
import { BasicInfo } from '../../components/Profile/BasicInfo';
import { Experience } from '../../components/Profile/Experience';
import { Education } from '../../components/Profile/Education';
import { Skills } from '../../components/Profile/Skills';
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function Profile() {
    const [t] = useTranslation('common');

    return (
        <>
        <BasicInfo/>
        <div className="collapse_section">
        <div className="container">
        <Skills />
        <Experience />
        <Education />
        </div>
        </div>
        <Link to="/" className="back_login">{t('profile.back_to_home')}</Link>
        </>
    )
}