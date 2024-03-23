'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";


type IconProps = {
    href?: string;
    src: string;
    alt: string;
    width?: number;
    height?: number;
    text?: string;
};


const Icon = ({href="", src, alt, width = 24, height = 24, text}: IconProps) => {
    const handleClick = (e: React.MouseEvent) => {
        if (!href) {
            e.preventDefault();
        }
    };

    return (
        <Link href={href} target='_blank' className="relative inline-block" onClick={handleClick}>
            <div className="group relative">
                <Image className="transition-transform duration-500 ease-in-out hover:scale-125"
                       src={src} alt={alt} width={width} height={height}
                />
                <div className={`bottom-full absolute opacity-0 pointer-events-none left-1/2 -translate-x-1/2 
                     transition-opacity duration-500 ease-in-out group-hover:opacity-100`}>
                    <div className="px-3 py-1 bg-black text-sm rounded-3xl whitespace-nowrap">{text}</div>
                    <div className="mt-[-8px] text-gray-600">&#9660;</div>
                </div>
            </div>
        </Link>
    );
};

export default Icon;
