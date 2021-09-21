import { updateObject } from "../../helpers/utility";
import POST_ACTION_TYPES from "../actionTypes/postActionTypes";

const initialState = {
    data: null,
    action: POST_ACTION_TYPES.CLEAR,
    error: null,
};

const updatePostData = (postData, newData) => {
    const postDataClone = JSON.parse(JSON.stringify(postData));
    const newDataClone = JSON.parse(JSON.stringify(newData));

    return { ...postDataClone, ...newDataClone };
};

const post = (state = initialState, action) => {
    switch (action.type) {
        case POST_ACTION_TYPES.GET: 
            return updateObject(
                state,
                {
                    data: action.data,
                    action: POST_ACTION_TYPES.GET,
                    error: null,
                }
            );
        case POST_ACTION_TYPES.POST:
            return updateObject(
                state,
                {
                    data: action.data,
                    action: POST_ACTION_TYPES.POST,
                    error: null,
                }
            );
        case POST_ACTION_TYPES.PATCH:
            return updateObject(
                state,
                {
                    data: updatePostData(state.data, action.data),
                    action: POST_ACTION_TYPES.PATCH,
                    error: null,
                }
            );
        case POST_ACTION_TYPES.DELETE:
            return updateObject(
                state,
                {
                    data: null,
                    action: POST_ACTION_TYPES.DELETE,
                    error: null,
                }
            );
        case POST_ACTION_TYPES.CLEAR:
            return updateObject(
                state,
                {
                    data: null,
                    action: POST_ACTION_TYPES.CLEAR,
                    error: null,
                }
            );
        case POST_ACTION_TYPES.ERROR:
            return updateObject(
                state,
                {
                    data: null,
                    action: POST_ACTION_TYPES.ERROR,
                    error: {
                        error: action.error,
                    },
                }
            );
        default:
            return state;
    }
};

export default post;
