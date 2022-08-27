import { FC, useEffect, useReducer, useState } from "react"
import { Col, Row, Image, Carousel } from 'antd';
import { useTranslation, Trans, Translation } from 'react-i18next'

// imgs 
import hero1 from "../../../assets/images/hero1.jpeg"
import signature from "../../../assets/images/signature.png"

// ts 
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

    const afterChange = (current: Number) => {
        console.log(current)
    }

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

            <Row className="about-block" id={t('nav.about')}>
                <Col md={12} sm={24} xs={24}>
                    <div className="about-personal-bg"></div>
                </Col>
                <Col md={12} sm={24} xs={24}>
                    <Carousel className="about-carousel" afterChange={afterChange}>
                        <div className="about-carousel-i">
                            <div className="w-content">
                                <p className="head-about">{t('about.description')}</p>
                                <h5 className="name">{t('about.name')}</h5>
                                <Image
                                    src="error"
                                    fallback={signature}
                                />
                            </div>
                        </div>
                        <div className="about-carousel-i">
                            <div className="w-content">
                                <div className="content-i df fww">
                                    <div className="content-i-div df bet">
                                        <span className="title">{t('about.nameLabel')}</span>
                                        <span className="colon">:</span>
                                    </div>
                                    <div className="content-i-main">{t('about.name')}</div>
                                </div>
                                <div className="content-i df fww">
                                    <div className="content-i-div df bet">
                                        <span className="title">{t('about.phoneLabel')}</span>
                                        <span className="colon">:</span>
                                    </div>
                                    <div className="content-i-main">{t('about.phone')}</div>
                                </div>
                                <div className="content-i df fww">
                                    <div className="content-i-div df bet">
                                        <span className="title">{t('about.emailLabel')}</span>
                                        <span className="colon">:</span>
                                    </div>
                                    <div className="content-i-main">
                                        <div>{t('about.email1')}</div>
                                        <div>{t('about.email2')}</div>
                                    </div>
                                </div>
                                <div className="content-i df fww">
                                    <div className="content-i-div df bet">
                                        <span className="title">{t('about.addressLabel')}</span>
                                        <span className="colon">:</span>
                                    </div>
                                    <div className="content-i-main">{t('about.address')}</div>
                                </div>
                                <div className="content-i df fww">
                                    <div className="content-i-div df bet">
                                        <span className="title">{t('about.skypeLabel')}</span>
                                        <span className="colon">:</span>
                                    </div>
                                    <div className="content-i-main">{t('about.skype')}</div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </Col>
            </Row>
        </div>
    )
}

export default Container