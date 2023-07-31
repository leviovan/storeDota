import { toogleModalAddItem, toogleModalCart } from '../../../store/slice/items/items';
import { useAppDispatch } from '../../../store/store';
import Button from '../../Button/Button';
import Style from './TopSideButtons.module.scss';

function TopSideButtons() {
  const dispatch= useAppDispatch();
  const toogleShowAddmodal =()=>{
    dispatch(toogleModalAddItem())
} 
 const toogleCart =()=>{
  dispatch(toogleModalCart())}
  
  return (
    <div className={Style.body}>
         <Button text="Создать товар" bc="#128a19" OnClick={()=>toogleShowAddmodal()}></Button>
         <Button text="Список покупок" bc="#582f8a" OnClick={()=>toogleCart()}></Button>
    </div>
  )
}

export default TopSideButtons