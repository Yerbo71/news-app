import React from "react";

export const metadata = {
    title: 'Source of information',
    description: 'information about adebiet',
}

export default function AdebietLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={'contentWrapper'}>
            {children}
        </main>
    );
}
