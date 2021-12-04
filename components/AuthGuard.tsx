import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth, SET_REDIRECT } from 'redux/auth/authSlice';
import type { ReactElement } from 'react';

interface IPage {
  children: ReactElement;
}

const AuthGuard = ({ children }: IPage) => {
  const dispatch = useDispatch();
  const authState = useSelector(selectAuth);
  const router = useRouter();
  const { isAuth, loading, user } = authState;
  useEffect(() => {
    if (!loading) {
      if (!isAuth) {
        dispatch(SET_REDIRECT({ fromPath: router.route }));
        router.push('/login');
      }
    }
    //eslint-disable-next-line
  }, [isAuth, loading, dispatch]);

  // show loading indicator while the auth store is still init
  if (loading) {
    return <h1>Application is loading</h1>;
  }

  // if auth
  if (!loading && isAuth) {
    return (
      <>
        <h1>Username: {JSON.stringify(user)}</h1>
        {children}
      </>
    );
  }

  // other
  return null;
};

export default AuthGuard;
