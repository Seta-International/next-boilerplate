import Link from 'next/link';
import { useSelector } from 'react-redux';

import Counter from './Counter';
import Clock from './Clock';
import { ICounterState } from 'types/reducer';
import TestLink from './TestLink';

function Page({
  linkTo,
  NavigateTo,
  title,
}: {
  linkTo: string;
  NavigateTo: string;
  title: string;
}) {
  const placeholderData = useSelector(
    (state: ICounterState) => state.counter.placeholderData
  );
  const error = useSelector((state: ICounterState) => state.counter.error);
  const light = useSelector((state: ICounterState) => state.counter.light);
  const lastUpdate = useSelector(
    (state: ICounterState) => state.counter.lastUpdate
  );
  return (
    <div>
      <TestLink />
      <h1>{title}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </div>
  );
}

export default Page;
