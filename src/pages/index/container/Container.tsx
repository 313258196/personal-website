import { FC, useEffect, useMemo, useReducer, useRef, useState } from "react"
import { Col, Row, Image, Carousel } from 'antd';
import { useTranslation, Trans, Translation } from 'react-i18next'

// imgs 
import hero1 from "../../../assets/images/hero1.jpeg"
import signature from "../../../assets/images/signature.png"
import bw1 from "../../../assets/images/bw-1.png"
import bw2 from "../../../assets/images/bw-2.png"
import bw3 from "../../../assets/images/bw-3.png"
import bw4 from "../../../assets/images/bw-4.png"

// ts 
import { IntroSelf } from "../../mock"
import { typewriter } from "../../../utils/index"
import classNames from "classnames";
import HTitle from "../../../components/hTitle/HTitle";
import HPictureFade from "../../../components/hPictureFade/HPictureFade";
import { AppstoreOutlined, CustomerServiceOutlined, PaperClipOutlined, ShareAltOutlined, ShopOutlined, TagOutlined } from "@ant-design/icons";

const Container: FC = () => {
    console.log(3333333)
    let { t } = useTranslation()
    const introSelf = IntroSelf()

    const [flag, setFlag] = useState(false)
    const [currentIdx, setCurrentIdx] = useState(0)
    const [oliData, setOliData] = useState(new Array<Number>(2).fill(1))
    const [intro, dispatchIntro] = useReducer((state: string, action: string) => {
        return action
    }, "")
    const introDisplay = useMemo(() => intro,[intro]);
    const CarouselRef = useRef(null)
    const [picturesList, setPicturesList] = useState(
        [
            { imgUrl:bw1, coverTxt:t('work.picture1.txt'), coverBg:"#cbe1de", coverMainBg:"#fff" },
            { imgUrl:bw2, coverTxt:t('work.picture2.txt'), coverBg:"#999", coverMainBg:"#fff" },
            { imgUrl:bw3, coverTxt:t('work.picture3.txt'), coverBg:"#d3dac2", coverMainBg:"#fff" },
            { imgUrl:bw4, coverTxt:t('work.picture4.txt'), coverBg:"#c2e1e1", coverMainBg:"#fff" },
        ]
    )
    const [servicesList, setServicesList] = useState(
        [
            { imgUrl:<ShareAltOutlined style={{fontSize:"24px",color:"#818181"}} />, title:t('service.mo1.txt'), description:t('service.mo1.desc') },
            { imgUrl:<ShopOutlined style={{fontSize:"24px",color:"#818181"}} />, title:t('service.mo2.txt'), description:t('service.mo2.desc') },
            { imgUrl:<AppstoreOutlined style={{fontSize:"24px",color:"#818181"}} />, title:t('service.mo3.txt'), description:t('service.mo3.desc') },
            { imgUrl:<CustomerServiceOutlined style={{fontSize:"24px",color:"#818181"}} />, title:t('service.mo4.txt'), description:t('service.mo4.desc') },
            { imgUrl:<PaperClipOutlined style={{fontSize:"24px",color:"#818181"}} />, title:t('service.mo5.txt'), description:t('service.mo5.desc') },
            { imgUrl:<TagOutlined style={{fontSize:"24px",color:"#818181"}} />, title:t('service.mo6.txt'), description:t('service.mo6.desc') },
        ]
    )

    const picturesListDisplay = useMemo(() => {
        return picturesList && picturesList.map((item,index) => {
            return <Col key={index} md={12} sm={24} xs={24}>
                    <HPictureFade imgUrl={item.imgUrl} coverTxt={item.coverTxt} coverBg={item.coverBg} coverMainBg={item.coverMainBg}></HPictureFade>
                </Col>
        })
    },[]);

    const servicesListDisplay = useMemo(() => {
        return servicesList && servicesList.map((item,index) => {
            return <Col key={index} md={8} sm={24} xs={24} className="service-col-item">
                <p className="services-b-icon">{item.imgUrl}</p>
                <div className="services-b-title">{item.title}</div>
                <div className="services-b-desc">{item.description}</div>
            </Col>
        })
    },[])

    useEffect(() => {
        typewriter(introSelf, (str: string) => {
            dispatchIntro(str)
        })
    },[])

    // const beforeChange = (current: number) => {
    //     console.log(current)
    //     setCurrentIdx(current)
    // }
    const panelChange = (index:number) => {
        // if(index === 0){
        //     (CarouselRef.current as any).prev()
        // }
        // if(index === 1){
        //     (CarouselRef.current as any).next()
        // }
        (CarouselRef.current as any).goTo(index, false);
        setCurrentIdx(index);
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
                        <p className="container-intro">{introDisplay}</p>
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
                {/* beforeChange={beforeChange} */}
                    <Carousel className="about-carousel" dots={false} ref={CarouselRef}>
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
                    <ul className="oul">
                        {
                            oliData.map((item,index) => {
                                let oliClass = classNames("oli-i",{
                                    active:index == currentIdx
                                })
                                return <li className={oliClass} key={index} onClick={() => panelChange(index)}></li>
                            })
                        }
                    </ul>
                </Col>
            </Row>

            <div className="work-block">
                <Row className="mainw" id={t('nav.work')}>
                    <Col md={8} sm={24} xs={24}>
                        <div className="work-personal-bg">
                            <HTitle title={t('work.title')}></HTitle>
                            <div className="work-b-desc">
                                <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={16} sm={24} xs={24}>
                        <Row className="work-pics-block" wrap={true}>
                            {picturesListDisplay}
                        </Row>
                    </Col>
                </Row>
            </div>

            <div className="work-block service-block">
                <Row className="mainw" id={t('nav.work')}>
                    <Col md={8} sm={24} xs={24}>
                        <div className="work-personal-bg">
                            <HTitle title={t('service.title')}></HTitle>
                            <div className="work-b-desc">
                                <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={16} sm={24} xs={24}>
                        <Row className="work-pics-block service-pics-block" wrap={true}>
                            {servicesListDisplay}
                        </Row>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default Container