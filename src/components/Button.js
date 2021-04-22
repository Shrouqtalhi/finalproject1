import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['my-btn--primary', 'my-btn--outline']

const SIZES = ['my-btn--medium', 'my-btn--large']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to='/sign-up' className='my-btn-mobile'>

            <button
                className={`my-btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>

        </Link>
    )
}