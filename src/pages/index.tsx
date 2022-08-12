import React, { FC, useEffect, useReducer, useRef } from "react";
import { Button } from "antd";
import {
    Outlet,
    useLocation,
    useNavigate
} from 'react-router-dom'

import Header from "./index/header/Header";
import Container from "./index/container/Container";
import Cover from "./index/cover/Cover";
import HTransition from "../components/hTransition/HTransition";

import { LangType } from "../i18n/index"

export const Index: FC<{}> = props => {
    let location = useLocation();
    let navigate = useNavigate();
    // const rs1 = location.pathname.split("/").indexOf(LangType.EN);
    // const rs2 = location.pathname.split("/").indexOf(LangType.ZH);
    // if (rs1 === -1 && rs2 === -1) {
    //     var redirectPath = LangType.ZH + location.pathname
    //     navigate(redirectPath, { replace: true });
    // }

    const coverRef = useRef(null)
    const [coverVisiable, dispatchCover] = useReducer((state: Boolean, action: Boolean) => {
        return action
    }, true)

    useEffect(() => {
        console.log("Index...")
        setTimeout(() => {
            dispatchCover(false)
        }, 1000);
    })

    return (
        <>
            <HTransition visiable={!coverVisiable} className="fade" unmountOnExit appear={true}>
                <>
                    {/* <Outlet /> */}
                    <Header />
                    <Container />
                </>
            </HTransition>
            <HTransition visiable={coverVisiable} className="fade" unmountOnExit appear={true}>
                <Cover ref={coverRef} />
            </HTransition>
        </>
    )
}

export default Index