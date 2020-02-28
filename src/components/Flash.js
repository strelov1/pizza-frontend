import React from 'react';
import { Alert } from 'element-react';


import { useGlobalState } from '../GlabalStateProvider'

export const Flash = () => {
    const { flash } = useGlobalState();

    if (flash) {
        return flash.map((item) => {
            return <Alert title={item.title} type={item.type} showIcon={true} />
        })
    }

    return ""
    
}