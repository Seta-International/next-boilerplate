import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { START_CLOCK } from 'redux/counters/counterSlice'
import Page from '../components/Page'
import { startClock } from '../redux/counters/actions'
import { loadData } from '../redux/users/actions'


const Other = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(START_CLOCK())
        // dispatch(loadData())
    }, [dispatch])

    return <Page title="Other Page" linkTo="/" NavigateTo="Index Page" />
}

export default Other