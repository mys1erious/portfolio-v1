'use client';

import React, {ReactNode} from 'react';
import {useWorkExperienceSkillsStore} from "@/app/stores/WorkExperienceHoverState";
import Icon from "@/app/components/Icon";


type ProjectExperienceProps = {
    skills: string[];
    href?: string;
    src: string;
    alt: string;
    name: string;
    githubHref: string;
    features?: string[];
    description?: ReactNode;
};


const Project = ({
    skills,
    href="",
    src,
    alt,
    name,
    githubHref,
    features=[],
    description
}: ProjectExperienceProps) => {
    const { setSkills, resetSkills } = useWorkExperienceSkillsStore();


    return (
        <div className="flex flex-col border-b-[1px] pb-2 border-gray-700"
             onMouseEnter={() => setSkills(skills)} onMouseLeave={resetSkills}
        >
            <div className="flex gap-3 items-start">
                <div className="mt-2">
                    <Icon src={src} alt={alt} href={href} text={name} width={48} rounded={true} scaleUpOnHover={false}/>
                </div>
                <div className="flex flex-col items-start">
                    <div className="flex gap-1 text-xl">
                        <Icon href={githubHref} src="/socials/github.png" alt="Github"
                              text="Github" scaleUpOnHover={false} width={20}
                        />
                        <div>{name}</div>
                    </div>
                    <ul className="flex flex-col items-start text-left italic">
                        {features.map((feature, index) => (
                            <li key={index}>&#8226; {feature}</li>
                        ))}
                    </ul>
                    <div className="text-sm text-gray-400 text-left italic">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
