import React, { Component } from 'react';
import AxiosGet from '../../components/axiosGet';
import AxiosPost from '../../components/axiosPost';
import AxiosDelete from '../../components/axiosDelete';
import AxiosAll from '../../components/axiosAll';

export default function AxiosSample() {

    return (
        <div>
            <AxiosGet />
            <br/>
            <AxiosPost />
            <br/>
            <AxiosDelete />
            <br/>
            <AxiosAll/>
        </div>
        
    );

}  
