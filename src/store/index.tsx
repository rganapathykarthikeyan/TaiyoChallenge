import { createSlice, configureStore } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ContactListState {
    contacts: ContactState[]
}

export interface ContactState {
    id: number,
    firstName: string,
    lastName: string,
    Status: boolean
}

const initialState: ContactListState = {
    contacts: 
    [ {id:0, firstName:"Hello", lastName: "World", Status:true}, 
    {id:1, firstName:"The", lastName: "Second", Status:false},
    {id:4, firstName:"Third", lastName: "Hokage", Status:false}, ]
}

const contactSlice = createSlice({
    name:"contacts",
    initialState,
    reducers: {
        addcontact(state, action: PayloadAction<ContactState>) {
            state.contacts.push(action.payload);
        },
        editContact(state, action: PayloadAction<ContactState>) {
            const pos:number = state.contacts.findIndex(((contact) => { return contact.id === action.payload.id}));
            state.contacts[pos] = action.payload;
        },
        deleteContact(state, action: PayloadAction<ContactState>) {
            const filteredContactList = state.contacts.filter((item) => { return item.id !== action.payload.id});
            state.contacts = filteredContactList;
        }
    }
});

const store = configureStore({
    reducer: contactSlice.reducer
});

export const contactActions = contactSlice.actions;

export default store;