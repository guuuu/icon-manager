import React from 'react'
import ReactDOM from 'react-dom/client'
import Sidebar from "./Components/sidebar"
import Container from './Components/container'
import "./style.css"

//TODO criar as tooltips do tailwind nos titulos (icon, apply to, with the name...) e colocar legenda no hover da imagem com o nome do ficheiro

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<div className='container bg-main_bg mx-auto flex flex-row scroll-smooth'>
			<Sidebar />
			<Container />
		</div>
	</React.StrictMode>
)
