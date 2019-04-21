import {ADD_ITEM_ID_TO_TREE_DATA_LIST} from '../constants';

const defaultState = {
    selectedItemsId: [],
}

export default (state = defaultState, action) => {
    const {type, payload} = action;
    
    switch (type){
        case ADD_ITEM_ID_TO_TREE_DATA_LIST:
        console.log(payload);
        console.log([...state.selectedItemsId]);
            return {
                ...state,
                selectedItemsId: [...state.selectedItemsId, payload.data],
            }
    }
    return state;
}