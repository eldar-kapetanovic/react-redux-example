import ApiCallsHelper from "../../helpers/apiCallsHelper";
import { updateObject } from "../../helpers/utility";
import MODAL_TYPES from "../../modals/modalTypes";
import APPLICATION_ACTION_TYPES from "../actionTypes/applicationActionTypes";

const initialState = {
    isReady: false,
    authenticated: false,
    applicationTitle: "Posts List",
    showExport: false,
    posts: [],
    modalData: { type: MODAL_TYPES.NONE, visible: false },
    apiCallStatus: { ongoing: false, calls: [] },
};

// eslint-disable-next-line complexity
const application = (state = initialState, action) => {
    switch (action.type) {
        case APPLICATION_ACTION_TYPES.SET_READY: 
            return updateObject(state, { isReady: action.data });
        case APPLICATION_ACTION_TYPES.SET_AUTHENTICATED: 
            return updateObject(state, { authenticated: action.data });
        case APPLICATION_ACTION_TYPES.SET_APPLICATION_TITLE: 
            return updateObject(state, { applicationTitle: action.data });
        case APPLICATION_ACTION_TYPES.SET_SHOW_EXPORT: 
            return updateObject(state, { showExport: action.data });
        case APPLICATION_ACTION_TYPES.SET_POSTS: 
            return updateObject(state, { posts: action.data });
        case APPLICATION_ACTION_TYPES.SET_MODAL_DATA: 
            return updateObject(state, { modalData: action.data });
        case APPLICATION_ACTION_TYPES.ADD_API_CALL_STATUS:
            return updateObject(
                state,
                {
                    apiCallStatus: ApiCallsHelper.addApiCallToStatus(
                        state.apiCallStatus,
                        action.data,
                        initialState.apiCallStatus
                    ),
                }
            );
        case APPLICATION_ACTION_TYPES.REMOVE_API_CALL_STATUS:
            return updateObject(
                state,
                {
                    apiCallStatus: ApiCallsHelper.removeApiCallFromStatus(
                        state.apiCallStatus,
                        action.data,
                        initialState.apiCallStatus
                    ),
                }
            );
        default:
            return state;
    }
};

export default application;
