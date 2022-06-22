import React from 'react';
import { Button, Input } from 'reactstrap';
import { useTranslation } from "react-i18next";

export default function EducationForm(props: any) {
    const [t] = useTranslation('common');

    const { index, item, updateItem } = props;
    const updateItemKey = (e: any) => {
        const { name, value } = e.target;
        const newItem = { ...item, [name]: value };
        updateItem(index, newItem)
    };

    return (
        <div className="collapse_input_block">
            <Input type='text' name="school_college" placeholder={t('profile.enter_school_college')} value={item.school_college} onChange={e => updateItemKey(e)} />
            <Input type='text' name="city" placeholder={t('profile.enter_city')} value={item.city} onChange={e => updateItemKey(e)} />
            <Input type='text' name="period" placeholder={t('profile.enter_your_period')} value={item.period} onChange={e => updateItemKey(e)} />
            <Button onClick={e => updateItem(index, null)} className="btn btn-danger"> - {t('profile.remove')}</Button>
        </div>
    )
}