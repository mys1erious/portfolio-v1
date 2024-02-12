import React from "react";
import Image from "next/image";
import Link from "next/link";

import Section from "@/app/components/Section";


// 'rsc' for components
export default function Home() {
    return (
        <main className="main-bg min-h-screen text-white text-center text-">
            {/* TODO: fix image pixeling on hover wtf */}
            <div className="hanging-sign-container">
                <Image className="hanging-sign"
                       src="/mys1erious_sign.png" alt="mys1erious sign"
                       width={200} height={100}/>
            </div>

            <div className="flex flex-col py-[110px] px-[10%] gap-y-8 h-screen">
                <Section>
                    <div className="my-2 container mx-auto flex justify-end items-center">
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
                </Section>
                <div className="flex flex-row justify-between gap-x-12 h-full">
                    <div className="flex flex-col gap-y-4 w-1/4">
                        <Section className="h-1/3">
                            <div>My Main Info</div>
                        </Section>
                        <Section className="h-1/3">
                            <div>My Add. Info</div>
                        </Section>
                        <Section className="h-1/3">
                            <div>Portal to /v2/</div>
                        </Section>
                    </div>
                    <div className="flex flex-col gap-y-4 w-1/2">
                        <Section className="h-2/3">
                            <div>Work Experience</div>
                        </Section>
                        <Section className="h-1/3">
                            <div>Skills</div>
                        </Section>
                    </div>
                    <div className="flex flex-col gap-y-4 w-1/4">
                        <Section className="h-1/4">
                            <div>Work Education</div>
                        </Section>
                        <Section className="h-1/4">
                            <div>Certificates</div>
                        </Section>
                        <Section className="h-1/4">
                            <div>Languages</div>
                        </Section>
                        <Section className="h-1/4">
                            <div>Interests</div>
                        </Section>
                    </div>
                </div>
            </div>
        </main>
    );
}
