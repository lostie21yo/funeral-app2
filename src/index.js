import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// script.onload = () => {
//     config['webglContextAttributes'] = {"preserveDrawingBuffer": true}; // Add this line to the index file in a WebGL Template
//     createUnityInstance(canvas, config, (progress) => )}

root.render(
    <App />
);