import React from "react";
import classes from "./Register.module.css";

const Register = () => {

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
                <span className={classes['input-group-text']}><i class="fa fa-user"></i></span>
            </div>
            <input type="text" className={classes['form-control']} placeholder="Email" />
            </div>
            <div className={`${classes['input-group']} ${classes['mb-3']}`}>
                <div className={classes['input-group-prepend']}>
                <span className={classes['input-group-text']}><i class="fa fa-lock"></i></span>
            </div>
            <input type="text" className={classes['form-control']} placeholder="Password" />
            <input type="text" className={classes['form-control']} placeholder="Conferma Password" />
            </div>
            <button type="button" className={`${classes.btn} ${classes['btn-secondary']} ${classes['btn-block']}`}>REGISTRA</button>
            <div className={classes.message}>
            {/* <div><input type="checkbox" /> Remember ME</div> */}
            <div><a href="#">Vai a Login</a></div>

            </div>
                </form>
                        <div className={classes.social}>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter-square"></i></a>
                        <a href="#"><i className="fab fa-google"></i></a>
                        </div>
                    </div>
                    </div>
        </div>)

}

export default Register;