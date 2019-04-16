import {SET_SELECTED_ROW_DATA} from '../constants'

export function setSelectedRowData(data) {
    return {
        type: SET_SELECTED_ROW_DATA,
        payload: {data},
    }
}