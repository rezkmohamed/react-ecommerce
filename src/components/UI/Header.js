import React from 'react';
import classes from "./Header.module.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../services/auth-slice';
import { useHistory } from 'react-router';

const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isLoggedIn = useSelector((state) => state.auth.value.profileData);

    const onLogout = () => {
        dispatch(authActions.logout());
        history.push("/login");
    }

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
                                {
                                    !isLoggedIn &&
                                    <Link to="#" disabled style={{ color: 'inherit', textDecoration: 'inherit' }}>Log in</Link>
                                }
                                {
                                    isLoggedIn &&
                                    <Link to="#"
                                        style={{ color: 'inherit', textDecoration: 'inherit' }}
                                        onClick={onLogout}>Log out</Link>
                                }

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