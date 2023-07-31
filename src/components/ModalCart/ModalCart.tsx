import classNames from "classnames"
import { toogleModalCart } from "../../store/slice/items/items"
import { useAppDispatch, useAppSelector } from "../../store/store"
import Style from "./ModalCart.module.scss"
import { removeItemIncard } from "../../store/slice/cart/cart"
import Notification from "../notification/Notification"
import { useState } from 'react';

const ModalCart = () => {

  const cart =useAppSelector(state=> state.cart.items)
  const show =useAppSelector(state=> state.items.modalCart)
  const [complited, setComplited] = useState(false)
   const sum =useAppSelector(state=> state.cart.sum)
  const dispatch = useAppDispatch()
  console.log(cart);
  const close=()=>{
    dispatch(toogleModalCart())

}
  const removeItem=(i:number)=>{
    dispatch(removeItemIncard(i))
    setComplited(true)
    setTimeout(()=>setComplited(false),2000)
  }
  return (
    <>
    {complited && <Notification text=' Товар удалён ' bc='rgb(88, 47, 138)'/>}
    <div className={classNames(Style.bgmodal, show && Style.showModal)} onClick={()=>close()}></div>   
    <div className={classNames(Style.modalCart ,show && Style.showModal)}>
        <div className={Style.header}>
           <div></div><h4 className={Style.title}>Список Товаров </h4>  <div  className={Style.close} onClick={()=>{close()}}></div>
           </div>
        <div className={Style.list}>
          { cart.map((item,i)=>(<div className={Style.item}>
            <img className={Style.img} src={item.img} alt="icon" />
            <div className={Style.description}> 
                <h4 className={Style.title}> {item.name} </h4> 
                <p className={Style.desc}> <i> {item.description}</i></p>
            </div>  
            <p className={Style.cost}>Стоимость <br/><i>{item.cost}</i></p>
            <button onClick={()=>removeItem(i)} className={Style.btn}>Удалить</button>
            </div>))
    } 
   
        </div>
        <div className={Style.footer}>
            <span>Кол-во товара {cart.length}</span> <span>Общая стоимость:{sum}</span>
           </div>
</div></>
  )
}

export default ModalCart