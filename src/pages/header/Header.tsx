import React, { FC, useEffect, useReducer, useRef, useState } from "react";
import classNames from "classnames";
import { Drawer, Button } from 'antd';
import {
    CloseOutlined,
    PlusOutlined
} from '@ant-design/icons';
import HTransition, { HTransitionGroup } from "../../components/hTransition/HTransition";
import { v4 as uuid } from 'uuid';
import NavBar from "../navBar/NavBar";
import { useTranslation, Trans, Translation } from 'react-i18next'

export interface HeaderProps {
    className?: string
}

const Header: FC<HeaderProps> = props => {
    let { t } = useTranslation()
    let { className } = props


    let classes = classNames("header-block", className, {})
    const drawerStyleProps: React.CSSProperties = {
        backgroundColor: "#2f2f2f",
        padding: "16px 0"
    }

    // let timer = null;
    // useEffect(() => {
    //     // timer = setTimeout(() => {
    //     //     dispatchNavList({ type: "pushNewOne" })
    //     // }, 3000);
    // }, [timer])
    const navBarRef = useRef(null)
    
    const showDrawer = () => {
        (navBarRef.current as any).setVisible(true);
        (navBarRef.current as any).dispatchNav("true");
        (navBarRef.current as any).showNavItem(0);
    };

    return (
        <div className={classes}>
            <span className="code">{t("page.logoTxt")}</span>
            <div className="menu-btn" onClick={showDrawer}>
                <span className="line line0"></span>
                <span className="line line1"></span>
                <span className="line line2"></span>
            </div>

            <NavBar ref={navBarRef}/>
        </div>
    )
}

export default Header