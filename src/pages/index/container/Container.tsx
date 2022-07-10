import { FC, useEffect, useReducer, useState } from "react"
import { Col, Row, Image } from 'antd';
import { useTranslation, Trans, Translation } from 'react-i18next'

import hero1 from "../../../assets/images/hero1.jpeg"
import { IntroSelf } from "../../mock"
import { typewriter } from "../../../utils/index"

const Container: FC = () => {
    let { t } = useTranslation()
    const introSelf = IntroSelf()

    const [flag, setFlag] = useState(false)
    const [intro, dispatchIntro] = useReducer((state: string, action: string) => {
        return action
    }, "")

    if (!flag) {
        typewriter(introSelf, (str: string) => {
            dispatchIntro(str)
        })
        setFlag(true)
    }

    useEffect(() => {
    })

    return (
        <div className="container-block">
            <Row className="container-wiper" id={t('nav.home')}>
                <Col span={24} className="container-wiper-col">
                    <Image
                        width="100%"
                        height="100%"
                        className="img-hero1"
                        src="error"
                        fallback={hero1}
                    />
                    <div className="container-welcome-block">
                        <h1 className="fm">{t('page.hello')}</h1>
                        <p className="container-intro">{intro}</p>
                    </div>
                    <div className="container-mouse">
                        <div className="mouse-gif"></div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Container