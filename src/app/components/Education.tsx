import React from 'react';
import Icon from "@/app/components/Icon";
import BgVideoOpacityControl from "@/app/components/BgVideoOpacityControl";
import Section from "@/app/components/Section";


type EducationProps = {
    src: string;
    alt: string;
    href: string;
    university: string;
    discipline: string;
    qualification: string;
    iconText?: string;
};


const Education = ({src, alt, href, university, discipline, qualification, iconText=''}: EducationProps) => {
    return (
        <div className="flex flex-col px-4 py-2 text-left border-b-[1px] pb-2 border-gray-700">
            <div className="flex flex-shrink-0">
                <Icon src={src} alt={alt} href={href} text={iconText}
                      width={28} height={28} scaleUpOnHover={false}
                />
            </div>
            <div className="text-lg">{university}</div>
            <div>{discipline}</div>
            <div>{qualification}</div>
            <div className="flex justify-between text-sm text-gray-400">
                <div>Ukraine, Kyiv</div>
                <div>09/2019-06/2023</div>
            </div>
        </div>
    );
};

export default Education;
