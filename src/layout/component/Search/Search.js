import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BiSearch } from 'react-icons/bi';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import AccountItem from '~/components/Accountitem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/services/searchService';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loadingResult, setLoadingResult] = useState(false);

    const debouncedValue = useDebounce(searchValue,500)
    const inputRef = useRef();
    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([])
            return
        }
        
        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debouncedValue)}&type=less`)
        // .then(response => response.json())
        // .then((res) => {
        //     setSearchResult(res.data)
        //     setLoadingResult(false)
        // })
        // .catch(() => setLoadingResult(false))
        
        const fetchApi = async () => {
            setLoadingResult(true)

            const result = await searchServices.search(debouncedValue)
            setSearchResult(result)
            setLoadingResult(false)
        }

        fetchApi()
            
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    }

    const handleHideResult = () => {
        setShowResult(false)

    }

    const handleChange = (e) => {
        const searchValue = e.target.value
        if (!searchValue.startsWith(' ')){
            setSearchValue(e.target.value)
        }
    }

    return (
        // Using a wrapper <div> or <span> tag around the reference
        //  element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map(result => (
                                <AccountItem key={result.id}  data={result} onClick={handleHideResult}/>
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
                
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        type="text"
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loadingResult && (
                        <button
                            className={cx('clear')}
                            onClick={handleClear}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loadingResult && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
                        <BiSearch />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
