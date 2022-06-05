import React, { FC, useState } from "react";
import classNames from "classnames";

import { CSSTransition } from "react-transition-group"
import { CSSTransitionProps } from 'react-transition-group'

export type AnimationsName = "fade"

export type HTransitionProps = CSSTransitionProps & {
    visiable: boolean
    className?: string
    animation?: AnimationsName
    timeout?: Number
}

const HTransition: FC<HTransitionProps> = ({ className, visiable, animation, timeout, ...restProp }) => {
    const [show, setShow] = useState(visiable)

    return (
        <CSSTransition
            in={show}
            timeout={timeout || 1000}
            classNames={className ? className : animation}
            {...restProp}
        >
            <div>hello</div>
        </CSSTransition>
    )
}

export default HTransition