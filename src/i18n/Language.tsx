import { FC, ReactNode, useState } from 'react';
import enUS from 'antd/lib/locale/en_US';        // 引入antd 语言包
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import i18n from '../i18n';         //  引入 i18n 初始化模块
import { ConfigProvider } from 'antd';
import MyButton from '../components/MyButton';
import Index from '../pages';
// import { useLocation } from 'react-router'
import { useLocation } from "react-router-dom";
import { LangType } from "./index"

export interface LanguageProps {
    children: ReactNode
}
const Language: FC<LanguageProps> = (props) => {
    // http://localhost:3000/#zh-CN
    const { children } = props

    // 注意： 如果使用非响应式数据，当数据变化后 ，页面将不更新。 
    const [pre_lang, setPreLang] = useState(LangType.EN);     // 上一次保存的语言
    const [pre_name, setPreName] = useState("切换中文"); // 上一次保存的名称 
    const [locale, setLocale] = useState(enUS); // 上一次保存的名称 
    const [flag, setFlag] = useState(false)

    // 加载翻译组件, 可以在 i18n组件中引入， 也可以在useTranslation中引入
    // let {i18n} = useTranslation()          // 加载i18n组件
    // 引入组件的翻译， 是需要使用变量的形式引入  {} , 而并非是静态的字符串

    // 切换语言
    const changeLang = (props: { lType: string }) => {
        const { lType } = props
        setFlag(true)
        switch (lType) {
            case LangType.EN:
                i18n.changeLanguage('en')     // 更改i18n语言  
                moment.locale('en');          // 更改antd组件语言 

                setPreLang(LangType.EN)
                setPreName("切换中文")
                setLocale(enUS)               // 引入antd组件依赖的模块 
                break;
            case LangType.ZH:
                i18n.changeLanguage('zh')
                moment.locale('zh-cn');

                setPreLang(LangType.ZH)
                setPreName("切换英文")
                setLocale(zhCN)
                break;
        }
    }


    const location = useLocation()
    const routerName = () => {
        console.log(11111,location)
        let { hash } = location

        if (flag) { return }
        if (hash.indexOf(LangType.ZH) !== -1) {
            changeLang({ lType: LangType.ZH })
        }
        if (hash.indexOf(LangType.EN) !== -1) {
            changeLang({ lType: LangType.EN })
        }
    }
    routerName()

    return (
        <div className="TestChangeI18n">
            {/*切换按钮, 传入触发事件的函数 和 显示文字的变量  */}
            {/* <MyButton changeLang={changeLang} name={pre_name} /> */}

            {/* antd国际化： 只对部分组件有效 */}
            <ConfigProvider locale={locale}>
                {children}
            </ConfigProvider>
        </div>
    );
}

export default Language;
