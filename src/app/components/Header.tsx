import React from 'react';
import Image from "next/image";
import Link from "next/link";


const Header = () => {
    return (
        <header className="mt-[7%] mx-[20%] text-white bg-lightblue bg-opacity-30 py-2 rounded-full border
                border-gray-700 z-10 transition duration-400 hover:bg-opacity-90 hover:shadow-light">
            <div className="container mx-auto flex justify-between items-center">
                <div></div>
                <nav>
                    <ul className="flex space-x-4 mr-10">
                        <Link href="https://github.com/mys1erious" target='_blank'>
                            <Image src="/github.png" alt="Github" width={24} height={24}/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/yevhenii-lavrinovych/" target='_blank'>
                            <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24}/>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
