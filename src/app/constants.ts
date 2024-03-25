export const skillSize = 48;


type languageProps = {
    index: number;
    code: string;
    description: string;
};
const languages: languageProps[] = [
    { index: 0, code: 'A1', description: "A1. Elementary proficiency" },
    { index: 1, code: 'A2', description: "A2. Limited working proficiency" },
    { index: 2, code: 'B', description: "B1/B2. Professional working proficiency" },
    { index: 3, code: 'C1', description: "C1. Full professional proficiency" },
    { index: 4, code: 'C2', description: "C2. Native or bilingual proficiency" },
];


type languagesByIndexProps = {
    [key: number]: languageProps;
};
export const languagesByIndex: languagesByIndexProps = languages.reduce((acc, curr) => {
    acc[curr.index] = curr;
    return acc;
}, {} as languagesByIndexProps);


type languagesByCodeProps = {
    [key: string]: languageProps;
};
export const languagesByCode: languagesByCodeProps = languages.reduce((acc, curr) => {
    acc[curr.code] = curr;
    return acc;
}, {} as languagesByCodeProps);
