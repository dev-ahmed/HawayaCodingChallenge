export const VALIDATE_PHONE_NUMBER = 'VALIDATE_PHONE_NUMBER';

export interface ValidateUserNumber {
  type: typeof VALIDATE_PHONE_NUMBER;
  payload: UserState;
}

export interface UserState {
  isValid: boolean;
  phone: string | null;
}
