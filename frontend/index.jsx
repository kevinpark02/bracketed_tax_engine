import React from 'react';
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();

    // For testing purposes - start
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // For testing purposes - end

    ReactDOM.render(<Root store={store} />, root);
}); 