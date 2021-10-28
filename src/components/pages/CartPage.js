import React from 'react';
import Footer from '../UI/Footer';
import Header from '../UI/Header';
import classes from "./CartPage.module.css";

const CartPage = (props) => {
    return (
        <React.Fragment>
            <Header />
            <div className={classes.w}>
                <header className="title">
                <h1>Il tuo carrello</h1>
                </header>
                <div className={classes.page}>
                <table className={classes.cart}>
                    <thead>
                    <tr>
                        <th className={classes.first}>Photo</th>
                        <th className={classes.second}>Qty</th>
                        <th className={classes.third}>Name</th>
                        <th className={classes.fifth}>&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className={classes.productitm}>
                        <td><img src="https://senetsoftware.com/Ross/PNG/PNG/brown-2.png" className={classes.thumb} /></td>
                        <td><input type="number" value="1" min="0" max="99" className={classes.qtyinput} /></td>
                        <td>Design Bundle Package</td>
                    </tr>
                    <tr className={classes.productitm}>
                        <td><img src="https://i.imgur.com/RkzoXzZ.png" className={classes.thumb} /></td>
                        <td><input type="number" value="1" min="0" max="99" className={classes.qtyinput} /></td>
                        <td>Stuff on my Cat: The Book</td>
                    </tr>
                    <tr className={classes.productitm}>
                        <td><img src="https://i.imgur.com/vZ26Uwy.png" className={classes.thumb} /></td>
                        <td><input type="number" value="1" min="0" max="99" className={classes.qtyinput} /></td>
                        <td>SpongeBob's First 100 Episodes</td>
                    </tr>
                    <tr className={classes.productitm}>
                        <td><img src="https://i.imgur.com/tEdRnz4.png" className={classes.thumb} /></td>
                        <td><input type="number" value="1" min="0" max="99" className={classes.qtyinput} /></td>
                        <td>JavaScript &amp; jQuery: The Missing Manual</td>
                    </tr>
                    <tr className={classes.productitm}>
                        <td><img src="https://i.imgur.com/tEdRnz4.png" className={classes.thumb} /></td>
                        <td><input type="number" value="1" min="0" max="99" className={classes.qtyinput} /></td>
                        <td>JavaScript &amp; jQuery: The Missing Manual</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <Footer />
        </React.Fragment>);
}

export default CartPage;