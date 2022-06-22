import React from 'react';
import { Button, Input } from 'reactstrap';
import { useTranslation } from "react-i18next";

export default function SkillsForm(props: any) {
    const [t] = useTranslation('common');

    const { index, item, updateItem } = props;
    
    return (
        <div className="collapse_input_block">
                <Input className="form-control" type='text' value={item} placeholder={t('profile.enter_your_skill')} onChange={e => updateItem(index, e.target.value)} />
                <Button onClick={e => updateItem(index, null)} className="btn btn-danger"> - {t('profile.remove')}</Button>
        </div>
    )
} 