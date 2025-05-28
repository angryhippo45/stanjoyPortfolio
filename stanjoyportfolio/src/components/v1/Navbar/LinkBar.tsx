import Link from 'next/link';
import React from 'react';


const LinkBar = () => {
    return (
        <nav className="bg-white-800 p-2 shadow-lg rounded-lg">
            <div className="container mx-auto flex-row justify-between alighitems-center">
            <ul className="flex space-x-4">
                {/* Using Link component from next/link for client-side navigation */}
                <li><Link href="/" className="text-white hover:text-gray-400">Home</Link></li>
                <li><Link href="/about" className="text-white hover:text-gray-400">About</Link></li>
                <li><Link href="/experience" className="text-white hover:text-gray-400">Experience</Link></li>
                <li><Link href="/projects" className="text-white hover:text-gray-400">Projects</Link></li>
                <li><Link href="/contact" className="text-white hover:text-gray-400">Contact</Link></li>
               
            </ul>
        </div>
        </nav> 
    );
};

export default LinkBar;