import * as React from 'react';
import Content from './content';
import Searchbar from './searchbar';

export default class Container extends React.Component {
  public render() {
    return (
      <div className='flex flex-col w-3/4 h-screen items-center'>
        <Searchbar keywords = "yo yo"/>
        <Content />
      </div>
    );
  }
}
