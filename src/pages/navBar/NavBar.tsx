import { FC, forwardRef, useImperativeHandle, useReducer, useState } from "react";
import HTransition, { HTransitionGroup } from "../../components/hTransition/HTransition";
import { NavMenu, NavMenuProps } from "../mock"
import classNames from "classnames";

const NavBar = forwardRef((props, ref) => {
    const navMenu: string[] = NavMenu()

    const [visible, setVisible] = useState(false);
    const [visibleNav, dispatchNav] = useReducer((state: Boolean, action: String): Boolean => {
        switch (action) {
            case "true":
                return true
            case "false":
                return false
            default:
                return false
        }
    }, false);

    let navM: NavMenuProps[] = navMenu.map((item: String, index: Number) => ({
        label: item,
        active: index == 0
    }))
    const [navList, dispatchNavList] = useReducer((state: NavMenuProps[], action: {
        type: String
        index?: number | string
    }) => {
        switch (action.type) {
            case "setActive":
                state.forEach((item: any) => item.active = false)
                state[action.index as any].active = true
                // 更新引用地址，才会触发渲染
                return [...state]
            case "pushNewOne":
                return [...state, { label: "navItem_" + state.length, active: false }]
            case "pushNewOneInNavM":
                return [...state, navM[action.index as number]]
            case "clear":
                return []
            default:
                return state
        }
    }, [])

    const showNavItem = (index: number) => {
        let timer: NodeJS.Timeout | undefined;
        if (index <= navM.length - 1) {
            dispatchNavList({ type: "pushNewOneInNavM", index })
            ++index
            timer = setTimeout(() => {
                showNavItem(index)
            }, 20);
        } else {
            clearTimeout(timer)
        }
    }
    const onClose = () => {
        setVisible(false);
        dispatchNav("false")
        dispatchNavList({ type: "clear" })
    };

    useImperativeHandle(ref, () => ({
        setVisible,
        dispatchNav,
        showNavItem,
    }))

    return (
        <>
            <HTransition visiable={visible} className="fixed-bg" unmountOnExit>
                <div className="fixed-block" onClick={onClose}></div>
            </HTransition>
            <HTransition visiable={visibleNav} className="nav-bar" unmountOnExit>
                <div className="nav-bar-block">
                    <HTransitionGroup>
                        {
                            navList.map((item, index) => {
                                const classes = classNames("nav-i", {
                                    "active": item.active
                                })
                                // const aLabel = item.label == "HOME" ? "" : `#${item.label}`

                                return (
                                    <HTransition key={index} className="nav-item" timeout={1000}>
                                        <div>
                                            <a href={`#${item.label}`} className={classes} onClick={() => dispatchNavList({ type: "setActive", index })}>
                                                <span>{item.label}</span>
                                            </a>
                                        </div>
                                    </HTransition>
                                )
                            })
                        }
                    </HTransitionGroup>
                    <button className="close-button" id="close-button" onClick={onClose}>Close Menu</button>
                </div>
            </HTransition>
        </>
    )
})

export default NavBar