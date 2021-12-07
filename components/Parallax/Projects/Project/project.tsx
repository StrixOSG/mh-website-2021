import Image from "next/image";
import React, { useState } from "react";
import { IconPath } from "../../../../constants/icon-path";

export default function Project({ iconPath, title = 'test', description = 'test' }) {

    let [expanded, setExpanded] = useState(false);

    if (!expanded) {
        return (
            <button onClick={() => setExpanded(true)} className="w-full">
                <div className="flex flex-col justify-center w-full">
                    <div className="flex justify-center items-center">
                        <Image src={iconPath} width={40} height={40}></Image>
                        <p className="text-2xl ml-4">{title}</p>
                        <span className="flex ml-auto">
                            <Image src={IconPath.arrowRight} width={40} height={40}></Image>
                        </span>
                    </div>
                </div>
            </button>
        );
    } else {
        return (
            <button onClick={() => setExpanded(false)} className="w-full">
                <div className="flex flex-col justify-center w-full">
                    <div className="flex justify-center items-center">
                        <Image src={iconPath} width={40} height={40}></Image>
                        <p className="text-2xl ml-4">{title}</p>
                        <span className="flex ml-auto" onClick={() => setExpanded(false)}>
                            <Image src={IconPath.arrowDown} width={40} height={40}></Image>
                        </span>
                    </div>
                    <p className="text-left mt-2">
                        {description}
                    </p>
                    <button className="mt-2 bg-red text-white w-28 self-center rounded-md p-2 outline-none focus-none hover:bg-red-600">Learn More</button>
                </div>
            </button>
        );
    }
}