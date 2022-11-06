import { createContext, FC, ReactNode, useEffect, useReducer, useState } from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
import i18n from '../i18n';         //  引入 i18n 初始化模块
import { ConfigProvider } from 'antd';
import { useHref, useLocation, useNavigate } from "react-router-dom";

// types 
import { LanguageEnum, LanguagePackage } from './i18n-types';

// components 
import Index from '../pages';

export const GlobalContext = createContext({})

export interface LanguageProps {
    children?: ReactNode
}
const Language: FC<LanguageProps> = (props) => {
    const locationor = useLocation()
    const navigator = useNavigate()
    let currentLanguage = locationor.pathname.split("/")[1]

    // 切换语言
    const changeLang = (props: { switchLanguage: LanguageEnum, counter?: Boolean }) => {
        let { switchLanguage, counter } = props
        // reload href for switch language 
            console.log(333333,switchLanguage)
        if (counter) {
            console.log(111111)

            // console.log(1111111,location.origin,preLanguage,LanguageEnum.ZH_CN);
            // return 

            switchLanguage = preLanguage === LanguageEnum.ZH_CN ? LanguageEnum.EN_GB : LanguageEnum.ZH_CN
            // // navigator(`/#/${switchLanguage}`, { replace: true })

            location.replace(location.origin + `/#/${switchLanguage}`)
            return
        }

        console.log(2222222222)

        if (preLanguage === switchLanguage) { return }

        // 更改i18n语言  
        i18n.changeLanguage(switchLanguage)
        moment.locale(switchLanguage);
        setLocale(LanguagePackage[switchLanguage])
        setPrelanguage(switchLanguage)
    }

    // // 注意： 如果使用非响应式数据，当数据变化后 ，页面将不更新。 
    const [locale, setLocale] = useState(LanguagePackage[currentLanguage as LanguageEnum]);
    const [preLanguage, setPrelanguage] = useReducer((state: LanguageEnum | null, action: LanguageEnum | null) => {
        return action
    }, null)

    // // 加载翻译组件, 可以在 i18n组件中引入， 也可以在useTranslation中引入
    // // let {i18n} = useTranslation()          // 加载i18n组件
    // // 引入组件的翻译， 是需要使用变量的形式引入  {} , 而并非是静态的字符串

    useEffect(() => {
        changeLang({ switchLanguage: currentLanguage })
    },[]);
    return (
        <div className="TestChangeI18n">
            {/*切换按钮, 传入触发事件的函数 和 显示文字的变量  */}
            {/* <MyButton changeLang={changeLang} name={pre_name} /> */}
            {/* antd国际化： 只对部分组件有效 */}
            <ConfigProvider locale={locale}>
                <GlobalContext.Provider value={{ changeLang, preLanguage }}>
                    <Index />
                </GlobalContext.Provider>
            </ConfigProvider>
        </div>
    );
}

export default Language;
