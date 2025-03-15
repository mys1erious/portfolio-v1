'use client';

import React, {ReactNode} from 'react';
import {useWorkExperienceSkillsStore} from "@/app/stores/WorkExperienceHoverState";
import Icon from "@/app/components/Icon";
import {dateDiffInMonth, getDate} from "@/app/utils";


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
    dateToAsPresent?: boolean;
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
    dateToAsPresent=false,
    location,
    features=[],
    description,
    githubHref
}: WorkExperienceProps) => {
    const { setSkills, resetSkills } = useWorkExperienceSkillsStore();



    return (
        <div className="flex flex-col border-b-[1px] pb-2 border-gray-700 text-left"
             onMouseEnter={() => setSkills(skills)} onMouseLeave={resetSkills}
        >
            <div className="flex gap-3 items-start">
                <div className="mt-2 flex-shrink-0">
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
                        <div>{getDate(dateFrom)} - {dateToAsPresent ? 'Present' : getDate(dateTo)}</div>
                        {/*<div>{dateDiffInMonth(dateFrom, dateTo)} mos</div>*/}
                    </div>
                    <ul className="flex flex-col items-start italic">
                        {features.map((feature, index) => (
                            <li key={index}>&#8226; {feature}</li>
                        ))}
                    </ul>
                    <div></div>
                    <div className="text-sm text-gray-400 italic">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
