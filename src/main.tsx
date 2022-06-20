import React from 'react'
import ReactDOM from 'react-dom/client'
import Sidebar from "./Components/sidebar"
import "./style.css"


ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<div className='container mx-auto flex flex-row'>
			<Sidebar />
		</div>
	</React.StrictMode>
)
