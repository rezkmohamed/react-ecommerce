import React, { useRef } from "react";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { authActions } from "../../../services/auth-slice";
import { login } from "../../../services/auth-service";
import jwt_decode from "jwt-decode";

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const email = useRef();
    const psw = useRef();

    const onLogin = (event) => {
        event.preventDefault();
        const loginData = {
            email: email.current.value,
            password: psw.current.value,
        };
        login(loginData.email, loginData.password)
        .then(res => {
            let token = res.headers.get("Authentication").replace("Bearer ", "");
            let responseDecoded = jwt_decode(token);
            console.log(responseDecoded);
            localStorage.setItem('token', token);
            localStorage.setItem('profileData', JSON.stringify(responseDecoded));
            console.log(responseDecoded);
            dispatch(authActions.login({isVendor: responseDecoded.isVendor,idProfile: responseDecoded.idProfile}));
            history.push("/");    
        }).catch(err => {
            window.alert('ERRORE DURANTE IL LOGIN SCEMO.');
            console.log(err);
        });

    };

    return(
        <div className={classes.container}>
                    <div className={classes['form-box']}>
                        <p>FakeAzon</p>
                        <p>FakeAzon è un sito di e-commerce in cui puoi trovare qualsiasi tipo di prodotto fake.</p>
                    <div className={classes['header-form']}>
                        <h4 className={`${classes['text-primary']} ${classes['text-center']}`}><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
                        <div className={classes['image']}>
                        </div>
                    </div>
                    <div className={classes['body-form']}>
            <form onSubmit={onLogin}>
                        <div className={`${classes['inpyut-group']} ${classes['mb-3']}`}>
                <div className={classes['input-group-prepend']}>
                <span className={classes['input-group-text']}><i className="fa fa-user"></i></span>
            </div>
            <input type="text" className={classes['form-control']} ref={email} placeholder="Email" />
            </div>
            <div className={`${classes['input-group']} ${classes['mb-3']}`}>
                <div className={classes['input-group-prepend']}>
                <span className={classes['input-group-text']}><i className="fa fa-lock"></i></span>
            </div>
            <input type="password" className={classes['form-control']} ref={psw} placeholder="Password" />
            </div>
            <button type="button" className={`${classes.button} ${classes['btn-secondary']} ${classes['btn-block']}`} onClick={onLogin}>LOGIN</button>
            <div className={classes.message}>
            {/* <div><input type="checkbox" /> Remember ME</div> */}
            <div><Link to="/">Reset password</Link></div>
            <div><Link to="/register">Registrati!!!!</Link></div>

            </div>
                </form>
            </div>
        </div>
    </div>)

}

export default Login;