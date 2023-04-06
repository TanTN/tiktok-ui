import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import styles from './image.module.scss'
import images from '~/assest/images';
function Image({ alt, src, className, fallBack: customFallBack = images.noImage,...props }, ref) {
    const [fallBack, setFallBack] = useState('');
    const handleError = () =>{
        setFallBack(customFallBack)
    }
    return <img 
        {...props}
        className={classNames(styles.wrapper,className)} 
        alt={alt} 
        src={fallBack || src} 
        ref={ref} 
        onError={handleError}
    />;
}
Image.propTypes = {
    alt:PropTypes.string,
    src:PropTypes.string,
    className:PropTypes.string,
    fallBack:PropTypes.string,
}

export default forwardRef(Image);
