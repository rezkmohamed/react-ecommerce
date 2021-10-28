import React from 'react';
import Footer from '../UI/Footer';
import Header from '../UI/Header';
import classes from "./CartPage.module.css";
import { cartActions } from '../../services/cart-slice';
import { useDispatch, useSelector } from 'react-redux';

const CartPage = (props) => {
    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cart.value.products);
    console.log(cartProducts);

    const finishShop = () => {
        dispatch(cartActions.finishBuying());
        window.alert('ACQUISTO TERMINATO');
    };
    


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
                        <th className={classes.fifth}>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        cartProducts.map(product => {
                            return (
                                <tr className={classes.productitm}>
                                    <td><img src="https://senetsoftware.com/Ross/PNG/PNG/brown-2.png" className={classes.thumb} alt="img cart"/></td>
                                    <td><input type="number" value="1" min="0" max="99" className={classes.qtyinput} /></td>
                                    <td>Design Bundle Package</td>
                                    <td>$ 50</td>
                                </tr>
        
                            )
                        })
                    }

                    
                    <tr className={classes.productitm}>
                        <td><img src="https://senetsoftware.com/Ross/PNG/PNG/brown-2.png" className={classes.thumb} alt="img cart"/></td>
                        <td><input type="number" value="1" min="0" max="99" className={classes.qtyinput} /></td>
                        <td>Design Bundle Package</td>
                        <td>$ 50</td>
                    </tr>
                    <tr className={classes.productitm}>
                        <td><img src="https://i.imgur.com/RkzoXzZ.png" className={classes.thumb} alt="img cart"/></td>
                        <td><input type="number" value="1" min="0" max="99" className={classes.qtyinput} /></td>
                        <td>Stuff on my Cat: The Book</td>
                        <td>$ 50</td>
                    </tr>
                    <tr className={classes.productitm}>
                        <td><img src="https://i.imgur.com/vZ26Uwy.png" className={classes.thumb} alt="img cart"/></td>
                        <td><input type="number" value="1" min="0" max="99" className={classes.qtyinput} /></td>
                        <td>SpongeBob's First 100 Episodes</td>
                        <td>$ 50</td>
                    </tr>
                    <tr className={classes.productitm}>
                        <td><img src="https://i.imgur.com/tEdRnz4.png" className={classes.thumb} alt="img cart"/></td>
                        <td><input type="number" value="1" min="0" max="99" className={classes.qtyinput} /></td>
                        <td>JavaScript &amp; jQuery: The Missing Manual</td>
                        <td>$ 50</td>
                    </tr>
                    <tr className={classes.productitm}>
                        <td><img src="https://i.imgur.com/tEdRnz4.png" className={classes.thumb} alt="img cart"/></td>
                        <td><input type="number" value="1" min="0" max="99" className={classes.qtyinput} /></td>
                        <td>JavaScript &amp; jQuery: The Missing Manual</td>
                        <td>$ 50</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <div className="text-center" style={{'marginBottom': '13px'}}>
                <button className="btn btn-primary" onClick={finishShop}>SHOPPA ORA</button>
            </div>
            <Footer />
        </React.Fragment>);
}

export default CartPage;