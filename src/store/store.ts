import { configureStore } from '@reduxjs/toolkit'
import itemsSlice from './slice/items/items'

import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import  cartSlice  from './slice/cart/cart'

export const store = configureStore({
    reducer: {
        items: itemsSlice,
        cart:cartSlice
    },
})

type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector