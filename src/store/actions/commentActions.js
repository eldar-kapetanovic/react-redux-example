import ApiCalls from "../../services/apiCalls";
import APPLICATION_ACTION_TYPES from "../actionTypes/applicationActionTypes";
import COMMENT_ACTION_TYPES from "../actionTypes/commentActionTypes";

export const addComment = (dispatch, postId, commentIndex, commentData) => {
    const apiCalls = new ApiCalls();

    dispatch({
        type: APPLICATION_ACTION_TYPES.ADD_API_CALL_STATUS,
        data: { callerId: `SaveComment${commentIndex}`, isComponent: false },
    });
    apiCalls.apiAddComment(postId, commentData)
        .then((commentResponse) => {
            if (commentResponse.status === 200) {
                dispatch({
                    type: COMMENT_ACTION_TYPES.POST,
                    data: commentIndex,
                    error: null,
                });
            } else {
                dispatch({
                    type: COMMENT_ACTION_TYPES.ERROR,
                    data: null,
                    error: commentResponse.statusText,
                });
            }
        })
        .catch((error) => {
            dispatch({
                type: COMMENT_ACTION_TYPES.ERROR,
                data: null,
                error: error.message,
            });
        })
        .finally(() => {
            dispatch({
                type: APPLICATION_ACTION_TYPES.REMOVE_API_CALL_STATUS,
                data: `SaveComment${commentIndex}`,
            });
        });
};

export const patchComment = (dispatch, postId, commentId, commentData) => {
    const apiCalls = new ApiCalls();

    dispatch({
        type: APPLICATION_ACTION_TYPES.ADD_API_CALL_STATUS,
        data: { callerId: `SaveComment${commentId}`, isComponent: false },
    });
    apiCalls.apiPatchComment(postId, commentId, commentData)
        .then((commentResponse) => {
            if (commentResponse.status === 200) {
                dispatch({
                    type: COMMENT_ACTION_TYPES.PATCH,
                    data: commentId,
                    error: null,
                });
            } else {
                dispatch({
                    type: COMMENT_ACTION_TYPES.ERROR,
                    data:null,
                    error: commentResponse.statusText,
                });
            }
        })
        .catch((error) => {
            dispatch({
                type: COMMENT_ACTION_TYPES.ERROR,
                data: null,
                error: error.message,
            });
        })
        .finally(() => {
            dispatch({
                type: APPLICATION_ACTION_TYPES.REMOVE_API_CALL_STATUS,
                data: `SaveComment${commentId}`,
            });
        });
};

export const deleteComment = (dispatch, postId, commentId) => {
    const apiCalls = new ApiCalls();

    dispatch({
        type: APPLICATION_ACTION_TYPES.ADD_API_CALL_STATUS,
        data: { callerId: `DeleteComment${commentId}`, isComponent: false },
    });
    apiCalls.apiDeleteComment(postId, commentId)
        .then((commentResponse) => {
            if (commentResponse.status === 200) {
                dispatch({
                    type: COMMENT_ACTION_TYPES.DELETE,
                    data: commentId,
                    error: null,
                });
            } else {
                dispatch({
                    type: COMMENT_ACTION_TYPES.ERROR,
                    data: null,
                    error: commentResponse.statusText,
                });
            }
        })
        .catch((error) => {
            dispatch({
                type: COMMENT_ACTION_TYPES.ERROR,
                data: null,
                error: error.message,
            });
        })
        .finally(() => {
            dispatch({
                type: APPLICATION_ACTION_TYPES.REMOVE_API_CALL_STATUS,
                data: `DeleteComment${commentId}`,
            });
        });
};

export const clearComment = (dispatch) => {
    dispatch({
        type: COMMENT_ACTION_TYPES.CLEAR,
    });
};
