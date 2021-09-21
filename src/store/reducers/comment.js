import { updateObject } from "../../helpers/utility";
import COMMENT_ACTION_TYPES from "../actionTypes/commentActionTypes";

const initialState = {
    commentId: null,
    action: COMMENT_ACTION_TYPES.CLEAR,
    error: null,
};

const comment = (state = initialState, action) => {
    switch (action.type) {
        case COMMENT_ACTION_TYPES.GET: 
            return updateObject(
                state,
                {
                    commentId: action.data,
                    action: COMMENT_ACTION_TYPES.GET,
                    error: null,
                }
            );
        case COMMENT_ACTION_TYPES.POST:
            return updateObject(
                state,
                {
                    commentId: action.data,
                    action: COMMENT_ACTION_TYPES.POST,
                    error: null,
                }
            );
        case COMMENT_ACTION_TYPES.PATCH:
            return updateObject(
                state,
                {
                    commentId: action.data,
                    action: COMMENT_ACTION_TYPES.PATCH,
                    error: null,
                }
            );
        case COMMENT_ACTION_TYPES.DELETE:
            return updateObject(
                state,
                {
                    commentId: null,
                    action: COMMENT_ACTION_TYPES.DELETE,
                    error: null,
                }
            );
        case COMMENT_ACTION_TYPES.CLEAR:
            return updateObject(
                state,
                {
                    commentId: null,
                    action: COMMENT_ACTION_TYPES.CLEAR,
                    error: null,
                }
            );
        case COMMENT_ACTION_TYPES.ERROR:
            return updateObject(
                state,
                {
                    commentId: null,
                    action: COMMENT_ACTION_TYPES.ERROR,
                    error: {
                        error: action.error,
                    },
                }
            );
        default:
            return state;
    }
};

export default comment;
