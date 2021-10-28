import React from 'react';
import classes from "./MyProductsPage.module.css";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

const MyProductsPage = () => {
    const history = useHistory();
    const products = useSelector((state) => state.auth.value.profileData.products);

    const goToAddProd = () => {
        history.push("/newprod");
    }

    return (
        <React.Fragment>
            <Header />
            <div className={classes.w}>
                <header className="title">
                <h1>I tuoi prodotti</h1>
                </header>
                <div className={classes.page}>
                <table className={classes.cart}>
                    <thead>
                    <tr>
                        <th className={classes.first}>Photo</th>
                        <th className={classes.second}>Qty Availabe</th>
                        <th className={classes.third}>Name</th>
                        <th className={classes.fifth}>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products.map(product => {
                            return (
                                <tr className={classes.productitm}>
                                    <td><img src={product.main_img} className={classes.thumb} alt="img cart"/></td>
                                    <td><input type="number" value="1" min="0" max="99" className={classes.qtyinput} /></td>
                                    <td>{product.product_title}</td>
                                    <td>$ {product.price}</td>
                                </tr>)
                        })
                    }
                    </tbody>
                </table>
                </div>
            </div>
            <div className="text-center" style={{'marginBottom': '13px'}}>
                <button className="btn btn-primary" onClick={goToAddProd}>AGGIUNGI PRODOTTO</button>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default MyProductsPage;