import React, { FC, useState } from "react";
import classNames from "classnames";
import { Drawer, Button } from 'antd';
import {
    CloseOutlined,
    PlusOutlined
} from '@ant-design/icons';

export interface HeaderProps {
    className?: string
}

export const Header: FC<HeaderProps> = props => {
    let { className } = props
    let classes = classNames("header-block", className, {})
    const drawerStyleProps: React.CSSProperties = {
        backgroundColor: "#2f2f2f",
        padding:"16px 0"
    }

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <div className={classes}>
            <span>Z.</span>
            <div className="menu-btn" onClick={showDrawer}>
                <span className="line line0"></span>
                <span className="line line1"></span>
                <span className="line line2"></span>
            </div>

            <Drawer title="" placement="right" onClose={onClose} visible={visible} closable={false} drawerStyle={drawerStyleProps}>
                <div className="close-block">
                    <span className="close-box">
                <PlusOutlined className="icon-close-out" style={{ color: "#bdc3c7",fontWeight:"700",fontSize:"18px" }} rotate={45} />
                    </span>
                </div>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    )
}

export default Header