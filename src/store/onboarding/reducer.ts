import {ValidateUserNumber, VALIDATE_PHONE_NUMBER, UserState} from './types';

const initialState: UserState = {
  phone: '',
  isValid: false,
};

export const onboardingReducer = (
  state = initialState,
  action: ValidateUserNumber,
): UserState => {
  switch (action.type as any) {
    case VALIDATE_PHONE_NUMBER:
      return {
        ...state,
        phone: action.payload.phone,
        isValid: action.payload.isValid,
      };
    default:
      return state;
  }
};
