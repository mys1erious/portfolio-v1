import React from 'react';


type RangeInputProps = {
    value: number;
    min: number;
    max: number;
    readOnly?: boolean;
    onChange?: (...args: any[]) => void;
};


const RangeInput = ({value, min, max, readOnly=false, onChange}: RangeInputProps) => {
    return (
        <input type="range" min={min} max={max} value={value} readOnly={readOnly} onChange={onChange}
               className="range-slider appearance-none rounded-3xl h-5 w-full xl:w-48
                       bg-gradient-to-r from-orange-600 from-10% via-sky-800 via-60% to-sky-500"
        />
    );
};

export default RangeInput;
