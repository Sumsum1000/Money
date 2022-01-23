import style from './LogIn.module.scss'
import { useRef, useContext, useState } from 'react';
import { DataContext } from '../Context/DataContext';

export const LogIn = () => {

    const  { data, setData }  = useContext(DataContext);
    const [isSignUp, setIsSignup] = useState(false);

    const mailRef = useRef();
    const passwordRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault()

        const email = mailRef.current.value; 
        const password = passwordRef.current.value;

        if (email === data.email &&
            password === data.password) {
            setData({...data, isLogedin: true})
        }
    }

    const switchSignup = () => {
        setIsSignup(!isSignUp)
    }

    return(
        <form 
          className={style['log-in-container']}
          onSubmit={onSubmit}
        >
        <h3 
            //className={style['tab-left']}
            className={!isSignUp ? style['tab-left'] : style['tab-right']}
            onClick={switchSignup}
        >Sign up</h3>
        {/* <h3 className={style['tab-right']}>Sign up</h3> */}
            {/* <div className={style['log-in-title']}>
                <h3>Log In</h3>
            </div> */}
            <h2>Parent</h2>

            <div className={style['form-control']}>
                <label>email:</label>
                <input ref={mailRef} type="email"  />
            </div>

            <div className={style['form-control']}>
                <label>password:</label>
                <input ref={passwordRef} type="text"  />
            </div>
            
            <button type="submit" className={style['btn-submit']}>Submit </button>
        </form>   
    )
}