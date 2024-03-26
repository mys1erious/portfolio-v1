'use client';

import React from 'react';
import Icon from "@/app/components/Icon";
import {useWorkExperienceSkillsStore} from "@/app/stores/WorkExperienceHoverState";


type SkillProps = {
    skillName: string;
    src: string;
    alt: string;
    href?: string;
    width?: number;
    height?: number;
    text?: string;
    scaleUpOnHover?: boolean;
    rounded?: boolean;
    border?: boolean;
    borderColor?: string;
};

const Skill = ({
    skillName, src, alt, href, width, height, text, scaleUpOnHover, rounded, border, borderColor
}: SkillProps) => {
    const { skills } = useWorkExperienceSkillsStore();
    const isHovered = skills.length > 0;
    const isHighlighted = skills.includes(skillName);

    return (
        <div className={
            `${isHovered && isHighlighted ? 'skill-orange-filter transition-transform duration-300 ease-in-out scale-110' : ''}` +
            `${isHovered && !isHighlighted ? 'opacity-40' : ''}`
        }>
            <Icon src={src} alt={alt} href={href} width={width} height={height} text={text} scaleUpOnHover={scaleUpOnHover}
                  rounded={rounded} border={border} borderColor={borderColor}
            />
        </div>
    );
};

export default Skill;
