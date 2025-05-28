import React from 'react';
import Image from 'next/image';
import LinkBar from './LinkBar';
import {
    SunIcon
  } from "@heroicons/react/24/outline";


export default function Navbar() {
    return (
        <div className="w-full fixed top-2 z-50 mx-auto">
            <div className="flex justify-between items-center bg-white mx-auto">
                {/* Logo */}
                <Image src={'/logoV2BlueTransperent.svg'} alt='image' width={50} height={50} />
                <LinkBar />
                
                <SunIcon width={50} height={50}/>
            </div>
        </div>
    );
}