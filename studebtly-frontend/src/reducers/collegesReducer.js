const colleges = (state = {}, action) => {
  switch (action.type) {
  case 'GET_COLLEGES':
    return action.colleges;
  default:
    return state;
  }
};

export default colleges;
