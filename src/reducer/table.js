import {SET_SELECTED_ROW_DATA,} from '../constants';

const defaultState = {
    selectedRowData: {},
}

export default (state = defaultState, action) => {
    const {type, payload} = action;
    switch (type){
        case SET_SELECTED_ROW_DATA:
            return {
                ...state,
                selectedRowData: payload.data,
            }
    }

    return state;
}