import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './BookList';

//we are mounting our BookList component defined in BookList.js to root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
