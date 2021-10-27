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
                                <Link to="/">FakeAzon</Link>
                            </div>
                        </div>
                        <div class={classes['nav-fill']}>
                            <div className={classes['nav-search']}>
                                <form className={classes['nav-search-bar-form']}>
                                    <div className={classes['nav-left']}>
                                        <Link to="">Tutto</Link>
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
                                <Link to="/">Log in</Link>
                                <Link to="/">Carrello</Link>
                                <Link to="/">About</Link>
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