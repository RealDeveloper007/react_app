import React from 'react';
import { Button, Input, Label } from 'reactstrap';
import { useTranslation } from "react-i18next";

export default function ExperienceForm(props: any) {
    const [t] = useTranslation('common');

    const { index, item, updateItem } = props;
    const updateItemKey = (e: any) => {
        const { name, value } = e.target;
        const newItem = { ...item, [name]: value };
        updateItem(index, newItem)
    };

    return (
        <div className="collapse_input_block">
            <Input type='text' name="companyName" placeholder={t('profile.enter_company_name')} value={item.companyName} onChange={e => updateItemKey(e)} />
            <Input type='text' name="location" placeholder={t('profile.enter_location')} value={item.location} onChange={e => updateItemKey(e)} />
            <Input type='text' name="position" placeholder={t('profile.enter_position')} value={item.position} onChange={e => updateItemKey(e)} />
            <Input type='text' name="from" placeholder={t('profile.month_year_start')} value={item.from} onChange={e => updateItemKey(e)} />
            <Input type='text' name="to" placeholder={t('profile.month_year_end')} value={item.to} onChange={e => updateItemKey(e)} />
            <Button onClick={e => updateItem(index, null)} className="btn btn-danger"> - {t('profile.remove')}</Button>
        </div>
    )
}