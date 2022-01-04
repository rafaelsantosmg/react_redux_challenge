import { SET_PERSONAL_VALUE } from '../action/action';

const initialState = {
    email: 'teste@teste.com',
    password: 'teste',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_PERSONAL_VALUE:
    return { ...state, email: action.payload.email, password: action.payload.password};
  default:
    return state;
  }
};

export default reducer;
