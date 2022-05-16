import React, { Component,useState,useEffect } from 'react';
import { useTranslation, Trans, Translation } from 'react-I18next'
import I18n from '.';

function ChangeI18n() {   
 
 
    // 注意： 如果使用非响应式数据，当数据变化后 ，页面将不更新。 
    const [pre_lang,setPreLang] = useState("zh");     // 上一次保存的语言
    const [pre_name,setPreName] = useState("切换英文"); // 上一次保存的名称  
 
    // 加载翻译组件, 可以在 I18n组件中引入， 也可以在useTranslation中引入
    // let {I18n} = useTranslation()          // 加载I18n组件 
 

    // 切换语言
    const changeLang  = ()=>{  
        if(pre_lang.toString() == 'zh') {    
          I18n.changeLanguage('en')     // 更改I18n语言   
          
          setPreLang("en") 
          setPreName("切换中文")   
        } else {   
          I18n.changeLanguage('zh')              

          setPreLang("zh") 
          setPreName("切换英文")                    
        }
    }
   

    // 加载组件，用于翻译，但不限于放在哪一个组件。
    let { t } = useTranslation()          // 加载组件

    return (
        <div> 
            <h1>下面是I18n使用的切换功能组件</h1>
            <button onClick={changeLang}>
                {pre_name}
            </button>   
 
            {/* 3种常用使用方式 */} 
            <h2><Trans>home</Trans></h2>  
            <h1>{t('home')}</h1>
            <Translation>
                {t => <h3>{t('home')}</h3>} 
            </Translation>   
        </div>  
    ) 
}
 
export default ChangeI18n;