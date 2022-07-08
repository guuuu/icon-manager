import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import * as React from 'react';

export const enum apply_to {
    File,
    Folder,
    Both
}

interface icon {
    icon: string,
    applied_to?: apply_to,
    name: string,
    parent_name: string,
    cs?: boolean | undefined,
    action?: boolean
}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export type Icon = icon;

const Icon: React.FC<icon> = ({icon, applied_to, name, parent_name, cs, action}) => {
    return(
        <>
            <div className="w-full h-15 flex flex-row items-center my-3 text-white hover:bg-hover hover:cursor-pointer">
                <div className="h-11 w-1/12 rounded-full hover:cursor-pointer hover:bg-dark_hover z-10 flex flex-row justify-center items-center">
                    <img src={icon} alt={name} className='rounded-full w-8 h-8' />
                </div>
                <div className="flex flex-col w-2/12">
                    <div className="relative">
                        <span className="text-lg pl-16">File</span>
                        <Checkbox
                            {...label}
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                            }}
                        />
                    </div>
                    <div className="relative">
                        <span className="text-lg pl-11">Folder</span>
                        <Checkbox
                            {...label}
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                            }}
                        />
                    </div>
                </div>
                <span className="w-3/12 text-center truncate px-3">{ name }</span>
                <span className="w-3/12 text-center truncate px-3 ">{ parent_name }</span>
                <span className="w-1/12 flex align-middle justify-center">
                <Checkbox
                    {...label}
                    sx={{
                        color: pink[800],
                        '&.Mui-checked': {
                            color: pink[600],
                        },
                    }}
                />
                </span>
                <div className='flex flex-row w-2/12 justify-center'>
                    <div className="h-9 w-9 rounded-full flex justify-center items-center hover:bg-dark_hover">
                        <img src="/assets/images/delete.png" alt="Delete" className="w-6 h-6 hover:cursor-pointer" />
                    </div>
                    <div className="h-9 w-9 rounded-full flex justify-center items-center hover:bg-dark_hover">
                        <img src="/assets/images/delete.png" alt="Delete" className="w-6 h-6 hover:cursor-pointer" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Icon;