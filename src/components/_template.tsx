import React, { FC } from "react";
import classNames from "classnames";

export interface TemplateProps {
    className?:string
}

const Template:FC<TemplateProps> = ({ className }) => {

    const classes = classNames("template-block", className)

    return (<></>)
}

export default Template