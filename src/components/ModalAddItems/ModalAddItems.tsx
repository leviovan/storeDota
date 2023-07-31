
import { useState } from "react";
import Style from "./ModalAddItems.module.scss";
import classNames from "classnames";
import Button from "../Button/Button";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { addNewItem, toogleModalAddItem } from "../../store/slice/items/items";
import Notification from "../notification/Notification";
const ModalAddItems = () => {
    const [title, setTitle] = useState("")
    const [imgLink, setimgLink] = useState("")
    const [cost, setCost] = useState("")
    const [desc, setDesc] = useState("")
    const [complited, setComplited] = useState(false)
    const dispatch= useAppDispatch();
    const show= useAppSelector((state)=>state.items.modalAddCard)

    const addItem=(name: string,img: string,cost: string,description: string)=>{
        dispatch(addNewItem({name,img,cost,description}))
        setComplited(true)
        setTimeout(()=>setComplited(false),2000)
    }
    const close=()=>{
        dispatch(toogleModalAddItem())
        setTitle("")
        setimgLink("")
        setCost("")
        setDesc("")
    }
   
  return (<>
        { complited && <Notification text='Товар добавлен в корзину'  bc="rgb(7, 31, 99)"/>}
    <div className={classNames(Style.bgmodal,show && Style.showModal)} onClick={()=>close()}></div>   
    <div className={classNames(Style.body,show && Style.showModal)}>
        <div className={Style.header}>
           <div></div><h4 className={Style.title}>Добавить Элемент</h4>  <div onClick={()=>close()} className={Style.close}></div>
        </div>
        <div className={Style.img_container}>
            <img className={Style.img} src={imgLink} alt="" />
        </div>
        <div className={Style.description_container}>
            <h4>Название Товара:</h4>
            <input  className={classNames(Style.title , Style.input)} value={title} onChange={(e)=>setTitle(e.currentTarget.value)}/>
            <h4>Ссылка на изображение:</h4>
            <input className={classNames(Style.img, Style.input)} value={imgLink} onChange={(e)=>setimgLink(e.currentTarget.value)}/>
            <h4>Стоимость Товара:</h4>
            <input className={classNames(Style.cost, Style.input)} value={cost} onChange={(e)=>setCost(e.currentTarget.value)}/> 
            <h4>Описание Товара:</h4>
            <textarea  className={classNames(Style.description, Style.input)} value={desc} onChange={(e)=>setDesc(e.currentTarget.value)}/>

            <Button text="Добавить товар" bc="#071f63" OnClick={()=>addItem(title,imgLink,cost,desc)} />
        </div>   
</div></>
  )
}

export default ModalAddItems