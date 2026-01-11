import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../slices/counterSlice';

function Counter() {
    const count = useSelector(state => state.counter.value);

    const dispatch = useDispatch();

    return (<div className="counter-container">
        <div className="counter-box">
            <div className="counter-text">
                <h1>Value: </h1>
                <div className="counter-display">
                    <span className="counter-value">{count}</span>
                </div>
            </div>

            <div className="button-group">
                <button
                    className="btn btn-increase"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <button
                    className="btn btn-decrease"
                    onClick={() => dispatch(decrement())}
                >
                    −
                </button>
            </div>
        </div>
    </div>);
}

export default Counter;