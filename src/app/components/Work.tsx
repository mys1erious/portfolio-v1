'use client';

import React, {ReactNode} from 'react';
import {useWorkExperienceSkillsStore} from "@/app/stores/WorkExperienceHoverState";
import Icon from "@/app/components/Icon";
import {dateDiffInMonth} from "@/app/constants";


type WorkExperienceProps = {
    skills: string[];
    href: string;
    src: string;
    alt: string;
    position: string;
    name: string;
    type: string;
    dateFrom: Date;
    dateTo: Date;
    location: string;
    features?: string[];
    description?: ReactNode;
    githubHref?: string;
};


const Work = ({
    skills,
    href,
    src,
    alt,
    position,
    name,
    type,
    dateFrom,
    dateTo,
    location,
    features=[],
    description,
    githubHref
}: WorkExperienceProps) => {
    const { setSkills, resetSkills } = useWorkExperienceSkillsStore();

    const getDate = (date: Date): string => {
        const now = new Date();
        if (date.getUTCFullYear() === now.getUTCFullYear() && date.getUTCMonth() === now.getUTCMonth()) {
            return 'Present';
        }
        return date.toLocaleString(
            'default',
            {month: 'long'}
        ) + '/' + date.getUTCFullYear();
    };

    return (
        <div className="flex flex-col border-b-[1px] pb-2 border-gray-700 text-left"
             onMouseEnter={() => setSkills(skills)} onMouseLeave={resetSkills}
        >
            <div className="flex gap-3 items-start">
                <div className="mt-2">
                    <Icon src={src} alt={alt} href={href} text={name} width={64} rounded={true} scaleUpOnHover={false}/>
                </div>
                <div className="flex flex-col items-start">
                    <div className="flex gap-1 text-xl">
                        {githubHref ?
                            <Icon href={githubHref} src="/socials/github.png" alt="Github"
                                  text="Github" scaleUpOnHover={false} width={20}
                            /> : <></>
                        }

                        {position}
                    </div>
                    <div>
                        <div>{name}, {type}</div>
                    </div>
                    <div className="flex flex-col items-start text-sm text-gray-400">
                        <div>{location}</div>
                        <div>{getDate(dateFrom)} - {getDate(dateTo)}</div>
                        <div>{dateDiffInMonth(dateFrom, dateTo)} mos</div>
                    </div>
                    <ul className="flex flex-col items-start italic">
                        {features.map((feature, index) => (
                            <li key={index}>&#8226; {feature}</li>
                        ))}
                    </ul>
                    <div className="text-sm text-gray-400 italic">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
