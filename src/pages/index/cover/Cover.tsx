import { FC, forwardRef, useImperativeHandle, useReducer } from "react";
import { Image } from 'antd';
import HTransition from "../../../components/hTransition/HTransition";

import logBig from "../../../assets/images/logo-big.png"
import loader from "../../../assets/images/loader.gif"

export interface CoverProps {
    visiable: Boolean
}
const Cover = forwardRef((props, ref) => {

    return (
            <div className="cover-block">
                <Image
                    className="img-log-big"
                    src="error"
                    fallback={logBig}
                />
                <Image
                    className="img-loader"
                    src="error"
                    fallback={loader}
                />
            </div>
    )
})

export default Cover