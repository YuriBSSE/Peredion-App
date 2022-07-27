import { LOG_IN} from '../../actions/types';

const initialState = {};

export default function authRed(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return action.payload;
    case "clearAuth":
      return {}
    default:
      return state;
  }
}
