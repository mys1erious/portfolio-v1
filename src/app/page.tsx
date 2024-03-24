import React from "react";
import Image from "next/image";

import Section from "@/app/components/Section";
import Icon from "@/app/components/Icon";
import SectionTitle from "@/app/components/SectionTitle";
import Portal from "@/app/components/Portal";


// 'rsc' for components
export default function Home() {
    return (
        <main className="main-bg min-h-screen text-white text-center">
            <div className="hanging-sign-container">
                <Image className="hanging-sign"
                       src="/mys1erious_sign.png" alt="mys1erious sign"
                       width={120} height={120}/>
            </div>
            <div className="flex flex-col py-[110px] px-[10%] gap-y-8 lg:h-screen">
                <Section className="p-0">
                    <div className="my-2 container mx-auto flex justify-center items-center sm:justify-end">
                        <nav>
                            <ul className="flex space-x-4 lg:mr-10">
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
                <div className="flex flex-col justify-between gap-x-12 lg:h-full lg:flex-row">
                    <div className="flex flex-col gap-y-4 lg:w-1/4">
                        <Section className="lg:h-1/2">
                            <SectionTitle>Info</SectionTitle>
                            <div className="flex flex-col text-left">
                                <div>text1</div>
                                <div>text2</div>
                            </div>
                        </Section>
                        <div className="flex flex-col mb-4 lg:h-1/2 lg:mb-0">
                            <div>(in dev)</div>
                            <div className="flex justify-center items-center">
                                <Portal/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4 mb-4 lg:w-1/2 lg:mb-0">
                        <Section className="lg:h-2/3">
                            <SectionTitle>Work Experience</SectionTitle>
                        </Section>
                        <Section className="lg:h-1/3">
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
                                    {/*<Icon href="https://aws.amazon.com/"*/}
                                    {/*      src="/skills/aws_icon.png" alt="AWS"*/}
                                    {/*      text="AWS" width={48} height={48}*/}
                                    {/*/>*/}
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
                        <Section className="lg:h-1/4">
                            <SectionTitle>Education</SectionTitle>
                        </Section>
                        <Section className="lg:h-1/4">
                            <SectionTitle>Certificates</SectionTitle>
                        </Section>
                        <Section className="lg:h-1/4">
                            <SectionTitle>Languages</SectionTitle>
                        </Section>
                        <Section className="lg:h-1/4">
                            <SectionTitle>Interests</SectionTitle>
                        </Section>
                    </div>
                </div>
            </div>
        </main>
    );
}
