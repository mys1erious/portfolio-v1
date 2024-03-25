import React from "react";
import Image from "next/image";

import Section from "@/app/components/Section";
import Icon from "@/app/components/Icon";
import SectionTitle from "@/app/components/SectionTitle";
import Portal from "@/app/components/Portal";
import Language from "@/app/components/Language";
import BgVideo from "@/app/components/BgVideo";
import BgVideoOpacityControl from "@/app/components/BgVideoOpacityControl";
import Education from "@/app/components/Education";


// 'rsc' for components
export default function Home() {
    return (
        <main className="main-bg before:fixed before:top-0 before:right-0 before:bottom-0 before:left-0 before:z-[-2]
            min-h-screen text-white text-center overflow-x-hidden">
            <BgVideo />
            <div className="hanging-sign-container">
                <Image className="hanging-sign"
                       src="/mys1erious_sign.png" alt="mys1erious sign"
                       width={120} height={120}/>
            </div>
            <div
                className="flex flex-col gap-y-8 pt-32 pb-8 px-[5%] sm:px-[10%] lg:px-[1%] 2xl:px-[10%] lg:min-h-screen">
                <Section className="p-2">
                    <div className="flex flex-col gap-4 items-center sm:flex-row">
                        <BgVideoOpacityControl/>
                        <nav className="container flex justify-center items-center sm:justify-end">
                            <ul className="flex space-x-4 sm:mr-10">
                                <Icon href="https://github.com/mys1erious"
                                      src="/socials/github.png" alt="Github"
                                      text="@mys1erious"
                                />
                                <Icon href="https://discord.com/"
                                      src="/socials/discord.png" alt="Discord"
                                      text="@mysterious8443"
                                />
                                <Icon href="https://www.linkedin.com/in/yevhenii-lavrinovych/"
                                      src="/socials/linkedin.png" alt="LinkedIn"
                                      text="@yevhenii-lavrinovych"
                                />
                                <Icon href="mailto:yevhenii.lavrinovych@gmail.com"
                                      src="/socials/email.png" alt="Email"
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
                            <div className="flex flex-col">
                                <Icon src="/me_mock.jpg" alt="Me"
                                      text="That's me (or will be me)"
                                      width={256} height={256}
                                      scaleUpOnHover={false}
                                      rounded={true}
                                />
                                <div className="text-xl">Yevhenii Lavriovych</div>
                                <div className="text-lg">Software Developer</div>
                            </div>
                        </Section>
                        <Section className="p-4">
                            <SectionTitle>Education</SectionTitle>
                            <div className="flex flex-col items-center text-lg">
                                <Education href="https://int.krok.edu.ua/"
                                           src="/university.png" alt="KROK" iconText="KROK"
                                           university="University of Economics and Law - KROK"
                                           discipline="Computer Science"
                                           qualification="Bachelor Graduate"
                                />
                            </div>
                        </Section>
                        <Section className="p-4">
                            <SectionTitle>Certificates</SectionTitle>
                        </Section>
                    </div>
                    <div className="flex flex-col gap-y-4 lg:w-1/2">
                        <Section className="p-4">
                            <SectionTitle>Work Experience</SectionTitle>
                            <div className="h-[500px]"></div>
                        </Section>
                        <Section className="p-4">
                            <SectionTitle>Skills</SectionTitle>
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-3 justify-center">
                                    <Icon href="https://www.python.org/"
                                          src="/skills/python.png" alt="Python"
                                          text="Python" width={48} height={48}
                                    />
                                    <Icon href="https://www.djangoproject.com/"
                                          src="/skills/django.png" alt="Django"
                                          text="Django" width={48} height={48}
                                    />
                                    <Icon href="https://www.django-rest-framework.org/"
                                          src="/skills/drf.png" alt="DRF Icon"
                                          text="Django Rest Framework" width={48} height={48}
                                    />
                                    <Icon href="https://fastapi.tiangolo.com/"
                                          src="/skills/fastapi.png" alt="FastAPI"
                                          text="FastAPI" width={48} height={48}
                                    />
                                    <Icon href="https://www.postgresql.org/"
                                          src="/skills/postgres2.png" alt="PostgresSQL"
                                          text="PostgresSQL" width={48} height={48}
                                    />
                                    <Icon href="https://redis.io/"
                                          src="/skills/redis.png" alt="Redis"
                                          text="Redis" width={48} height={48}
                                    />
                                    <Icon href="https://git-scm.com/"
                                          src="/skills/git.png" alt="Git"
                                          text="Git" width={48} height={48}
                                    />
                                    <Icon href="https://www.docker.com/"
                                          src="/skills/docker.png" alt="Docker"
                                          text="Docker" width={48} height={48}
                                    />
                                    <Icon href="https://cloud.google.com/"
                                          src="/skills/google_cloud.png" alt="Google Cloud"
                                          text="Google Cloud"
                                          width={48} height={48}
                                    />
                                </div>
                                <div className="flex gap-3 justify-center">
                                    <Icon href="https://www.javascript.com/"
                                          src="/skills/js.png" alt="JavaScript"
                                          text="JavaScript" width={48} height={48}
                                    />
                                    <Icon href="https://www.typescriptlang.org/"
                                          src="/skills/ts.png" alt="TypeScript"
                                          text="TypeScript" width={48} height={48}
                                    />
                                    <Icon src="/skills/html.png" alt="HTML"
                                          text="HTML" width={48} height={48}
                                    />
                                    <Icon src="/skills/css.png" alt="CSS"
                                          text="CSS" width={48} height={48}
                                    />
                                    <Icon href="https://react.dev/"
                                          src="/skills/react.png" alt="React"
                                          text="React" width={48} height={48}
                                    />
                                    <Icon href="https://nextjs.org/"
                                          src="/skills/next.png" alt="Next.js"
                                          text="Next.js" width={48} height={48}
                                    />
                                    <Icon href="https://tailwindcss.com/"
                                          src="/skills/tailwind.png" alt="Tailwind CSS"
                                          text="Tailwind CSS" width={48} height={48}
                                    />
                                    <Icon href="https://www.sencha.com/products/extjs"
                                          src="/skills/extjs.png" alt="ExtJS"
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
                            <div className="text-xs">(not available right now)</div>
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
