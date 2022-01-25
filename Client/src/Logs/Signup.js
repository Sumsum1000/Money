import style from './Logs.module.scss';

export const Signup = () => {
    return(
        <div className={style['logs-container']}>
            <form className={style['form-container']}>
            <div className={style['form-line']}>
                    <label for='name'>name</label>
                    <input 
                        className={style['input']} 
                        id='name' 
                        type='text'
                    />
                </div>
                <div className={style['form-line']}>
                    <label for='email'>email</label>
                    <input 
                        className={style['input']} 
                        id='email' 
                        type='email'
                    />
                </div>
                <div className={style['form-line']}>
                    <label for='password1'>password</label>
                    <input 
                        className={style['input']}  
                        id='password1' 
                        type='text' 
                    />
                </div>
                <div className={style['form-line']}>
                    <label for='password2'>confirm password</label>
                    <input 
                        className={style['input']}  
                        id='password2' 
                        type='text' 
                    />
                </div>
                <button className={style['btn-submit']}>Login</button>                    
            </form>
        </div>
    )
}