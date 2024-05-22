import React from "react";

export const metadata = {
    title: 'Science',
    description: 'information about Science',
}

export default function ScienceLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={'contentWrapper'}>
            {children}
        </main>
    );
}
