import style from './NewKid.module.scss';
import { useRef, useContext } from 'react';
import { kidsContext } from '../Context/KidsContext';

export const NewKid = () => {

    const { kids, setKids } = useContext(kidsContext);

    const mailRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault()

        // Check if kid exists ------------------
        // Check password -----------------------
        
        const name = nameRef.current.value; 
        const email = mailRef.current.value; 
        const password = passwordRef.current.value;

        setKids([...kids , {name, email, password}])

        nameRef.current.value = '';
        mailRef.current.value = '';
        passwordRef.current.value = '';
    }

    return(
      <form 
        className={style['log-in-container']}
        onSubmit={onSubmit}
      >
          <div className={style['log-in-title']}>
              <h3>Add kid</h3>
          </div>
          
          <div className={style['form-control']}>
              <label>name:</label>
              <input ref={nameRef} type="text"  />
          </div>

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