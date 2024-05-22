import React from "react";

export const metadata = {
    title: 'Exclusive',
    description: 'information about Exclusive',
}

export default function ExclusiveLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={'contentWrapper'}>
            {children}
        </main>
    );
}
