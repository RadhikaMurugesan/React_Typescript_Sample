import React, { Component } from 'react';
import AxiosGet from '../../components/axiosGet';
import AxiosPost from '../../components/axiosPost';
import AxiosDelete from '../../components/axiosDelete';
import AxiosAll from '../../components/axiosAll';
import AxiosPut from '../../components/axiosPut';
import AxiosHead from '../../components/axiosHead';
import AxiosErrorHandling from '../../components/axiosErrorHandling';
import AxiosPatch from '../../components/axiosPatch';

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
            <AxiosPut/>           
            <AxiosHead/>            
            <AxiosErrorHandling/>
            <AxiosPatch/>
        </div>
        
    );

}  
