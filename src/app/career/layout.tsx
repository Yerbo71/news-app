import React from "react";

export const metadata = {
    title: 'Career',
    description: 'information about Career',
}

export default function CareerLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={'contentWrapper'}>
            {children}
        </main>
    );
}
