import { ADD_REMINDER } from "./constants";
import { DELETE_REMINDER } from "./constants";
import { CLEAR_REMINDERS } from "./constants";

const addReminder=(text, dueDate)=>{
    const action={
        type: ADD_REMINDER,
        text,
        dueDate
    }
 
    return action;
}
export {addReminder};


export const deleteReminder=(id)=>{
    const action ={
        type: DELETE_REMINDER,
        id
    }

    return action;
}

export const clearReminders=()=>{
 return {
    type: CLEAR_REMINDERS
 }
}

