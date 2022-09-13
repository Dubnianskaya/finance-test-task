import React from 'react';
import ReactDOM from 'react-dom';
import AppWithWrappers from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppWithWrappers />, div);
  ReactDOM.unmountComponentAtNode(div);
})
