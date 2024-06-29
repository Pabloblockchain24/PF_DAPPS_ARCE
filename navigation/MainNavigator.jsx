import { AuthStack } from './AuthStack'
import {TabNavigator} from './TabNavigator'
import { useSelector, useDispatch } from 'react-redux'
import { useGetProfileImageQuery } from '../services/shopService'
import {setUserPhoto} from '../features/authSlice'
import { useEffect } from 'react'
export const MainNavigator = () => {
    const { localId } = useSelector(state => state.auth.value.user)
    const { data } = useGetProfileImageQuery(localId)

    const dispatch = useDispatch()
    useEffect(() => {
        if(data){
            dispatch(setUserPhoto(data.image))
        }
      }, [data])


    return (
            localId ? <TabNavigator /> : <AuthStack />
    )
}