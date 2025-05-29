import React from 'react';
import Image from 'next/image';
import LinkBar from './LinkBar';
import {
    SunIcon
  } from "@heroicons/react/24/outline";
import IconButton from '../Buttons/IconButton';


export default function Navbar() {
    return (
        <div className="w-full fixed top-2 z-50 mx-auto">
            <div className="flex justify-between items-center bg-white mx-auto">
                {/* Logo */}
                <Image src={'/logoV2BlueTransperent.svg'} alt='image' width={50} height={50} />
                <LinkBar />
                <IconButton onClick={() => console.log('Dark mode toggled')}
                    icon={SunIcon}
                    className="text-gray-500 hover:text-black transition-colors"
                    label="Toggle Dark Mode"
                />
            </div>
        </div>
    );
}