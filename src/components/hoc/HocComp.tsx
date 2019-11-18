import React, {Component} from 'react';
import {NameListInterface} from '../../models/NameListInterface';

interface State {
    data: Array<NameListInterface>
}
export default function Hoc(HocComponent:any, data:any){
    return class extends Component<State>{
       
            state:State = {
                data: data
            };
        
        
        render(){
            return (
                <HocComponent data={this.state.data} {...this.props} />
            );
        }
    } 
}