import React from "react";
import Image from "next/image";

import Section from "@/app/components/Section";
import Icon from "@/app/components/Icon";
import SectionTitle from "@/app/components/SectionTitle";


// 'rsc' for components
export default function Home() {
    return (
        <main className="main-bg min-h-screen text-white text-center text-">
            <div className="hanging-sign-container">
                <Image className="hanging-sign"
                       src="/mys1erious_sign.png" alt="mys1erious sign"
                       width={120} height={120}/>
            </div>

            <div className="flex flex-col py-[110px] px-[10%] gap-y-8 h-screen">
                <Section className="p-0">
                    <div className="my-2 container mx-auto flex justify-end items-center">
                        <nav>
                            <ul className="flex space-x-4 mr-10">
                                <Icon
                                    href="https://github.com/mys1erious"
                                    src="/socials/github_icon.png" alt="Github"
                                    text="@mys1erious"
                                />
                                <Icon
                                    href="https://www.linkedin.com/in/yevhenii-lavrinovych/"
                                    src="/socials/linkedin_icon.png" alt="LinkedIn"
                                    text="@yevhenii-lavrinovych"
                                />
                                <Icon
                                    href="mailto:yevhenii.lavrinovych@gmail.com"
                                    src="/socials/email_icon.png" alt="Email"
                                    text="yevhenii.lavrinovych@gmail.com"
                                    width={36}
                                />
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
                            <SectionTitle>Skills</SectionTitle>
                            <div className="flex gap-3 justify-center">
                                <Icon src="/skills/python_icon.png" alt="Python" text="Python" width={48} height={48}/>
                                <Icon src="/skills/python_icon.png" alt="Python" text="Python" width={48} height={48}/>
                                <Icon src="/skills/python_icon.png" alt="Python" text="Python" width={48} height={48}/>
                                <Icon src="/skills/python_icon.png" alt="Python" text="Python" width={48} height={48}/>
                                <Icon src="/skills/python_icon.png" alt="Python" text="Python" width={48} height={48}/>
                                <Icon src="/skills/python_icon.png" alt="Python" text="Python" width={48} height={48}/>
                                <Icon src="/skills/python_icon.png" alt="Python" text="Python" width={48} height={48}/>
                                <Icon src="/skills/python_icon.png" alt="Python" text="Python" width={48} height={48}/>
                                <Icon src="/skills/python_icon.png" alt="Python" text="Python" width={48} height={48}/>
                            </div>
                        </Section>
                    </div>
                    <div className="flex flex-col gap-y-4 w-1/4">
                        <Section className="h-1/4">
                            <div>Education</div>
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
