import React, {useState} from 'react';

function Counter(props) {
    const initialCount = props.ic * 1;

    const [count, setCount] = useState(initialCount);
    return (
      <div>
        Count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      </div>
    );
  }

export default Counter;
