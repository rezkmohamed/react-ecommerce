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

    const onRemoveProduct = (idProd) => {
        dispatch(cartActions.removeProductFromCart(idProd));
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
                        <th className={classes.sixth}>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        cartProducts.map(product => {
                            return (
                                <tr className={classes.productitm} key ={product.idProduct}>
                                    <td><img src={product.img} className={classes.thumb} alt="img cart"/></td>
                                    <td><input type="number" value="1" min="0" max="99" className={classes.qtyinput} /></td>
                                    <td>{product.product_title}</td>
                                    <td>$ {product.price}</td>
                                    <td><button className="btn btn-primary" onClick={() => onRemoveProduct(product.idProduct)}>X</button></td>
                                </tr>)
                        })
                    }
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