'use client';

import React from 'react';
import {useBgVideoStore} from "@/app/stores/BgVideo";
import RangeInput from "@/app/components/RangeInput";


const BgVideoOpacityControl = () => {
    const {opacity, setOpacity} = useBgVideoStore();

    const handleOpacityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newOpacity = event.target.valueAsNumber / 100;
        setOpacity(newOpacity);
    };

    return (
        <div className="w-full max-w-[192px] flex items-center">
            <RangeInput min={0} max={100} value={opacity * 100} onChange={handleOpacityChange}/>
        </div>
    );
}

export default BgVideoOpacityControl;
