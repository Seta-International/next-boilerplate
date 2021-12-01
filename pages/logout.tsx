import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT, selectAuth } from 'redux/auth/authSlice';

function Logout() {
  const dispatch = useDispatch();
  const authState = useSelector(selectAuth);
  const router = useRouter();
  const { isAuth, loading } = authState;

  useEffect(() => {
    //eslint-disable-next-line
    let timer: ReturnType<typeof setTimeout>;
    if (!loading) {
      if (!isAuth) {
        timer = setTimeout(() => {
          router.push('/login');
        }, 3000);
      } else {
        timer = setTimeout(() => {
          dispatch(LOGOUT());
          router.push('/');
        }, 3000);
      }
    }
    return () => {
      clearTimeout(timer);
    };
  });

  if (loading) {
    return <h1>Application is loading</h1>;
  }

  if (!loading && !isAuth) {
    return <h2>You are not login! Redirect to login in 3 seconds</h2>;
  }

  return <h2>You are logout! Redirect to home page in 3 seconds</h2>;
}

export default Logout;
