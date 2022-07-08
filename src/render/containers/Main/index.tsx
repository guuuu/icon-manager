import Container from '@/render/Components/container'
import Sidebar from '@/render/Components/sidebar'

const Main = () => {
    return(
        <>
            <div className='container bg-main_bg mx-auto flex flex-row scroll-smooth'>
                <Sidebar />
                <Container />
            </div>
        </>
    )
}

export default Main;