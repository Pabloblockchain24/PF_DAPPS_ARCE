import { AuthStack } from './AuthStack'
import {TabNavigator} from './TabNavigator'
import { useSelector, useDispatch } from 'react-redux'
import { useGetProfileImageQuery } from '../services/shopService'
import {setUserPhoto, setUser} from '../features/authSlice'
import { useEffect } from 'react'
import {fetchSession} from '../db/index'
export const MainNavigator = () => {
    const { localId } = useSelector(state => state.auth.value.user)
    const { data } = useGetProfileImageQuery(localId)

    const dispatch = useDispatch()

    useEffect(() => {
        const getSession = async () => {
          const session = await fetchSession()
          if (session) dispatch(setUser(session))
        }
        getSession()
      }, [])

    useEffect(() => {
        if(data){
            dispatch(setUserPhoto(data.image))
        }
      }, [data])


    return (
            localId ? <TabNavigator /> : <AuthStack />
    )
}