import React, {Component} from 'react';
import {NameListInterface} from '../../models/NameListInterface';

interface ListProps {
    data: Array<NameListInterface>
}
export default function Hoc<T>(Component: React.ComponentType<T>)
{
    return (props: T) => (
        <>
       
        <div>
          <Component {...props} />
        </div>
        
      </>);
}