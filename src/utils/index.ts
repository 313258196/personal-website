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

// 浏览器语言 browser language 
export const getBrowserLanguage = () => {
    return (navigator as any).systemLanguage ? (navigator as any).systemLanguage : navigator.language
}