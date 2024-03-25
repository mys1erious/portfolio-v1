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
        <Section className="flex flex-col rounded-xl border border-orange-600 px-4 py-2 text-left">
            <div className="flex flex-shrink-0">
                <Icon src={src} alt={alt} href={href} text={iconText}
                      width={28} height={28} scaleUpOnHover={false}
                />
            </div>
            <div>{university}</div>
            <div>{discipline}</div>
            <div>{qualification}</div>
            <div className="flex justify-between text-xs text-gray-400">
                <div>Ukraine, Kyiv</div>
                <div>09/2019-06/2023</div>
            </div>
        </Section>
    );
};

export default Education;
