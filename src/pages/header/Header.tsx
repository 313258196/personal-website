import React, { FC, useReducer, useState } from "react";
import classNames from "classnames";
import { Drawer, Button } from 'antd';
import {
    CloseOutlined,
    PlusOutlined
} from '@ant-design/icons';
import HTransition from "../../components/hTransition/HTransition";
import { navMenu, NavMenuProps } from "./mock"

export interface HeaderProps {
    className?: string
}

export const Header: FC<HeaderProps> = props => {
    let { className } = props

    let navM: NavMenuProps[] = navMenu.map((item: String, index: Number) => ({
        label: item,
        active: index == 0
    }))
    const [navList, dispatchNavList] = useReducer((state: NavMenuProps[], action: { type: String, index: Number | string }) => {
        switch (action.type) {
            case "setActive":
                state.forEach((item: any) => item.active = false)
                state[action.index as any].active = true
                // 更新引用地址，才会触发渲染
                return [...state]
            default:
                return state
        }
    }, navM)

    let classes = classNames("header-block", className, {})
    const drawerStyleProps: React.CSSProperties = {
        backgroundColor: "#2f2f2f",
        padding: "16px 0"
    }

    const [visible, setVisible] = useState(false);
    const [visibleNav, dispatchNav] = useReducer((state: Boolean, action: String): Boolean => {
        switch (action) {
            case "true":
                return true
            case "false":
                return false
            default:
                return false
        }
    }, false);

    const showDrawer = () => {
        setVisible(true);
        dispatchNav("true")
    };
    const onClose = () => {
        setVisible(false);
        dispatchNav("false")
    };

    return (
        <div className={classes}>
            <span className="code">Z.</span>
            <div className="menu-btn" onClick={showDrawer}>
                <span className="line line0"></span>
                <span className="line line1"></span>
                <span className="line line2"></span>
            </div>

            <HTransition visiable={visible} className="fixed-bg" unmountOnExit>
                <div className="fixed-block" onClick={onClose}></div>
            </HTransition>
            <HTransition visiable={visibleNav} className="nav-bar" unmountOnExit>
                <div className="nav-bar-block">
                    {
                        navList.map((item, index) => {
                            let classes = classNames("nav-item", {
                                "active": item.active
                            })

                            return <p className={classes} onClick={() => dispatchNavList({ type: "setActive", index })}>
                                <span>{item.label}</span>
                            </p>
                        })
                    }
                    <button className="close-button" id="close-button" onClick={onClose}>Close Menu</button>
                </div>
            </HTransition>
        </div>
    )
}

export default Header