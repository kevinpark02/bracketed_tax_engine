import * as LowerBracketApiUtil from "../util/lower_bracket_api_util";

export const RECEIVE_LOWER_BRACKET = "RECEIVE_LOWER_BRACKET";
export const REMOVE_LOWER_BRACKET = "REMOVE_LOWER_BRACKET";

export const receiveLowerBracket = (lowerBracket) => {
  return {
    type: RECEIVE_LOWER_BRACKET,
    lowerBracket,
  };
};

export const removeLowerBracket = (lowerBracket) => {
  return {
    type: REMOVE_LOWER_BRACKET,
    lowerBracket,
  };
};

export const createLowerBracket = (lowerBracket) => (dispatch) => {
  return LowerBracketApiUtil.createLowerBracket(lowerBracket).then((lowerBracket) =>
    dispatch(receiveLowerBracket(lowerBracket))
  );
};

export const updateLowerBracket = (lowerBracket) => (dispatch) => {
  return LowerBracketApiUtil.updateLowerBracket(lowerBracket).then((lowerBracket) =>
    dispatch(receiveLowerBracket(lowerBracket))
  );
};

export const deleteLowerBracket = (lowerBracket) => (dispatch) => {
  return LowerBracketApiUtil.deleteLowerBracket(lowerBracket.id).then(() =>
    dispatch(removeLowerBracket(lowerBracket))
  );
};
