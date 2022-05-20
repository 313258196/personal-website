import { FC } from "react";
import classNames from "classnames";

export interface HeaderProps {
    className?:string
}

export const Header:FC<HeaderProps> = props => {
    let { className } = props
    let classes = classNames("header-block",className,{})
    return (
        <div className={classes}>
            header page
        </div>
    )
}

export default Header