import { combineReducers } from 'redux'
import localforage from 'localforage'

// Fetch Settings

const FETCH_SETTINGS_REQUEST = 'FETCH_SETTINGS_REQUEST'
const FETCH_SETTINGS_SUCCESS = 'FETCH_SETTINGS_SUCCESS'
const FETCH_SETTINGS_FAILURE = 'FETCH_SETTINGS_FAILURE'

let defaultSettings = {
    locale: 'au'
}

const settings = (state = [], action) => {
    switch (action.type) {

        case FETCH_SETTINGS_SUCCESS:

            localforage.setItem('settingsData', action.response )  
            return action.response  

        default: 
            return state
    }  
}

const reducer = combineReducers({
    settings
})

export const fetchSettings = () => dispatch => {

    dispatch({
        type: FETCH_SETTINGS_REQUEST
    })

    localforage.getItem('settingsData').then(function(data) {
        let settings = defaultSettings;
        if(data){
            console.log('settingsData',data);
            settings = data;
        }
        dispatch({
            type: FETCH_SETTINGS_SUCCESS,
            response: settings
        })
        
    })
}

export const updateSettings = (setting: Object) => dispatch => {

    console.log('updateSettings', setting)
    
    dispatch({
        type: FETCH_SETTINGS_REQUEST
    })

    defaultSettings = {
        ...defaultSettings,
        ...setting,
    }
    
    const newSettings = Object.assign({}, defaultSettings, setting)

    localforage.setItem('settingsData', newSettings)  

    dispatch({
        type: FETCH_SETTINGS_SUCCESS,
        response: newSettings
    })
}


export const getSettings = state => state.settings.settings

export default reducer

