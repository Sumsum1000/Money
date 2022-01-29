import style from './Main.module.scss'
import { Navbar } from '../Navbar/Navbar';
import { NewKid } from '../Kids/NewKid';
import { NewKidBtn } from '../Kids/NewKidBtn';


export const Main = () => {



    return(
        <div className={style['main-container']}>
            <Navbar />
            <NewKid />
            <NewKidBtn />
           
        </div>
    )
}