'use client';

import React from 'react';
import Icon from "@/app/components/Icon";
import Section from "@/app/components/Section";
import {languagesByIndex, languagesByCode} from "@/app/constants";
import RangeInput from "@/app/components/RangeInput";


type LanguageProps = {
    src: string;
    alt: string;
    text: string;
    level: "A1" | "A2" | "B" | "C1" | "C2";
};


const LanguageLevelOverlay = ({ index, onHover }: {index: number; onHover: any;}) => (
    <div
        onMouseEnter={() => onHover(languagesByIndex[index]?.description)}
        onMouseLeave={() => onHover('')}
        className="absolute w-[20%] h-full opacity-0"
        style={{ left: `${(index / 5) * 100}%` }}
    />
);


const Language = ({src, alt, text, level}: LanguageProps) => {
    const languageIndex = languagesByCode[level]?.index;
    const [hoverText, setHoverText] = React.useState('');

    return (
        <Section className="flex gap-4 items-center py-1 px-6 w-full">
            <div className="flex-shrink-0">
                <Icon src={src} alt={alt} text={text} width={28} height={28} scaleUpOnHover={false}/>
            </div>
            <div className="relative h-5 w-full">
                <div className="absolute top-0 left-0 w-full h-5">
                    {Array.from({length: 5}).map((_, i) => (
                        <div key={i}>
                            {i < 4 ? <span className="absolute w-px h-5 bg-lightblue"
                                           style={{left: `${((i + 1) / 5) * 100}%`}}/> : <></>}
                            <LanguageLevelOverlay index={i} onHover={setHoverText}/>
                        </div>
                    ))}
                </div>
                <RangeInput min={0} max={10} value={languageIndex * 2+1} readOnly={true}/>
                {hoverText ?
                    <div className="absolute pointer-events-none bottom-full left-1/2 -translate-x-1/2">
                        <div className="px-3 py-1 bg-black text-sm rounded-3xl whitespace-nowrap">{hoverText}</div>
                        <div className="mt-[-8px] text-gray-600">&#9660;</div>
                    </div> : <></>
                }
            </div>
        </Section>
    );
};

export default Language;
