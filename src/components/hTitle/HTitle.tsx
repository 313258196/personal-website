import classNames from "classnames";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export interface HTitleProps {
    title:string,
}

const HTitle:FC<HTitleProps> = (props) => {
    let { t } = useTranslation()
    let { title } = props;

    title = title || t("title.default");

    return <p className="hTitle-block">{title}</p>
}

export default HTitle