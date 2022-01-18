import style from './Main.module.scss'
import { LogIn } from '../LogIn/LogIn';
import { Navbar } from '../Navbar/Navbar';
import { NewKid } from '../NewKid/NewKid';


export const Main = () => {



    return(
        <div className={style['main-container']}>
            <Navbar />
            <NewKid />
        </div>
    )
}