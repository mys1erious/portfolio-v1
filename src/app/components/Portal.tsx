import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Portal = () => {
    return (
        <Link href="https://portal.mys1erious.com/" target='_blank'>
            <Image src="/portal.gif" alt="Portal" width={200} height={200} priority
                   placeholder="blur" blurDataURL="/portal_placeholder.png"
            />
        </Link>
    );
};

export default Portal;
