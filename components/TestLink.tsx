import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/authSlice';

function TestLink() {
  const authState = useSelector(selectAuth);
  const { isAuth } = authState;
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home page</a>
          </Link>
        </li>
        {!isAuth ? (
          <li>
            <Link href="/login">
              <a>Sign in</a>
            </Link>
          </li>
        ) : null}
        {isAuth ? (
          <li>
            <Link href="/logout">
              <a>Sign out</a>
            </Link>
          </li>
        ) : null}
        <li>
          <Link href="/protected-csr">
            <a>Protected Page</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default TestLink;
