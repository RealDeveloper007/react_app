import React, { useRef } from 'react';
import { Label, Input } from 'reactstrap';

export const Checkbox = (props: any) => {
    const { label, ...inputProps } = props;
    let checkboxRef = useRef(null);
    return <>
        <Input
            {...inputProps}
            type="checkbox"
            innerRef={checkboxRef}
        />
        <Label check={inputProps.checked} onClick={() => inputProps.onChange({target: checkboxRef.current})}>
            {label} 
        </Label>
    </>
}