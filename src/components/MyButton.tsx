import React, { Component, FC } from 'react';

interface ButtonProps {
    changeLang:() => void,
    name:string
}

const MyButton:FC<ButtonProps> = props => {
    return (
        <div>
            <button onClick={ props.changeLang }>{ props.name }</button>
        </div>
    )
}

export default MyButton;