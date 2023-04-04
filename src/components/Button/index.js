import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Button.module.scss"

const cx = classNames.bind(styles)

function Button({ 
    primary = false , 
    outline = false, 
    small = false, 
    disabled = false,
    large = false, 
    text = false, 
    rounded = false,
    to, 
    href, 
    children, 
    className,
    leftIcon = false,
    rightIcon = false,
    onClick, 
    ...passProps
 }) {
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps
    }
    // remove event listener
    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }
    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }
    const classes = cx('wrapper',{
        primary,
        disabled,
        outline,
        small,
        text,
        rounded,
        [className]:className,
    })
    return ( 
        <Comp className={classes} {...props}>
            { leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            { rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
     );
}

export default Button;