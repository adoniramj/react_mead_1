import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

const App = (props) => {
  const [count, setCount] = useState(props.count)

  return (
    <div>
      <p>The current count is {count}</p>
      <button onClick={() => setCount(count + 1)}>plus one</button>
      <button onClick={() => setCount(count - 1)}>minus one</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  )
}

ReactDOM.render(
  <App count={1}/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
