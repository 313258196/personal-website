import { useLocation, useNavigate } from "react-router-dom"
import i18n, { LangType } from "../i18n/index"

// 打字机 typewriter
export const typewriter: Function = (arr: string[], fn?: Function) => {
    let idx = 0
    let idxSub = 1

    const doit = (type: 'increase' | 'reduce' = 'increase', duration: number = 200) => {

        const start = () => {
            let rs = arr[idx].substring(0, idxSub)
            fn && fn(rs)

            switch (type) {
                case 'increase':
                    ++idxSub
                    if (idxSub > arr[idx].length) {
                        clearInterval(timer)
                        setTimeout(() => {
                            doit('reduce', 100)
                        }, 1000);
                    }
                    break;
                case 'reduce':
                    --idxSub
                    if (idxSub === -1) {
                        ++idx
                        idxSub = 1

                        clearInterval(timer)
                        setTimeout(() => {
                            doit()
                        }, 100);
                    }

                    break;
            }
            if (idx === arr.length) {
                idx = 0
            }
        }

        start()
        let timer = setInterval(start, duration)
    }

    doit()
}

export const switchLanguage: Function = ({ navigate, location }: { navigate: any, location: any }) => {
    let pathNameArr = location.pathname.split("/")

    const englishBoo = i18n.language === LangType.en
    pathNameArr[1] = englishBoo ? LangType.ZH : LangType.EN

    console.log(11111111,pathNameArr.join("/") || "/")
    navigate(pathNameArr.join("/") || "/", { replace: true });
}