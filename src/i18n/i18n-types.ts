import enGB from 'antd/lib/locale/en_GB';        // 引入antd 语言包
import zhCN from 'antd/lib/locale/zh_CN';

// 语言相关 language about 
export enum LanguageEnum {
    ZH_CN = "zh_CN",
    EN_GB = "en_GB"
}
export const LanguagePackage = {
    [LanguageEnum.ZH_CN]:zhCN,
    [LanguageEnum.EN_GB]:enGB,
}