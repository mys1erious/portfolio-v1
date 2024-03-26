'use client';

import React from 'react';
import {useWorkExperienceSkillsStore} from "@/app/stores/WorkExperienceHoverState";


type WorkExperienceProps = {
    // Other props
    skills: string[];
};

const WorkExperience = ({ skills }: WorkExperienceProps) => {
    const { setSkills, resetSkills } = useWorkExperienceSkillsStore();

    return (
        <div onMouseEnter={() => setSkills(skills)}
             onMouseLeave={resetSkills}
        >
            {skills}
        </div>
    );
};

export default WorkExperience;
