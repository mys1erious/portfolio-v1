import React from 'react';


type RangeInputProps = {
    value: number;
    min: number;
    max: number;
    readOnly?: boolean;
    onChange?: (...args: any[]) => void;
    className?: string;
};


const RangeInput = ({value, min, max, readOnly=false, onChange, className}: RangeInputProps) => {
    return (
        <input type="range" min={min} max={max} value={value} readOnly={readOnly} onChange={onChange}
               className={`range-slider appearance-none rounded-3xl h-5 w-full
                       bg-gradient-to-r from-orange-600 from-10% via-sky-800 via-60% to-sky-500 ${className}`}
        />
    );
};

export default RangeInput;
