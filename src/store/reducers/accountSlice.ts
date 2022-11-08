import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type AccountState = {
  value: string;
};

const initialState: AccountState = {
  value: '',
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    changeAccount: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    removeAccount: (state) => {
      state.value = '';
    },
  },
});

export const { removeAccount, changeAccount } = accountSlice.actions;

export default accountSlice.reducer;
