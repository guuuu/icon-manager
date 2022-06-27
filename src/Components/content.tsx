import * as React from 'react';
import './searchbar'
import Icon from './icon'
import { Tooltip } from '@mui/material';

const Content = () => {
    return(
        <>
            <div className="w-full h-12 text-white text-xl text-center mt-6 flex flex-row justify-center items-center">
                <Tooltip title="This is the icon that'll be showed on your file explorer." arrow placement='top'>
                    <span className="px-3 w-1/12 my-3 mx-1 hover:cursor-pointer">Icon</span>
                </Tooltip>

                <Tooltip title="Choose where the icon should be applied, it can be on folders, files, or both." arrow placement='top'>
                    <span className="px-3 w-2/12 my-3 mx-1 hover:cursor-pointer">Apply to</span>
                </Tooltip>

                <Tooltip title="Apply the icon to the folder/file that has the name that you specified" arrow placement='top'>
                    <span className="px-3 w-3/12 my-3 mx-1 hover:cursor-pointer">With the name</span>
                </Tooltip>

                <Tooltip title="Only change the default windows icon if the parent of the folder/file you specified, has a specific name." arrow placement='top'>
                    <span className="px-3 w-3/12 my-3 mx-1 hover:cursor-pointer">Only if parent is</span>
                </Tooltip>

                <Tooltip title="Wether the names that you specified should be case sensitive when appying the icons." arrow placement='top'>
                    <span className="px-3 w-1/12 my-3 mx-1 hover:cursor-pointer">CS?</span>
                </Tooltip>

                <Tooltip title="Actions that you can take on this icon." arrow placement='top'>
                    <span className="px-3 w-2/12 my-3 mx-1 hover:cursor-pointer">Actions</span>
                </Tooltip>
            </div>
            <div className="w-full h-full flex flex-col mt-4 overflow-y-auto">
                <Icon icon="src/assets/icons/default/py.png" name="Python" parent_name="" cs />
                <Icon icon="src/assets/icons/default/svelte.svg" name="Svelte" parent_name="" cs />
                <Icon icon="src/assets/icons/default/c.svg" name="C" parent_name="" cs />
                <Icon icon="src/assets/icons/default/typescript.svg" name="TypeScript" parent_name="" cs />
                <Icon icon="src/assets/icons/default/angular.svg" name="angular" parent_name="" cs />
                <Icon icon="src/assets/icons/default/assembly.svg" name="assembly" parent_name="" cs />
                <Icon icon="src/assets/icons/default/bower.svg" name="bower" parent_name="" cs />
                <Icon icon="src/assets/icons/default/coconut.svg" name="coconut" parent_name="" cs />
                <Icon icon="src/assets/icons/default/nodejs.svg" name="nodejs" parent_name="" cs />
                <Icon icon="src/assets/icons/default/xml.svg" name="xml" parent_name="" cs />
                <Icon icon="src/assets/icons/default/zip.svg" name="zip" parent_name="" cs />
                <Icon icon="src/assets/icons/default/vim.svg" name="vim" parent_name="" cs />
                <Icon icon="src/assets/icons/default/teal.svg" name="teal" parent_name="" cs />
            </div>
        </>
    )
}

export default Content