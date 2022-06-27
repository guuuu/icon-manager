import * as React from 'react';
import { ipcRenderer } from 'electron';

const QuitApp = (confirm: boolean) => {
    // ipcRenderer.send('close-me');
    console.log("yoyo");
}

const Sidebar = () => {
    return(
        <>
            <div className="bg-sidebar_bg h-full w-1/4 flex items-start flex-col z-10 text-white capitalize">
                <Header />
                <Button icon="/src/assets/icons/myicons.png" text="My icons" />
                <Button icon="/src/assets/icons/reset.png" text="Restore windows defaults" />
                <Button icon="/src/assets/icons/about.png" text="About" />
                <Button icon="/src/assets/icons/IE.png" text="Import / Export" />
                <Button icon="/src/assets/icons/settings.png" text="Settings" />
                <Button icon="/src/assets/icons/quit.png" text="Quit" onClick={
                    () => { QuitApp(false); }
                }/>
            </div>
        </>
    )
}

const Header = () => {
    return(
        <>
            <div className="w-full h-10 text-center text-4xl mb-2 text-white mt-4">Icon manager</div>
            <div className="w-full h-10 text-center text-sm mb-2 text-white">Give windows your own touch</div>
        </>
    )
}

interface BT {
    icon: string;
    text: string;
    action?: boolean;
    onClick?: () => void;
}

const Button: React.FC<BT> = ({icon, text, action, onClick}) => {
    return(
        <div className="w-full h-13 p-3 mb-1 flex flex-row items-start last:mt-64 hover:bg-dark_hover hover:cursor-pointer text-white" onClick={onClick}>
            <div className='w-1/6 h-full'>
                <img src={icon} alt="icon" className="w-6 h-6 ml-3 object-center object-cover" />
            </div>
            <div className="w-5/6 pl-3 text-left text-lg h-full">
                <span>{text}</span>
            </div>
        </div>
    )
}

export default Sidebar;
