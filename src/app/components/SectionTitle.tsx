import React, {ReactNode} from 'react';


type SectionTitleProps = {
    children?: ReactNode;
};


const SectionTitle = ({children}: SectionTitleProps) => {
    return (
        <div className="text-xl mb-4">
            {children}
        </div>
    );
};

export default SectionTitle;
