import React from 'react';
import classes from "./Header.module.css";
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
            <header className={classes.container}>
                <div className={classes['nav-bar']}>
                    <div className={classes['nav-belt']}>
                        <div class={classes['nav-left']}>
                            <div className={classes['nav-logo']}>
                                <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>FakeAzon</Link>
                            </div>
                        </div>
                        <div class={classes['nav-fill']}>
                            <div className={classes['nav-search']}>
                                <form className={classes['nav-search-bar-form']}>
                                    <div className={classes['nav-left']}>
                                        <Link to="" style={{ color: 'black', textDecoration: 'inherit' }}>Tutto</Link>
                                    </div>
                                    <div className={classes['nav-fill']}>
                                        <input type="text" />
                                    </div>
                                    <div className={classes["nav-right"]}>
                                        <button type="submit">Search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className={classes['nav-right']}>
                            <div className={classes['nav-tools']}>
                                <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>Log in</Link>
                                <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>Carrello</Link>
                                <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>About</Link>
                            </div>
                        </div>
                    </div>
                    <div className={classes["nav-main"]}>

                    </div>
                </div>
            </header>
    );
}

export default Header;