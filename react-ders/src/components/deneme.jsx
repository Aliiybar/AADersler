import React, { useState } from "react";
export default function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    let count2 = 5;
    console.log('aaa')
    return (

        < div >
            <p>You clicked {count} times  </p>
            <button onClick={() => setCount(count + 1)}>
                Click me
        </button>
            <button onClick={() => setCount1(count1 + 1)}>
                Click me
        </button>
            <button onClick={() => { count2++ }}>
                Click me {count2}
            </button>
        </div >
    );
}
