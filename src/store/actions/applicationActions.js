import APPLICATION_ACTION_TYPES from "../actionTypes/applicationActionTypes";

export const setReady = (dispatch, isReady) => {
    dispatch({
        type: APPLICATION_ACTION_TYPES.SET_READY,
        data: isReady,
    });
};

export const setAuthenticated = (dispatch, isAuthenticated) => {
    dispatch({
        type: APPLICATION_ACTION_TYPES.SET_AUTHENTICATED,
        data: isAuthenticated,
    });
};

export const setApplicationTitle = (dispatch, applicationTitle) => {
    dispatch({
        type: APPLICATION_ACTION_TYPES.SET_APPLICATION_TITLE,
        data: applicationTitle,
    });
};

export const setShowExport = (dispatch, isShowExport) => {
    dispatch({
        type: APPLICATION_ACTION_TYPES.SET_SHOW_EXPORT,
        data: isShowExport,
    });
};

export const setPosts = (dispatch, posts) => {
    dispatch({
        type: APPLICATION_ACTION_TYPES.SET_POSTS,
        data: posts,
    });
};

export const setModalData = (dispatch, modalData) => {
    dispatch({
        type: APPLICATION_ACTION_TYPES.SET_MODAL_DATA,
        data: modalData,
    });
};

export const addApiCallStatus = (dispatch, apiCallStatus) => {
    dispatch({
        type: APPLICATION_ACTION_TYPES.ADD_API_CALL_STATUS,
        data: apiCallStatus,
    });
};

export const removeApiCallStatus = (dispatch, apiCallId) => {
    dispatch({
        type: APPLICATION_ACTION_TYPES.REMOVE_API_CALL_STATUS,
        data: apiCallId,
    });
};
