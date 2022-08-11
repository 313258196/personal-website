import { useTranslation, Trans, Translation } from 'react-i18next'

export interface NavMenuProps {
    label:String
    active:Boolean
}

// nav menu 
export const NavMenu = ():string[] => {
    let { t } = useTranslation()

    return [
        t('nav.home'),
        t('nav.about'),
        t('nav.work'),
        t('nav.services'),
        t('nav.employement'),
        t('nav.skills'),
        t('nav.education'),
        t('nav.testimonial'),
        t('nav.blog'),
        t('nav.contact'),
        t('nav.language'),
    ]
}

// intro self
export const IntroSelf = () => {
    let { t } = useTranslation()

    return [
        t('page.intro1'),
        t('page.intro2'),
        t('page.intro3'),
    ]
}