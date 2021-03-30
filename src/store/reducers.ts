import {combineReducers} from 'redux';
import {onboardingReducer} from './onboarding/reducer';

export const reducers = combineReducers({onBoarding: onboardingReducer});
