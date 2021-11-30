import { Button } from '@mui/material';
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
            <Button variant="contained" onClick={() => dispatch(INCREMENT())}>
                +1
            </Button>
            <Button variant="contained" onClick={() => dispatch(DECREMENT())}>
                -1
            </Button>
            <Button
                variant="contained"
                color="error"
                onClick={() => dispatch(RESET())}
            >
                Reset
            </Button>
        </div>
    );
};

export default Counter;
