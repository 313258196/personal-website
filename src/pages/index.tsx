import React, { FC } from "react";
import { Button } from "antd";

import Header from "./header/Header";
import HDrawer from "../components/hDrawer/HDrawer";

export const Index:FC<{}> = props => {
    return (
        <>
        <Header />
        <HDrawer visiable={true}/>
        </>
    )
}

export default Index