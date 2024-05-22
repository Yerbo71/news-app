import React from "react";

export const metadata = {
    title: 'Sport',
    description: 'information about Sport',
}

export default function SportLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={'contentWrapper'}>
            {children}
        </main>
    );
}
