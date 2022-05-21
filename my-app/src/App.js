import React, { useState, useEffect } from 'react';

function App(props) {


    const [loading, setLoading] = useState(false);

    useEffect (() => {
        console.log("Salom dunyo");
    }, [])
    
    return (
        <div className="App">
            {/* 
            <button onClick={() => setCount(count + 1)} className="start">Incr</button>
            <button onClick={() => setCount(count - 1)} className="stop">Decr</button> */}
            <button className="btn">Toggle React</button>
        </div>
    );
}

export default App;