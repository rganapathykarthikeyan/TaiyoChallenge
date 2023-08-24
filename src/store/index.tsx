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

//initial State is the Dummy Data used for testing

const initialState: ContactListState = {
    contacts: 
    [ {id:0, firstName:"Hello", lastName: "World", Status:true}, 
    {id:1, firstName:"The", lastName: "Second", Status:false},
    {id:4, firstName:"Third", lastName: "Hokage", Status:false}, ]
}

// CreateSlice is used from reduxjs/toolkit to create a slice with the reducers

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

//contactSlice.action is used to export the reducers that are within the slice

export const contactActions = contactSlice.actions;

export default store;