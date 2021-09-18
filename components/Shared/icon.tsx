import React from "react";
import Image from 'next/image';

export default function Icon({ iconPath, width = 30, height = 30 }) {
    return (
        <div className="p-1">
            <Image src={iconPath} width={width + 'rem'} height={height + 'rem'}></Image>
        </div>
    );
}