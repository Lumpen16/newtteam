import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
const anchors : NodeListOf<Element> = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors as any) {
    anchor.addEventListener('click', function (e: any) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
