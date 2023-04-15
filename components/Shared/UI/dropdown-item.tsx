import Image from "next/image";
import React, { useState } from "react";
import { IconPath } from "../../../constants/icon-path";

export default function DropdownItem({ iconPath = null, title = 'test', description = 'test', iconStyle = '', urlText = 'Learn More', url = null }) {

    let [expanded, setExpanded] = useState(false);

    if (!expanded) {
        return (
            <button onClick={() => setExpanded(true)} className="grid place-items-start w-full grid-cols-4 sm:grid-cols-6">
                {iconPath !== null && <Image className={`${iconStyle} col-span-1`} src={iconPath} width={40} height={40} alt="icon"></Image>}
                <div className={"flex flex-col justify-center w-full " + (iconPath === null ? 'col-span-4 sm:col-span-6' : 'col-span-3 sm:col-span-5')}>
                    <div className="flex items-center">
                        <p className="text-xl text-left sm:text-2xl">{title}</p>
                        <span className="flex ml-auto">
                            <Image src={IconPath.arrowRight} width={40} height={40} alt="toggle dropdown"></Image>
                        </span>
                    </div>
                </div>
            </button>
        );
    } else {
        return (
            <button onClick={() => setExpanded(false)} className="grid place-items-start w-full grid-cols-4 sm:grid-cols-6">
                {iconPath !== null && <Image className={`col-span-1 ${iconStyle}`} src={iconPath} width={40} height={40} alt="icon"></Image>}
                <div className={"flex flex-col justify-center w-full " + (iconPath === null ? 'col-span-4 sm:col-span-6' : 'col-span-3 sm:col-span-5')}>
                    <div className="flex items-center">
                        <p className="text-xl sm:text-2xl">{title}</p>
                        <span className="flex ml-auto" onClick={() => setExpanded(false)}>
                            <Image src={IconPath.arrowDown} width={40} height={40} alt="toggle dropdown"></Image>
                        </span>
                    </div>
                    <p className="text-left mt-2">
                        {description}
                    </p>
                    {url !== null && <a className="mt-4 bg-red text-white w-28 rounded-md p-2 outline-none focus-none hover:bg-red-600" href={url} target="_blank" rel="noopener noreferrer" tabIndex={0} >{urlText}</a>}
                </div>
            </button>
        );
    }
}