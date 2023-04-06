import classNames from "classnames/bind";
import { BsFillCheckCircleFill } from "react-icons/bs";

import styles from './AccountPreview.module.scss'
import Image from "~/components/image";
import Button from "~/components/Button/Button";

const cx = classNames.bind(styles)

function AccountPreview() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8364d94f042ebc277470488e01529b52~c5_100x100.jpeg?x-expires=1680962400&x-signature=1%2Bi%2BDoEcZ7YwkHEIgO5earhf3AA%3D" alt="" />
                <Button primary className={cx('reset-button')}>
                    Follow
                </Button>
            </div>
            <div className="body">
                <span className={cx('user-name')}>annhien_boiboi</span>
                <BsFillCheckCircleFill className={cx('check-icon')}/>
                <p className={cx('name')}>AnNhien BoiBoi</p>
                <p className={cx('analytics')}>
                    <span className={cx('value')}>10,4M</span>
                    <span className={cx('label')}>Follower</span>
                    <span className={cx('value')}>103,4M</span>
                    <span className={cx('label')}>Like</span>
                    
                </p>
            </div>

        </div>
     );
}

export default AccountPreview;

