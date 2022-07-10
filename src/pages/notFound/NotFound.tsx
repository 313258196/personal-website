import { FC } from "react";
import { Empty } from 'antd';
import { useTranslation } from 'react-i18next'

const NotFound: FC = props => {
    let { t } = useTranslation()

    return <Empty description={
        <h1 style={{ color: '#888' }}>{t('page.notFound')}</h1>
    } className="page-not-found"></Empty>
}

export default NotFound