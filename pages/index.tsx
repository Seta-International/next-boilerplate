import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Page from '../components/Page';
import { START_CLOCK } from 'redux/counters/counterSlice';

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(START_CLOCK());
  }, [dispatch]);

  return <Page title="Index Page" linkTo="/users" NavigateTo="User Page" />;
};

export default Index;
