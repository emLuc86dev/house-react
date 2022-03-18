import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface SliceState {
    value: number
}

const initialState: SliceState = {
    value: 0
}

const counterSile = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        //increment
        increment(state){
            state.value++
        },
        //decrement
        decrement(state){
            state.value--
        },
        //reset
        reset(state){
            state.value = 0
        },
        //addbynumber
        addByNumber(state, action: PayloadAction<number>){
            state.value += action.payload
        }
        
    }
});

export const { increment, decrement, reset, addByNumber } = counterSile.actions

export default counterSile.reducer;