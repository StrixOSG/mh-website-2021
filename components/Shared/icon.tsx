import React from "react";
import Image from 'next/image';
import styles from './icon.module.css';
import dynamic from "next/dynamic";

const ReactTooltip = dynamic(() => import("react-tooltip"), {
    ssr: false,
});

export default function Icon({ iconPath, width = 30, height = 30, toolTip = '' }) {
    return (
        <div className="p-3 flex justify-center items-center" data-tip={toolTip}>
            <Image src={iconPath} width={width} height={height} alt="icon"></Image>
            <ReactTooltip className={styles.toolTip} place="top" type="dark" effect="float" />
        </div>
    );
}