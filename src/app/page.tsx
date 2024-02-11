import Header from "./components/Header";
import Image from "next/image";
import React from "react";


// 'rsc' for components
export default function Home() {
    return (
        <main className="main-bg min-h-screen">
            {/* TODO: fix image pixeling on hover wtf */}
            <div className="hanging-sign-container">
                <Image className="hanging-sign"
                       src="/mys1erious_sign.png" alt="mys1erious sign"
                       width={200} height={100}/>
            </div>
            <div className="flex flex-col">
                <Header/>
                <div>main section</div>
                <footer>footer</footer>
            </div>
        </main>
    );
}
