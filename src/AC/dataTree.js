import { ADD_ITEM_ID_TO_TREE_DATA_LIST } from '../constants';

export function addItemIdToTreeDataList(data) {
    return {
        type: ADD_ITEM_ID_TO_TREE_DATA_LIST,
        payload: {data},
    }
}

