import React from "react";
import { IconPath } from "../../constants/icon-path";
import Icon from "../Shared/icon";

export default function Footer() {
    return (
        <div className="absolute bottom-0 right-10 flex flex-col justify-center items-center">
            <p className="font-serif text-2xl text-white opacity-70">LET'S CONNECT</p>
            <div className="flex justifty-center items-center">
                <a target="_blank" href="https://github.com/StrixOSG" rel="noopener noreferrer" tabIndex={0}>
                    <Icon iconPath={IconPath.github} width={50} height={50}></Icon>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/matthew-hamilton-aa3271108/" rel="noopener noreferrer" tabIndex={0}>
                    <Icon iconPath={IconPath.linkedIn} width={50} height={50}></Icon>
                </a>
                <a href="mailto:matthewhamiltonweb@gmail.com">
                    <Icon iconPath={IconPath.email} width={50} height={50}></Icon>
                </a>
            </div>
        </div>
    )
}