import React from 'react';
import classes from "./Footer.module.css";
import { Link } from 'react-router-dom';

const Footer = (props) => {
    return (
            <footer className={classes['site-footer']}>
                <div className={classes.container}>
                    <div className={classes.row}>
                    <div className={`${classes['col-sm-12']} ${classes['col-md-6']}`}>
                        <h6>About</h6>
                        <p className={classes['text-justify']}>FakeAzon<i> IL FAKE AMAZON CHE TI LASCIA DI STUCCO </i> questo progetto è un progetto di prova per allenarsi a sviluppare con React/Redux</p>
                    </div>

                    <div className={`${classes['col-xs-6']} ${classes['col-md-3']}`}>
                        <h6>Categories</h6>
                        <ul className={classes['footer-links']}>
                        <li><Link to="/">Libri</Link></li>
                        <li><Link to="/">Abbigliamento</Link></li>
                        <li><Link to="/">Elettronica</Link></li>
                        <li><Link to="/">Alimentari</Link></li>
                        <li><Link to="/">Giochi</Link></li>
                        <li><Link to="/">Bellezza e Cura della persona</Link></li>
                        </ul>
                    </div>

                    <div className={`${classes['col-xs-6']} ${classes['col-md-3']} `}>
                        <h6>Quick Links</h6>
                        <ul className={classes['footer-links']}>
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                        <li><Link to="/">Contribute</Link></li>
                        <li><Link to="/">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    </div>
                    <hr />
                </div>
                <div className={classes.container}>
                    <div className={classes.row}>
                    <div className={`${classes['col-md-8']} ${classes['col-sm-6']} ${classes['col-xs-12']}`}>
                        <p className={classes['copyright-text']}>Copyright &copy; 2021 All Rights Reserved by  
                    <Link to="#"> MoHaMeD</Link>.
                        </p>
                    </div>

                    <div className={`${classes['col-md-4']} ${classes['col-sm-6']} ${classes['col-xs-12']}`}>
                        <ul className={classes['social-icons']}>
                        <li><Link className="facebook" to="#"><i className="fa fa-facebook"></i></Link></li>
                        <li><Link className="twitter" to="#"><i className="fa fa-twitter"></i></Link></li>
                        <li><Link className="dribbble" to="#"><i className="fa fa-dribbble"></i></Link></li>
                        <li><Link className="linkedin" to="#"><i className="fa fa-linkedin"></i></Link></li>   
                        </ul>
                    </div>
                    </div>
                </div>
            </footer>);
}

export default Footer;