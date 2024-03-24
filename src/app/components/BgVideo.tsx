'use client';

import React, {useState} from 'react';
import {useBgVideoStore} from "@/app/stores/BgVideo";


const BgVideo = () => {
    const opacity = useBgVideoStore(state => state.opacity);

    return (
        <video
            className="fixed w-screen h-screen object-cover z-[-1]"
            autoPlay muted loop playsInline style={{opacity}}>
            <source src="/infinite_stars.mp4" type="video/mp4"/>
            Your browser does not support HTML5 video.
        </video>
    );
};

export default BgVideo;
