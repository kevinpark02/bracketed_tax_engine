import * as BracketApiUtil from "../util/bracket_api_util";

export const RECEIVE_BRACKET = "RECEIVE_BRACKET";
export const REMOVE_BRACKET = "REMOVE_BRACKET";

export const receiveBracket = (bracket) => {
    return({
        type: RECEIVE_BRACKET,
        bracket
    });
};

export const removeBracket = (bracket) => {
    return({
        type: REMOVE_BRACKET,
        bracket
    });
};

export const createBracket = (bracket) => dispatch => {
    return BracketApiUtil.createBracket(bracket)
        .then(bracket => dispatch(receiveBracket(bracket)));
};

export const updateBracket = (bracket) => dispatch => {
    return BracketApiUtil.updateBracket(bracket)
        .then(bracket => dispatch(receiveBracket(bracket)));
};

export const deleteBracket = (bracket) => dispatch => {
    return BracketApiUtil.deleteBracket(bracket.id)
        .then(() => dispatch(removeBracket(bracket)));
};