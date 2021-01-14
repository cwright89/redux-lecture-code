// import createStore from redux
import {createStore} from 'redux';
// import reducer file(s)
import reducer from './reducer';

//  export your redux store, passing in the reducer
export default createStore(reducer);