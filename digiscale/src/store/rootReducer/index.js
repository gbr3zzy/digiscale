import {mainReducer} from '../reducer';

import {combineReducers} from 'redux';

// export default combineReducers({
//   Update: updateReducer,
//   User: userReducer,
// });

const rootReducer = combineReducers({
  user: mainReducer,
});

//export
export default rootReducer;
