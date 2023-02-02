import { useState } from "react";

export interface useFieldInterface {
    type: string,
    name: string;
    label: string;
}

export const useField = (type : string, name: string, label: string) => {
    const [value, setValue] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      }	
    
    return {
        type,
        value,
        label,
        onChange,
    }
}