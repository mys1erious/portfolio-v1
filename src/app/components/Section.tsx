import React, {ReactNode} from 'react';


type SectionProps = {
    children?: ReactNode;
    className?: string;
};

// TODO: fix shadow (combine default + shadow-light on hover)
const Section = ({ children, className='' }: SectionProps ) => {
    return (
        <div className={"section-bg rounded-3xl border border-gray-700 shadow-xl shadow-darkblue" +
            ` transition duration-400 opacity-85 hover:shadow-light ${className}`}>
            {children}
        </div>
    );
};

export default Section;
