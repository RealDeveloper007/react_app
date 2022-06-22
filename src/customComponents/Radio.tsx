import React, { useRef } from 'react';
import { Label, Input } from 'reactstrap';

export const Radio = (props: any) => {
    const { label, ...inputProps } = props;
    let radioRef = useRef(null);
    return <>
        <Input
            {...inputProps}
            type="radio"
            innerRef={radioRef}
        />
        <Label check={inputProps.checked} onClick={() => inputProps.onChange({target: radioRef.current})}>
            {label} 
        </Label>
    </>
}