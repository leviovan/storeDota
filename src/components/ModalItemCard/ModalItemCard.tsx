
import { useState } from 'react';
import { addItemIncard } from '../../store/slice/cart/cart';
import { resetCurrnetItem } from '../../store/slice/items/items';
import { useAppDispatch, useAppSelector } from '../../store/store'
import Button from '../Button/Button';
import Notification from '../notification/Notification';
import Style from './ModalItemCard.module.scss'
import classnames from 'classnames';
function ModalItemCard() {

  const [complited, setComplited] = useState(false)
    const {name,cost,description,img}=useAppSelector((state)=> state.items.currentItems)
    const showItem=useAppSelector((state)=> state.items.modalcard)
    const dispatch= useAppDispatch()

  const closeModal=()=>{
    dispatch(resetCurrnetItem());
  }
  const addItemsInCart=(name: string,cost: string,description: string,img: string)=>{
    dispatch(addItemIncard({name,cost,description,img}))
    setComplited(true)
    setTimeout(()=>setComplited(false),2000)
  }
  return ( <>
    {complited && <Notification text="Добавлено в корзину" bc='#f37e7e'/>}
    <div onClick={()=>closeModal()} className={classnames(Style.bgmodal , showItem && Style.showModal)}></div>  
    <div className={classnames(Style.body, showItem && Style.showModal )}>
        <div className={Style.header}>
           <div></div><h4 className={Style.title}>{name} </h4>  <div onClick={()=>closeModal()} className={Style.close}></div>
           </div>
        <div className={Style.img_container}>
            <img  src={img} alt="img" className={Style.img } />
        </div>
        <div className={Style.description_container}>
            <h3 className={Style.description__title}>Описание</h3>
            <p  className={Style.description}> <i>{description}</i></p>
            <h2 className={Style.cost}> Цена: <i>{cost}</i></h2> <Button bc='#f37e7e' text='Добавить в корзину' OnClick={()=>{
              addItemsInCart(name,cost,description,img)}}  /> 
        </div>
            
</div></>
  )
}

export default ModalItemCard