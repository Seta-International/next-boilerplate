import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN, selectAuth, SET_REDIRECT } from 'redux/auth/authSlice';

function Login() {
  const dispatch = useDispatch();
  const authState = useSelector(selectAuth);
  const router = useRouter();
  const { isAuth, loading, user, fromPath } = authState;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    dispatch(LOGIN({ name: 'uzumakiHintna' }));
  };

  useEffect(() => {
    console.log('in useffect');
    if (!loading) {
      if (isAuth) {
        if (fromPath) {
          dispatch(SET_REDIRECT({ fromPath: '' }));
          router.push(fromPath);
        }
        router.push('/');
      }
    }
    //eslint-disable-next-line
  }, [isAuth, user, loading, router, fromPath]);

  if (loading) {
    return <h1>Application is loading</h1>;
  }

  return (
    <>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <input type="submit" required value="Submit" />
      </form>
    </>
  );
}
export default Login;
