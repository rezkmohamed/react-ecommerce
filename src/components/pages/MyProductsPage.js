import React, { useEffect, useState } from 'react';
import classes from "./MyProductsPage.module.css";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import { useHistory } from 'react-router';
// import { useSelector } from 'react-redux';
import { fetchProductsProfileLogged } from '../../services/products-service';

const MyProductsPage = () => {
    const history = useHistory();
    // const products = useSelector((state) => state.auth.value.profileData.products);
    // console.log(products);
    // const idProfileLogged = useSelector((state) => state.auth.value.profileData.idProfile);
    // console.log(idProfileLogged);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProductsProfileLogged()
        .then(res => {
            setProducts(res);
            console.log(products);
        }).catch(err => {
            console.log(err);
            window.alert('ERRORE: ' + err.message);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const goToAddProd = () => {
        history.push("/newprod");
    };

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
                        products &&
                        products.map(product => {
                            return (
                                <tr className={classes.productitm}>
                                    <td><img src={product.img} className={classes.thumb} alt="img cart"/></td>
                                    <td><input type="number" value="1" min="0" max="99" className={classes.qtyinput} /></td>
                                    <td>{product.nameProd}</td>
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