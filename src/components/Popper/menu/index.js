import classNames from "classnames/bind";
import styles from "./Menu.module.scss"
import { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import MenuItem from "./Menuitem";
import { Wrapper as PopperWrapper } from "~/components/Popper"
import Header from "./Header";

const cx = classNames.bind(styles)
const defaultFN = () => {}

function Menu({children, items=[],hideOnClick = false, onChange =  defaultFN }) {
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
    return (
        <Tippy
        interactive
        offset={[14,6]}
        delay={[0,600]}
        hideOnClick={hideOnClick}
        placement='bottom-end'
        render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title="Language" onBack={() => setHistory((prev) =>
                            prev.slice(0, prev.length - 1)
                            
                        )}/>}
                        {renderItems()}
                    </PopperWrapper>
                </div>
        )}
        onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
        {children}
    </Tippy>
     );
}

export default Menu;