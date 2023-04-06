import classNames from "classnames/bind";
import styles from "./Menu.module.scss"
import PropTypes from 'prop-types';
import { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import MenuItem from "./Menuitem";
import { Wrapper as PopperWrapper } from "~/components/Popper"
import Header from "./Header";

const cx = classNames.bind(styles)
const defaultFN = () => {}

function Menu({children, items=[], hideOnClick = false, onChange =  defaultFN }) {
    const [history, setHistory] = useState([{ data:items }])
    const current = history[history.length - 1]
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return <MenuItem 
            key={index} 
            data={item} 
            onClick={() => {
                if (isParent) {
                    setHistory((prev) => [...prev, item.children])
                }else {
                    onChange(item)
                }
            }}
            />
        })
    }

    
    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 &&
                    <Header title={current.title} onBack={handleResetMenu}/>}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    )
    const handleResetToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1))
    }
    // Reset to first page
    const handleResetMenu = () => setHistory((prev) =>
        prev.slice(0, prev.length - 1)
    )
    return (
        <Tippy
            interactive
            offset={[14,6]}
            delay={[0,600]}
            hideOnClick={hideOnClick}
            placement='bottom-end'
            render={renderResult}
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
}

export default Menu;