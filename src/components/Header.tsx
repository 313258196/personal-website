import React, { Component, FC } from 'react';
import { DatePicker, TimePicker, Select, } from 'antd';
import { useTranslation, Trans, Translation } from 'react-i18next'

const { Option } = Select;
const { RangePicker } = DatePicker;

const Header: FC = () => {
    let { t } = useTranslation()          // 加载组件

    return (
        <div className="">
            <div className="example">
                <hr />
                <h2>下面是测试结果</h2>
                <div>{t("home")}</div>
                <div>{t("test words")}</div>

                <DatePicker />
                <TimePicker />
            </div>
        </div>
    );
}

export default Header;