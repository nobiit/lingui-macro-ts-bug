import * as ReactDOM from 'react-dom';
import { i18n } from '@lingui/core';
import * as React from 'react';
import App from './App';

i18n.load('vi', {
  Hello: 'Xin Chào !'
});
i18n.activate('vi');

const rootElement = document.getElementById('root');

ReactDOM.render(<App/>, rootElement);
