import React, { FC, useReducer, useState } from "react";
import classNames from "classnames";
import { Drawer, Button } from 'antd';
import {
    CloseOutlined,
    PlusOutlined
} from '@ant-design/icons';
import HTransition from "../../components/hTransition/HTransition";

export interface HeaderProps {
    className?: string
}

export const Header: FC<HeaderProps> = props => {
    let { className } = props
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
            <span>Z.</span>
            <div className="menu-btn" onClick={showDrawer}>
                <span className="line line0"></span>
                <span className="line line1"></span>
                <span className="line line2"></span>
            </div>

            <HTransition visiable={visible} className="fixed-bg" unmountOnExit>
                <div className="fixed-block"></div>
            </HTransition>
            <HTransition visiable={visibleNav} className="nav-bar" unmountOnExit>
                <div className="nav-bar-block"></div>
            </HTransition>

            {/* <Drawer title="" placement="right" onClose={onClose} visible={visible} closable={false} drawerStyle={drawerStyleProps}>
                <div className="close-block">
                    <span className="close-box">
                <PlusOutlined className="icon-close-out" style={{ color: "#bdc3c7",fontWeight:"700",fontSize:"18px" }} rotate={45} />
                    </span>
                </div>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer> */}
        </div>
    )
}

export default Header