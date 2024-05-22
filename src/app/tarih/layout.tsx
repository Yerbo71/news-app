import React from "react";

export const metadata = {
    title: 'History',
    description: 'information about History',
}

export default function HistoryLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={'contentWrapper'}>
            {children}
        </main>
    );
}
