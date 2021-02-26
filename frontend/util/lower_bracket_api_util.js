export const createLowerBracket = (lowerBracket) => {
  return $.ajax({
    url: `/api/lower_brackets`,
    method: "POST",
    data: { lowerBracket },
  });
};

export const updateLowerBracket = (lowerBracket) => {
  return $.ajax({
    url: `/api/lower_brackets/${lowerBracket.id}`,
    method: "PATCH",
    data: { lowerBracket },
  });
};

export const deleteLowerBracket = (lowerBracketId) => {
  return $.ajax({
    url: `/api/lower_brackets/${lowerBracketId}`,
    method: "DELETE",
  });
};
