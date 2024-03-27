'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {PlaceholderValue} from "next/dist/shared/lib/get-img-props";


type IconProps = {
    src: string;
    alt: string;
    href?: string;
    width?: number;
    height?: number;
    text?: string;
    scaleUpOnHover?: boolean;
    rounded?: boolean;
    border?: boolean;
    borderColor?: string;
    placeholder?: PlaceholderValue;
    blurDataURL?: string;
};


const Icon = ({
    src,
    alt,
    href="",
    width = 24,
    height = 24,
    text="",
    scaleUpOnHover=true,
    rounded=false,
    border=false,
    borderColor='border-gray-700',
    placeholder,
    blurDataURL
}: IconProps) => {
    const handleClick = (e: React.MouseEvent) => {
        if (!href) {
            e.preventDefault();
        }
    };

    return (
        <div className="flex items-center justify-center">
            <Link href={href} target='_blank' className="relative inline-block" onClick={handleClick}>
                <div className="group relative">
                    <Image className={"transition-transform duration-200 ease-in-out" +
                           ` ${scaleUpOnHover ? 'hover:scale-125' : ''} ${rounded ? 'rounded-full' : ''}` +
                           ` ${border ? 'border ' + borderColor : ''}`}
                           src={src} alt={alt} width={width} height={height}
                           placeholder={placeholder} blurDataURL={blurDataURL}
                    />
                    {text ?
                        <div className="absolute opacity-0 pointer-events-none bottom-full left-1/2 -translate-x-1/2
                     transition-opacity duration-500 ease-in-out group-hover:opacity-100 text-center">
                            <div className="px-3 py-1 bg-black text-sm rounded-3xl whitespace-nowrap">{text}</div>
                            <div className="mt-[-8px] text-gray-600">&#9660;</div>
                        </div> : <></>
                    }
                </div>
            </Link>
        </div>
    );
};

export default Icon;
