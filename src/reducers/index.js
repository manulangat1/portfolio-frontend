import { combineReducers } from 'redux';
import home from './home';
import about from './about';
import projects from './projects';
import auth from './auth';

import blogs from './blog';
export default combineReducers({
    home,
    about,
    projects,
    blogs,
    auth
});