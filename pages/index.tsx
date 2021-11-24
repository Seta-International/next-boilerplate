import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startClock } from '../redux/counters/actions'
import Page from '../components/Page'

const Index = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startClock())
  }, [dispatch])

  return <Page title="Index Page" linkTo="/users" NavigateTo="User Page" />
}


export default Index