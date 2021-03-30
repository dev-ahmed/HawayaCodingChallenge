import {VALIDATE_PHONE_NUMBER} from './types';

export const validateUserNumber = (phone: string) => async (dispatch: any) => {
  if (phone) {
    dispatch({
      type: VALIDATE_PHONE_NUMBER,
      payload: {phone, isValid: true},
    });
  }
};
