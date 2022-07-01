import React, { FC, useState } from "react";
import classNames from "classnames";

import { CSSTransition } from "react-transition-group"
import HTransition from "../hTransition/HTransition";

export interface HDrawerProps {
    visiable: boolean
    className?: string
}

const HDrawer: FC<HDrawerProps> = ({ className, visiable }) => {
    const [show, setShow] = useState(visiable)

    const classes = classNames("HDrawer-block", className)

    return (<>
        <HTransition visiable={true} className='fade' unmountOnExit appear={true}>
            <div>1111</div>
        </HTransition>
        {/* <CSSTransition
            in={show}
            timeout={1000}
            classNames='fade'
            unmountOnExit
            onEntered={(el:any) => { el.style.color = 'blue' }}
            appear={true}
        >
            <div>hello</div>
        </CSSTransition> */}
    </>)
}

export default HDrawer