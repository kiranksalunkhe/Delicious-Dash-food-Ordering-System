import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userId: null,
        fname: '',
        lname: '',
        email: '',
        contact: '',
        address: '',
        areaId: null,
        restaurants: [],
        roleId: null,
        status: false,
    },
    reducers: {
        setUser: (state, action) => {
            return { ...state, ...action.payload };
        },
        clearUser: () => ({
            userId: null,
            fname: '',
            lname: '',
            email: '',
            contact: '',
            address: '',
            areaId: null,
            restaurants: [],
            roleId: null,
            status: false,
        }),
    },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
