import { FC } from 'react'
import { Iitem, setCurrnetItem } from '../../store/slice/items/items'
import Style from './itemCard.module.scss'
import { useAppDispatch } from '../../store/store'

export const ItemCard: FC<Iitem> = ({name,cost,description,img}:Iitem)=> {

  const dispatch =useAppDispatch()
 
  const OpenModalItem=()=>{
    dispatch(setCurrnetItem({name,cost,description,img}))
  }
  return (
    <div onClick={()=>OpenModalItem()} title={name} className={Style.item}>
        <img  src={img} alt="img" className={Style.img } />
        <h4 className={Style.title}>{name}</h4>
        <h2 className={Style.cost}> Цена:{cost}</h2>
        <p  className={Style.description}>{description}</p>
    </div>
  )
}
