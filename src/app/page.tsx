import React from "react";
import Image from "next/image";

import Section from "@/app/components/Section";
import Icon from "@/app/components/Icon";
import SectionTitle from "@/app/components/SectionTitle";
import Portal from "@/app/components/Portal";
import Language from "@/app/components/Language";


// 'rsc' for components
export default function Home() {
    return (
        <main className="main-bg min-h-screen text-white text-center overflow-x-hidden">
            <div className="hanging-sign-container">
                <Image className="hanging-sign"
                       src="/mys1erious_sign.png" alt="mys1erious sign"
                       width={120} height={120}/>
            </div>
            <div className="flex flex-col gap-y-8 pt-32 px-[5%] sm:px-[10%] lg:px-[1%] 2xl:px-[10%] lg:h-screen lg:py-32">
                <Section className="p-2">
                    <div className="container flex justify-center items-center sm:justify-end">
                        <nav>
                            <ul className="flex space-x-4 sm:mr-10">
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
                <div className="flex flex-col justify-between gap-x-4 gap-y-4 lg:min-h-full lg:flex-row 2xl:gap-x-12">
                    <div className="flex flex-col gap-y-4 lg:w-1/4">
                        <Section className="p-4">
                            <SectionTitle>Info</SectionTitle>
                            <div className="flex flex-col text-left">
                                <div>text1</div>
                                <div>text2</div>
                            </div>
                        </Section>
                        <Section className="p-4">
                            <SectionTitle>Education</SectionTitle>
                        </Section>
                        <Section className="p-4">
                            <SectionTitle>Certificates</SectionTitle>
                        </Section>
                    </div>
                    <div className="flex flex-col gap-y-4 lg:w-1/2">
                        <Section className="p-4">
                            <SectionTitle>Work Experience</SectionTitle>
                        </Section>
                        <Section className="p-4">
                            <SectionTitle>Skills</SectionTitle>
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-3 justify-center">
                                    <Icon href="https://www.python.org/"
                                          src="/skills/python_icon.png" alt="Python"
                                          text="Python" width={48} height={48}
                                    />
                                    <Icon href="https://www.djangoproject.com/"
                                          src="/skills/django_icon.png" alt="Django"
                                          text="Django" width={48} height={48}
                                    />
                                    <Icon href="https://www.django-rest-framework.org/"
                                          src="/skills/drf_icon.png" alt="DRF Icon"
                                          text="Django Rest Framework" width={48} height={48}
                                    />
                                    <Icon href="https://fastapi.tiangolo.com/"
                                          src="/skills/fastapi_icon.png" alt="FastAPI"
                                          text="FastAPI" width={48} height={48}
                                    />
                                    <Icon href="https://www.postgresql.org/"
                                          src="/skills/postgres_icon2.png" alt="PostgresSQL"
                                          text="PostgresSQL" width={48} height={48}
                                    />
                                    <Icon href="https://redis.io/"
                                          src="/skills/redis_icon.png" alt="Redis"
                                          text="Redis" width={48} height={48}
                                    />
                                    <Icon href="https://git-scm.com/"
                                          src="/skills/git_icon.png" alt="Git"
                                          text="Git" width={48} height={48}
                                    />
                                    <Icon href="https://www.docker.com/"
                                          src="/skills/docker_icon.png" alt="Docker"
                                          text="Docker" width={48} height={48}
                                    />
                                    <Icon href="https://cloud.google.com/"
                                          src="/skills/google_cloud_icon.png" alt="Google Cloud"
                                          text="Google Cloud"
                                          width={48} height={48}
                                    />
                                </div>
                                <div className="flex gap-3 justify-center">
                                    <Icon href="https://www.javascript.com/"
                                          src="/skills/js_icon.png" alt="JavaScript"
                                          text="JavaScript" width={48} height={48}
                                    />
                                    <Icon href="https://www.typescriptlang.org/"
                                          src="/skills/ts_icon.png" alt="TypeScript"
                                          text="TypeScript" width={48} height={48}
                                    />
                                    <Icon src="/skills/html_icon.png" alt="HTML"
                                          text="HTML" width={48} height={48}
                                    />
                                    <Icon src="/skills/css_icon.png" alt="CSS"
                                          text="CSS" width={48} height={48}
                                    />
                                    <Icon href="https://react.dev/"
                                          src="/skills/react_icon.png" alt="React"
                                          text="React" width={48} height={48}
                                    />
                                    <Icon href="https://nextjs.org/"
                                          src="/skills/next_icon.png" alt="Next.js"
                                          text="Next.js" width={48} height={48}
                                    />
                                    <Icon href="https://tailwindcss.com/"
                                          src="/skills/tailwind_icon.png" alt="Tailwind CSS"
                                          text="Tailwind CSS" width={48} height={48}
                                    />
                                    <Icon href="https://www.sencha.com/products/extjs"
                                          src="/skills/extjs_icon.png" alt="ExtJS"
                                          text="ExtJS" width={48} height={48}
                                    />
                                </div>
                            </div>
                        </Section>
                    </div>
                    <div className="flex flex-col gap-y-4 lg:w-1/4">
                        <Section className="p-4">
                            <SectionTitle>Languages</SectionTitle>
                            <div className="flex flex-col gap-y-0.5 items-center">
                                <Language src="/countries/uk.svg" alt="UK" text="English" level="C1"/>
                                <Language src="/countries/italy.svg" alt="IT" text="Italian" level="A2"/>
                                <Language src="/countries/ukraine.svg" alt="UA" text="Ukrainian" level="C2"/>
                                <Language src="/countries/russia.svg" alt="RU" text="Russian" level="C2"/>
                            </div>
                        </Section>
                        <Section className="p-4">
                            <SectionTitle>Interests</SectionTitle>
                        </Section>
                        <div className="flex flex-col">
                            <div>(not available right now)</div>
                            <div className="flex justify-center items-center">
                                <Portal/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
