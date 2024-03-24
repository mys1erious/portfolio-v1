import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Portal = () => {
    return (
        <Link href="https://mys1erious.com/v2/" target='_blank'>
            <Image src="/portal.gif" alt="Portal" width={200} height={200}/>
        </Link>
    );
};

export default Portal;
