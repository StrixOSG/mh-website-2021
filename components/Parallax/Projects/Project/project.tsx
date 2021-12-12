import Image from "next/image";
import React, { useState } from "react";
import { IconPath } from "../../../../constants/icon-path";

export default function Project({ iconPath, title = 'test', description = 'test', iconStyle = '', externalUrl = null, learnMore = false }) {

    let [expanded, setExpanded] = useState(false);

    if (!expanded) {
        return (
            <button onClick={() => setExpanded(true)} className="grid place-items-start w-full grid-cols-4 sm:grid-cols-6">
                <Image className={`${iconStyle} col-span-1`} src={iconPath} width={40} height={40}></Image>
                <div className="flex flex-col justify-center w-full col-span-3 sm:col-span-5">
                    <div className="flex items-center">
                        <p className="text-xl text-left sm:text-2xl">{title}</p>
                        <span className="flex ml-auto">
                            <Image src={IconPath.arrowRight} width={40} height={40}></Image>
                        </span>
                    </div>
                </div>
            </button>
        );
    } else {
        return (
            <button onClick={() => setExpanded(false)} className="grid place-items-start w-full grid-cols-4 sm:grid-cols-6">
                <Image className={`col-span-1 ${iconStyle}`} src={iconPath} width={40} height={40}></Image>
                <div className="flex flex-col justify-center w-full col-span-3 sm:col-span-5">
                    <div className="flex items-center">
                        <p className="text-xl sm:text-2xl">{title}</p>
                        <span className="flex ml-auto" onClick={() => setExpanded(false)}>
                            <Image src={IconPath.arrowDown} width={40} height={40}></Image>
                        </span>
                    </div>
                    <p className="text-left mt-2">
                        {description}
                    </p>
                    {
                        learnMore && externalUrl === null && <button className="mt-4 bg-red text-white w-28 rounded-md p-2 outline-none focus-none hover:bg-red-600">Learn More</button>
                    }
                    {
                        learnMore && externalUrl !== null && <a className="mt-4 bg-red text-white w-28 rounded-md p-2 outline-none focus-none hover:bg-red-600" href={externalUrl} target="_blank" rel="noopener noreferrer" tabIndex={0} >Learn More</a>
                    }
                </div>
            </button>
        );
    }
}