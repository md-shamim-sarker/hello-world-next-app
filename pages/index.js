import Link from 'next/link';
import React from 'react';

const Home = () => {
    return (
        <div>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
            <h2>This is Home page.</h2>
        </div>
    );
};

export default Home;