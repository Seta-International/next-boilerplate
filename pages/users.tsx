import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Page from '../components/Page'
import { startClock } from '../redux/counters/actions'
import { loadData } from '../redux/users/actions'


const Other = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startClock())
        dispatch(loadData())
    }, [dispatch])

    return <Page title="Other Page" linkTo="/" NavigateTo="Index Page" />
}

export default Other