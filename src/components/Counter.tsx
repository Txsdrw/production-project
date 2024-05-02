import {useState} from "react";
import './Counter.sass'

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter+1)}>plus</button>
        </div>
    );
};
