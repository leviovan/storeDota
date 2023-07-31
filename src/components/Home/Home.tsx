import { useEffect } from 'react';
import { fetchitem } from '../../store/slice/items/items';
import { useAppDispatch, useAppSelector } from '../../store/store';
import Style from './Home.module.scss';
import TopSideButtons from './TopSideButtons/TopSideButtons';
import { ItemCard } from '../itemCard/itemCard';
import ModalItemCard from '../ModalItemCard/ModalItemCard';
import ModalAddItems from '../ModalAddItems/ModalAddItems';
import ModalCart from '../ModalCart/ModalCart';

export const  Home=()=> {

  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.items.items)

  useEffect(() => {
    (async () => {
      await dispatch(fetchitem());
    })()
  }, [])

  return (<>
   <ModalCart/>
    <ModalAddItems/>
    <div className={Style.home}>
      <ModalItemCard/>
      <TopSideButtons/>
      <div className={Style.items}>
        {state.map((item) => (
          <ItemCard  {...item} />
        ))}
      </div>

    </div>
    </>
  )
}

export default Home