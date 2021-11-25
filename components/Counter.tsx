import { useSelector, useDispatch } from 'react-redux';
import {
    DECREMENT,
    INCREMENT,
    RESET,
    selectCount,
} from 'redux/counters/counterSlice';

import { increment, decrement, reset } from '../redux/counters/actions';

const Counter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <div>
            <style jsx>{`
                div {
                    padding: 0 0 20px 0;
                }
            `}</style>
            <h1>
                Count: <span>{count}</span>
            </h1>
            <button onClick={() => dispatch(INCREMENT())}>+1</button>
            <button onClick={() => dispatch(DECREMENT())}>-1</button>
            <button onClick={() => dispatch(RESET())}>Reset</button>
        </div>
    );
};

export default Counter;
