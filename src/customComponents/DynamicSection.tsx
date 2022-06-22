import React from 'react';
import { Button } from 'reactstrap';
import { useTranslation } from "react-i18next";

export const DynamicSection = (props: any) => {
    const [t] = useTranslation('common');

    const { children, data, dataset, updateData, type, addButtonClass } = props;
    const dataVal = [...data];
    const updateItem = (index: any, newItem: any) => {
        const newData = [...data];
        if (newItem !== null) {
            newData[index] = newItem;
        } else {
            newData.splice(index, 1);
        }
        console.log({ index, newItem, data, newData });
        updateData(newData);
    }

    return <>
        <div className={addButtonClass}>
            <Button
                onClick={() => {
                    const newDataVal = [...dataVal, dataset];
                    console.log({ dataset, dataVal, newDataVal });
                    updateData(newDataVal);
                }}
                className="btn btn-warning"
            >
                + {t('profile.add')}
            </Button>
        </div>
        {
            React.Children.map(children, (child) =>
                data.map((item: any, index: any) => 
                    React.cloneElement(child, {
                        item,
                        index,
                        key: `${type}${index}`,
                        updateItem
                    })
                )
            )
        }
    </>
}