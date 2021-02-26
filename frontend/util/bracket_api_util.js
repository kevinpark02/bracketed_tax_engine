export const createBracket = (bracket) => {
  return $.ajax({
    url: `/api/brackets`,
    method: "POST",
    data: { bracket },
  });
};

export const updateBracket = (bracket) => {
  return $.ajax({
    url: `/api/brackets/${bracket.id}`,
    method: "PATCH",
    data: { bracket },
  });
};

export const deleteBracket = (bracketId) => {
  return $.ajax({
    url: `/api/brackets/${bracketId}`,
    method: "DELETE",
  });
};
