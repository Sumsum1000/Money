import style from './Logs.module.scss';

export const Login = () => {
    return(
        <div className={style['logs-container']}>
            <form className={style['form-container']}>
                <div className={style['form-line']}>
                    <label for='email'>email</label>
                    <input 
                        className={style['input']} 
                        id='email' 
                        type='email'
                    />
                </div>
                <div className={style['form-line']}>
                    <label for='password'>password</label>
                    <input 
                        className={style['input']}  
                        id='password' 
                        type='text' 
                    />
                </div>
                <button className={style['btn-submit']}>Login</button>                    
            </form>
        </div>
    )
}