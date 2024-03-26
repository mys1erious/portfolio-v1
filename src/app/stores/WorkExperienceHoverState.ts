import {create} from 'zustand';


type WorkExperienceSkillsState = {
    skills: string[];
    setSkills: (skills: string[]) => void;
    resetSkills: () => void;
};

export const useWorkExperienceSkillsStore = create<WorkExperienceSkillsState>((set) => ({
    skills: [],
    setSkills: (skills: string[]) => set({ skills: skills }),
    resetSkills: () => set({ skills: [] }),
}));
