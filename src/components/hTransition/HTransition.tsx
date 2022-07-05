import classNames from "classnames";
import React, { FC, ReactNode, useRef, useState } from "react";

import { CSSTransition, CSSTransitionProps, TransitionGroup } from "react-transition-group"

export type AnimationsName = "fade"

export type HTransitionProps = (typeof CSSTransitionProps) & {
    visiable: boolean
    className?: string
    animation?: AnimationsName
    timeout?: Number
    children: ReactNode
}

export interface HTransitionGroupProps {
    children: ReactNode,
    className?: String
}
export const HTransitionGroup: FC<HTransitionGroupProps> = props => {
    const { children, className } = props
    const classes = classNames("transi-group", className)
    return <TransitionGroup className={classes}>{children}</TransitionGroup>
}

const HTransition: FC<HTransitionProps> = ({ className, visiable, animation, timeout, children, ...restProp }) => {
    // const [show, setShow] = useState(visiable)
    // // 解决了报错，但是动画失效了
    // // const useReft = useRef(null)

    return (
        <CSSTransition
            // nodeRef={useReft}
            in={visiable}
            timeout={timeout || 1000}
            classNames={className ? className : animation}
            {...restProp}
        >
            {children}
        </CSSTransition>
    )
}

export default HTransition