import React from "react";

export const metadata = {
    title: 'Information',
    description: 'information about akparat',
}

export default function AkparatLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={'contentWrapper'}>
            {children}
        </main>
    );
}
