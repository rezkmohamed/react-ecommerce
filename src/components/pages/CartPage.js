import React from 'react';
import Footer from '../UI/Footer';
import Header from '../UI/Header';
import classes from "./CartPage.module.css";
import { cartActions } from '../../services/cart-slice';
import { useDispatch, useSelector } from 'react-redux';
import { shopProducts } from '../../services/products-service';

const CartPage = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cart.value.products);
    console.log(cartProducts);

    const finishShop = () => {
        console.log(cartProducts);
        shopProducts(cartProducts)
        .then(res => {
            if(res){
                window.alert('OKKAAAY!!! bravo, shop terminato');
                dispatch(cartActions.finishBuying());
            } else {
                window.alert(':((((((');
            }
        }).catch(err => {
            window.alert("ERRROOORR::::  " + err.message);
        });

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
                                    <td><input type="number" defaultValue="1" min="0" max="99" className={classes.qtyinput} /></td>
                                    <td>{product.product_title}</td>
                                    <td>$ {product.price}</td>
                                    <td><button className="btn btn-danger" onClick={() => onRemoveProduct(product.idProduct)}>X</button></td>
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