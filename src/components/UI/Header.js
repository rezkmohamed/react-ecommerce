import React from 'react';
import classes from "./Header.module.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../services/auth-slice';
import { useHistory } from 'react-router';
import { useRef } from 'react';

const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isLoggedIn = useSelector((state) => state.auth.value.profileData);
    console.log(isLoggedIn);
    const prodToSearch = useRef();

    const onLogout = () => {
        dispatch(authActions.logout());
        history.push("/login");
    };

    const onSearchProd = (event) => {
        event.preventDefault();
        history.push(`/search/?name=${prodToSearch.current.value}`);
    };

    return (
            <header className={classes.container}>
                <div className={classes['nav-bar']}>
                    <div className={classes['nav-belt']}>
                        <div className={classes['nav-left']}>
                            <div className={classes['nav-logo']}>
                                <Link to="/" style={{ color: 'white', textDecoration: 'inherit' }}>FakeAzon</Link>
                            </div>
                        </div>
                        <div className={classes['nav-fill']}>
                            <div className={classes['nav-search']}>
                                <form className={classes['nav-search-bar-form']}>
                                    <div className={classes['nav-left']}>
                                        <Link to="" style={{ color: 'black', textDecoration: 'inherit' }}>Tutto</Link>
                                    </div>
                                    <div className={classes['nav-fill']}>
                                        <input type="text" ref={prodToSearch}/>
                                    </div>
                                    <div className={classes["nav-right"]}>
                                        <button type="submit" onClick={onSearchProd}>Search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className={classes['nav-right']}>
                            <div className={classes['nav-tools']}>
                                {
                                    !isLoggedIn &&
                                    <Link to="#" disabled style={{ color: 'white', textDecoration: 'inherit' }}>Log in</Link>
                                }
                                {
                                    isLoggedIn &&
                                    <Link to="#"
                                        style={{ color: 'white', textDecoration: 'inherit' }}
                                        onClick={onLogout}>Log out</Link>
                                }

                                <Link to="/cart" style={{ color: 'white', textDecoration: 'inherit' }}>Carrello</Link>
                                {
                                    isLoggedIn.isVendor &&
                                    <Link to="/myprods" style={{ color: 'white', textDecoration: 'inherit' }}>Miei Prodotti</Link>
                                }
                                {
                                    !isLoggedIn.isVendor &&
                                    <Link to="/" style={{ color: 'white', textDecoration: 'inherit' }}>About</Link>
                                }
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