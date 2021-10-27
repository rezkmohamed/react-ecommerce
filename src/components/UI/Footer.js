import React from 'react';
import classes from "./Footer.module.css";

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
                        <li><a href="http://scanfcode.com/category/c-language/">Libri</a></li>
                        <li><a href="http://scanfcode.com/category/front-end-development/">Abbigliamento</a></li>
                        <li><a href="http://scanfcode.com/category/back-end-development/">Elettronica</a></li>
                        <li><a href="http://scanfcode.com/category/java-programming-language/">Alimentari</a></li>
                        <li><a href="http://scanfcode.com/category/android/">Giochi</a></li>
                        <li><a href="http://scanfcode.com/category/templates/">Bellezza e Cura della persona</a></li>
                        </ul>
                    </div>

                    <div className={`${classes['col-xs-6']} ${classes['col-md-3']} `}>
                        <h6>Quick Links</h6>
                        <ul className={classes['footer-links']}>
                        <li><a href="http://scanfcode.com/about/">About Us</a></li>
                        <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                        <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                        <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                        </ul>
                    </div>
                    </div>
                    <hr />
                </div>
                <div className={classes.container}>
                    <div className={classes.row}>
                    <div className={`${classes['col-md-8']} ${classes['col-sm-6']} ${classes['col-xs-12']}`}>
                        <p className={classes['copyright-text']}>Copyright &copy; 2021 All Rights Reserved by  
                    <a href="#"> MoHaMeD</a>.
                        </p>
                    </div>

                    <div className={`${classes['col-md-4']} ${classes['col-sm-6']} ${classes['col-xs-12']}`}>
                        <ul className={classes['social-icons']}>
                        <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                        <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
                        </ul>
                    </div>
                    </div>
                </div>
            </footer>);
}

export default Footer;