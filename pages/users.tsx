import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { START_CLOCK } from 'redux/counters/counterSlice';
import { LOAD_DATA } from 'redux/users/userSlice';
import Page from '../components/Page';

const Other = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(START_CLOCK());
    dispatch(LOAD_DATA());
  }, [dispatch]);

  return <Page title="Other Page" linkTo="/" NavigateTo="Index Page" />;
};

export default Other;
