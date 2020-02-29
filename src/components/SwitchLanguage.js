import React from 'react';
import { Switch } from 'element-react';

import { useGlobalState, useGlobalDispatch } from '../GlabalStateProvider'

export const SwitchLanguage = () => {

    const dispatch = useGlobalDispatch()
    const { currency } = useGlobalState();


    return (
        <Switch
            onChange={(event) => {
                dispatch({
                    type: 'switchCurrency',
                    currency: (currency === 'USD') ? 'EUR' : 'USD',
                })
            }}
            value={!(currency === 'EUR')}
            onColor="#13ce66"
            offColor="#20a0ff"
            onText="USD"
            offText="EUR">
        </Switch>
    )
}