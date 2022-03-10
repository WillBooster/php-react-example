import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const LikeButton = () => {
  const [count, setCount] = useState(0);

  return (
    <span>
      <button onClick={() => setCount((v) => v + 1)}>Like</button>
      {count}
    </span>
  );
};

for (const container of document
  .querySelectorAll('*[data-react-container="like_button_container"]')
  .values()) {
  ReactDOM.render(<LikeButton />, container);
}

const ArrayInput = () => {
  const [array, setArray] = useState(['']);

  return (
    <div>
      {array.map((arrayItem, i) => (
        <div key={i}>
          <input
            name={`input${i}`}
            value={arrayItem}
            onChange={(event) => {
              setArray((array) => {
                const newArray = [...array];
                newArray[i] = event.target.value;
                return newArray;
              });
            }}
          />
          <button
            disabled={i - 1 < 0}
            type="button"
            onClick={() => {
              setArray((array) => {
                const newArray = [...array];
                newArray[i - 1] = array[i];
                newArray[i] = array[i - 1];
                return newArray;
              });
            }}
          >
            ↑
          </button>
          <button
            disabled={i + 1 >= array.length}
            type="button"
            onClick={() => {
              setArray((array) => {
                const newArray = [...array];
                newArray[i] = array[i + 1];
                newArray[i + 1] = array[i];
                return newArray;
              });
            }}
          >
            ↓
          </button>
        </div>
      ))}
      <button type="button" onClick={() => setArray((v) => [...v, ''])}>
        Add
      </button>
    </div>
  );
};

for (const container of document
  .querySelectorAll('*[data-react-container="array_input_container"]')
  .values()) {
  ReactDOM.render(<ArrayInput />, container);
}
