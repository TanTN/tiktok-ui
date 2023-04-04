import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import styles from './image.module.scss'
import images from '~/assest/images';
function Image({ alt, src, className,fallBack: customFallBack = images.noImage,...props }, ref) {
    const [fallBack, setFallBack] = useState('');
    const handleError = () =>{
        setFallBack(customFallBack)
    }
    return <img 
    className={classNames(styles.wrapper,className)} 
    alt={alt} 
    src={fallBack || src} 
    {...props} ref={ref} 
    onError={handleError}
    />;
}

export default forwardRef(Image);
