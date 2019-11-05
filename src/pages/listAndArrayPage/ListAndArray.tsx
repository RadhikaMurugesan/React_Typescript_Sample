import React, { FunctionComponent } from 'react';
import { ListInterface } from '../../models/ListInterface';
import { listenerCount } from 'cluster';
import './styles.css';


interface Props {
    data: ListInterface[];
}
export const ListAndArray: FunctionComponent<Props> = ({
    data
}) => (
        <div className = "mainDiv">
            <h3>List and array</h3>
            <table className='table'>
                <tbody>
                    {
                        data.map((listItem) =>{
                            const {id, title, content}=listItem
                            return (
                            <tr key={id}>
                            <td>{id}</td>
                            <td>{title}</td>
                            <td>{content}</td>
                            
                        </tr>
                            )
                        }
                        )
                    }


                </tbody>
            </table>

        </div>
    );



