import React from 'react'
import App  from "./render/app"
import ReactDOM from 'react-dom/client'
import "./render/style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)