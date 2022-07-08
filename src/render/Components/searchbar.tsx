import * as React from 'react';

interface search {
    keywords: string
}

const Searchbar: React.FC<search> = ({ keywords }) => {
    return(
        <>
            <input type="text" placeholder='Search for folder or files...' className='w-9/12 h-10 rounded-3xl bg-sidebar_bg p-3 mt-9 ml-2 text-white focus:outline-none hover:bg-hover' />
        </>
    )
}

export default Searchbar