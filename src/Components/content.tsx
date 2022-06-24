import * as React from 'react';
import './searchbar'
import Icon from './icon'

const Content = () => {
    return(
        <>
            <div className="w-full h-12 text-white text-xl text-center mt-6 flex flex-row justify-center items-center">
                <span className="px-3 w-1/12 my-3 mx-1 hover:cursor-pointer">Icon</span>
                <span className="px-3 w-2/12 my-3 mx-1 hover:cursor-pointer">Apply to</span>
                <span className="px-3 w-3/12 my-3 mx-1 hover:cursor-pointer">With the name</span>
                <span className="px-3 w-3/12 my-3 mx-1 hover:cursor-pointer">Only if parent is</span>
                <span className="px-3 w-1/12 my-3 mx-1 hover:cursor-pointer">CS?</span>
                <span className="px-3 w-2/12 my-3 mx-1 hover:cursor-pointer">Actions</span>
            </div>
            <div className="w-full h-full flex flex-col mt-4 overflow-y-auto">
                <Icon icon="src/assets/icons/default/py.png" name="Python" parent_name="" cs={ false } />
                <Icon icon="src/assets/icons/default/svelte.svg" name="Svelte" parent_name="" cs={ true } />
                <Icon icon="src/assets/icons/default/c.svg" name="C" parent_name="" cs={ true } />
                <Icon icon="src/assets/icons/default/typescript.svg" name="TypeScript" parent_name="" cs={ true } />
                <Icon icon="src/assets/icons/default/angular.svg" name="angular" parent_name="" cs={ true } />
                <Icon icon="src/assets/icons/default/assembly.svg" name="assembly" parent_name="" cs={ true } />
                <Icon icon="src/assets/icons/default/bower.svg" name="bower" parent_name="" cs={ true } />
                <Icon icon="src/assets/icons/default/coconut.svg" name="coconut" parent_name="" cs={ true } />
                <Icon icon="src/assets/icons/default/nodejs.svg" name="nodejs" parent_name="" cs={ true } />
                <Icon icon="src/assets/icons/default/xml.svg" name="xml" parent_name="" cs={ true } />
                <Icon icon="src/assets/icons/default/zip.svg" name="zip" parent_name="" cs={ true } />
                <Icon icon="src/assets/icons/default/vim.svg" name="vim" parent_name="" cs={ true } />
                <Icon icon="src/assets/icons/default/teal.svg" name="teal" parent_name="" cs={ true } />
            </div>
        </>
    )
}

export default Content