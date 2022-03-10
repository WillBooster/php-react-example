import React from 'react';
import ReactDOM from 'react-dom';

const Button = () => {
  return <button onClick={() => window.alert('Liked')}>Like</button>;
};

const containers = document.querySelectorAll('.like_button_container');
for (const container of containers.values()) {
  ReactDOM.render(<Button />, container);
}
