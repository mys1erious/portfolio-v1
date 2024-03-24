import React, {ReactNode} from 'react';


type SectionProps = {
    children?: ReactNode;
    className?: string;
};

// TODO: fix shadow (combine default + shadow-light on hover)
const Section = ({ children, className='' }: SectionProps ) => {
    return (
        <div className={`p-2 section-bg rounded-3xl border border-gray-700 shadow-xl shadow-darkblue
             transition duration-400 hover:bg-opacity-90 hover:shadow-light ${className}`}>
            {children}
        </div>
    );
};

export default Section;
