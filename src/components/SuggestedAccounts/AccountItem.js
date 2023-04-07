import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import { BsFillCheckCircleFill } from "react-icons/bs";


import styles from './SuggestedAccounts.module.scss'
import Image from "../image/Image";
import AccountPreview from "./AccountPreview";
import { Wrapper as PopperWrapper } from "~/components/Popper"
const cx = classNames.bind(styles)

function AccountItem() {

    const renderPreview = (attrs) => (
        <div className={cx('preview')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <AccountPreview />
            </PopperWrapper>
        </div>
    )

    return ( 
        <div>
            <Tippy
                interactive
                delay={[1000,0]}
                render={renderPreview}
                placement="bottom"
                offset={[-24,0]}
            >
                <div className={cx('account-item')}>
                    <Image
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8364d94f042ebc277470488e01529b52~c5_100x100.jpeg?x-expires=1680962400&x-signature=1%2Bi%2BDoEcZ7YwkHEIgO5earhf3AA%3D"
                        alt=''
                    />
                    <div className={(cx('item-info'))}>
                        <p className={cx('nickname')}>
                            <span>annhien_boiboi</span>
                            <BsFillCheckCircleFill className={cx('check-icon')}/>
                        </p>
                        <p className={cx('name')}>AnNhiên ❤️ BốiBối</p>
        
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;