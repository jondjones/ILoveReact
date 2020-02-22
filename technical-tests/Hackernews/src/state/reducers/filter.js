const INCREMENT = "NCREMENT";

const filtersReducerDefaultState = {
  count: 5,
};

const filter = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 5,
      };
    default:
      return state;
  }
};

export default filter;

export const increment = () => ({
  type: INCREMENT,
});
