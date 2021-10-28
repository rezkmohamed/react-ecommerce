import React, { useRef } from "react";
import { Link } from "react-router-dom";
import classes from "./Register.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../../../services/auth-slice";


const Register = () => {
    const emailRef = useRef();
    const psw = useRef();
    const pswConfirm = useRef();
    const typeOfUser = useRef();
    const dispatch = useDispatch();
    
    const onRegister = () => {
        const email = emailRef.current.value;
        const pswCurrent = psw.current.value;
        const pswConfirmCurrent = pswConfirm.current.value;
        const typeOfuserCurrent = typeOfUser.current.value;
        if(pswCurrent !== pswConfirmCurrent){
            window.alert('DIFFERENT PASSWORDS!!!');
            return;
        }

        console.log(email, pswCurrent, pswConfirmCurrent, typeOfuserCurrent);
        dispatch(authActions.register({
            email: email,
            psw: pswCurrent,
            typeOfUser: typeOfuserCurrent,
            products: [],
            cart: []
        }));
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
                        <form>
                        <div className={`${classes['inpyut-group']} ${classes['mb-3']}`}>
                <div className={classes['input-group-prepend']}>
                <span className={classes['input-group-text']}><i className="fa fa-user"></i></span>
            </div>
            <input type="text" className={classes['form-control']} placeholder="Email" ref={emailRef} />
            </div>
            <div className={`${classes['input-group']} ${classes['mb-3']}`}>
                <div className={classes['input-group-prepend']}>
                <span className={classes['input-group-text']}><i className="fa fa-lock"></i></span>
            </div>
            <input type="password" className={classes['form-control']} placeholder="Password" ref={psw} />
            <input type="password" className={classes['form-control']} placeholder="Conferma Password" ref={pswConfirm} />
            </div>
            <div>
                <input type="radio" id="huey" name="drone" value="user" defaultChecked ref={typeOfUser}/>
                <label htmlFor="huey">Acquirente</label>
            </div>

            <div>
                <input type="radio" id="dewey" name="drone" value="vendor" ref={typeOfUser} />
                <label html="dewey">Venditore</label>
            </div>

            <button type="button" className={`${classes.button} ${classes['btn-secondary']} ${classes['btn-block']}`} onClick={onRegister}>REGISTRA</button>
            <div className={classes.message}>
            {/* <div><input type="checkbox" /> Remember ME</div> */}
            <div><Link to="/login">Vai a Login</Link></div>

            </div>
                </form>
                        {/* <div className={classes.social}>
                        <Link href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter-square"></i></a>
                        <a href="#"><i className="fab fa-google"></i></a>
                        </div> */}
                    </div>
                    </div>
        </div>)

}

export default Register;