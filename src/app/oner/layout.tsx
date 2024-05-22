import React from "react";

export const metadata = {
    title: 'Talent',
    description: 'information about Talent',
}

export default function TalentLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={'contentWrapper'}>
            {children}
        </main>
    );
}
