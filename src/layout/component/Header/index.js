import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { FiUploadCloud } from 'react-icons/fi';
import { BiMessageAltMinus } from 'react-icons/bi';
import { MessengerIcon } from '~/components/icons';

import styles from './Header.module.scss';
import Button from '~/components/Button';
import Menu from '~/components/Popper/menu';
import Image from '~/components/image';
import Search from '~/layout/component/Search';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tieng Viet',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const handleMenuChange = () => {};
    const currentUser = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'View profile',
            to: '/@diecphi',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/Settings',
        },

        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <img
                        width="118"
                        height="42"
                        src="https://raw.githubusercontent.com/sondnpt00343/tiktok-ui/788118113e115f73493328becee5db6ae2b1bd76/src/assets/images/logo.svg"
                    />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload Video" placement="bottom" delay={[0, 50]} offset={[0, 15]}>
                                <button className={cx('action-btn')}>
                                    <FiUploadCloud></FiUploadCloud>
                                </button>
                            </Tippy>
                            <Tippy content="Messager" placement="bottom" delay={[0, 50]} offset={[0, 15]}>
                                <button className={cx('action-btn')}>
                                    <MessengerIcon width="2.8rem" height="2.8rem" />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom" delay={[0, 50]} offset={[0, 15]}>
                                <button className={cx('action-btn')}>
                                    <BiMessageAltMinus />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                fallBack={'https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png'}
                                className={cx('user-avatar')}
                                alt="ludiecphi"
                                src="https://images2.thanhnien.vn/Uploaded/tuyenth/2022_04_09/4-6124.jpg"
                            ></Image>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
