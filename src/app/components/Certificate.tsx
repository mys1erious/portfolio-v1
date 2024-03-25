import React from 'react';
import Icon from "@/app/components/Icon";


type CertificateProps = {
    href: string;
    text: string;
};


const Certificate = ({href, text}: CertificateProps) => {
    return (
        <div className="flex gap-2 items-center">
            <Icon src="/certificate.png" alt="Certificate"
                  href={href} text="Link"
                  width={20} height={20}
                  scaleUpOnHover={false}
            />
            <div>{text}</div>
        </div>
    );
};

export default Certificate;
