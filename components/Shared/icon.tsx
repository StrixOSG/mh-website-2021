import React from "react";
import Image from 'next/image';
import ReactTooltip from 'react-tooltip';
import styles from './icon.module.css';

export default function Icon({ iconPath, width = 30, height = 30, toolTip = '' }) {
    return (
        <div className="p-1" data-tip={toolTip}>
            <Image src={iconPath} width={width + 'rem'} height={height + 'rem'}></Image>
            <ReactTooltip className={styles.toolTip} place="top" type="dark" effect="float" />
        </div>
    );
}