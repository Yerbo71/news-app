import React from 'react';
import Link from "next/link";

const NotFound = () => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            alignItems: 'center',
            fontSize: '100px',
            color: 'red',
        }}>
            404 NOT FOUND
            <Link href={"/"} style={{width: '100%', textAlign: 'center'}}>HOME</Link>
        </div>
    );
};

export default NotFound;