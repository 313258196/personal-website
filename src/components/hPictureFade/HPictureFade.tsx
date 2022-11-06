import { FC } from "react";

export interface HPictureFadeProps {
    imgUrl:string,
    coverTxt:string,
    coverBg:string,
    coverMainBg:string
}

const HPictureFade:FC<HPictureFadeProps> = props => {
    const { imgUrl, coverTxt, coverBg, coverMainBg } = props;

    const coverBgStyle = {
        backgroundColor:coverBg
    }
    const coverMainBgStyle = {
        backgroundColor:coverMainBg
    }

    return (
        <div className="hPictureFade-block">
            <img className="hp-img" src={imgUrl} alt="" />
            <div className="hp-cover" style={coverBgStyle}>
                <div className="hp-cover-main" style={coverMainBgStyle}>{coverTxt}</div>
            </div>
        </div>
    )
}

export default HPictureFade;