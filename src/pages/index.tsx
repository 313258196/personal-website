import React, { FC, useEffect, useReducer, useRef } from "react";
import { Button } from "antd";

import Header from "./index/header/Header";
import Container from "./index/container/Container";
import Cover from "./index/cover/Cover";
import HTransition from "../components/hTransition/HTransition";

export const Index: FC<{}> = props => {
    const coverRef = useRef(null)
    const [coverVisiable, dispatchCover] = useReducer((state: Boolean, action: Boolean) => {
        return action
    }, true)

    useEffect(() => {
        setTimeout(() => {
            dispatchCover(false)
        }, 1000);
    })

    return (
        <>
            <HTransition visiable={!coverVisiable} className="fade" unmountOnExit appear={true}>
                <>
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