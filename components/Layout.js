import React from 'react';
import Head from "next/head";
import Image from "next/image";

const Layout = ({children}) => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="container mx-auto">
                {children}
            </main>

            <footer className="flex justify-center items-center">
                <a
                    className="flex flex-col"
                    href="https://domthedev.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <Image src="/domthedev.png" alt="Dom the dev Logo" width={72} height={72}/>
                </a>
            </footer>
        </div>
    );
};

export default Layout;
