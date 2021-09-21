import ApiCalls from "../../services/apiCalls";
import ResponseDataParser from "../../helpers/responseDataParser";
import APPLICATION_ACTION_TYPES from "../actionTypes/applicationActionTypes";
import POST_ACTION_TYPES from "../actionTypes/postActionTypes";

export const getPost = (dispatch, postId) => {
    const apiCalls = new ApiCalls();

    dispatch({
        type: APPLICATION_ACTION_TYPES.ADD_API_CALL_STATUS,
        data: { callerId: "GetPost", isComponent: true },
    });
    apiCalls.apiPost(postId)
        .then((postResponse) => {
            if (postResponse.status === 200) {
                dispatch({
                    type: POST_ACTION_TYPES.GET,
                    data: ResponseDataParser.getPostFromResponse(postResponse, postId),
                    error: null,
                });
            } else {
                dispatch({
                    type: POST_ACTION_TYPES.ERROR,
                    data: null,
                    error: postResponse.statusText,
                });
            }
        })
        .catch((error) => {
            dispatch({
                type: POST_ACTION_TYPES.ERROR,
                data: null,
                error: error.message,
            });
        })
        .finally(() => {
            dispatch({
                type: APPLICATION_ACTION_TYPES.REMOVE_API_CALL_STATUS,
                data: "GetPost",
            });
        });
};

export const addPost = (dispatch, postData) => {
    const apiCalls = new ApiCalls();

    dispatch({
        type: APPLICATION_ACTION_TYPES.ADD_API_CALL_STATUS,
        data: { callerId: "SavePost", isComponent: false },
    });
    apiCalls.apiAddPost(postData)
        .then((postResponse) => {
            if (postResponse.status === 200) {
                dispatch({
                    type: POST_ACTION_TYPES.POST,
                    data: { ... postData, id: postResponse.data.name },
                    error: null,
                });
            } else {
                dispatch({
                    type: POST_ACTION_TYPES.ERROR,
                    data: null,
                    error: postResponse.statusText,
                });
            }
        })
        .catch((error) => {
            dispatch({
                type: POST_ACTION_TYPES.ERROR,
                data: null,
                error: error.message,
            });
        })
        .finally(() => {
            dispatch({
                type: APPLICATION_ACTION_TYPES.REMOVE_API_CALL_STATUS,
                data: "SavePost",
            });
        });
};

export const patchPost = (dispatch, postId, postData) => {
    const apiCalls = new ApiCalls();

    dispatch({
        type: APPLICATION_ACTION_TYPES.ADD_API_CALL_STATUS,
        data: { callerId: "SavePost", isComponent: false },
    });
    apiCalls.apiPatchPost(postId, postData)
        .then((postResponse) => {
            if (postResponse.status === 200) {
                dispatch({
                    type: POST_ACTION_TYPES.PATCH,
                    data: { ... postData, id: postId },
                    error: null,
                });
            } else {
                dispatch({
                    type: POST_ACTION_TYPES.ERROR,
                    data:null,
                    error: postResponse.statusText,
                });
            }
        })
        .catch((error) => {
            dispatch({
                type: POST_ACTION_TYPES.ERROR,
                data: null,
                error: error.message,
            });
        })
        .finally(() => {
            dispatch({
                type: APPLICATION_ACTION_TYPES.REMOVE_API_CALL_STATUS,
                data: "SavePost",
            });
        });
};

export const deletePost = (dispatch, postId) => {
    const apiCalls = new ApiCalls();

    dispatch({
        type: APPLICATION_ACTION_TYPES.ADD_API_CALL_STATUS,
        data: { callerId: `DeletePost${postId}`, isComponent: false },
    });
    apiCalls.apiDeletePost(postId)
        .then((postResponse) => {
            if (postResponse.status === 200) {
                dispatch({
                    type: POST_ACTION_TYPES.DELETE,
                    data: postId,
                    error: null,
                });
            } else {
                dispatch({
                    type: POST_ACTION_TYPES.ERROR,
                    data: null,
                    error: postResponse.statusText,
                });
            }
        })
        .catch((error) => {
            dispatch({
                type: POST_ACTION_TYPES.ERROR,
                data: null,
                error: error.message,
            });
        })
        .finally(() => {
            dispatch({
                type: APPLICATION_ACTION_TYPES.REMOVE_API_CALL_STATUS,
                data: `DeletePost${postId}`,
            });
        });
};

export const clearPost = (dispatch) => {
    dispatch({
        type: POST_ACTION_TYPES.CLEAR,
    });
};
