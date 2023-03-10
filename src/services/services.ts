import {DataStore} from '@aws-amplify/datastore';
import {Goal, Action} from '../models/index'

export const retrieveGoals = async ():Promise<Goal[]> => {
    try {
        const goals: Goal[] = await DataStore.query(Goal);
        return goals
    }
    catch (error) {
        console.log("Error retrieving posts", error);
        return []
      }
}

export const retrieveActions = async ():Promise<Action[]> => {
    try {
        const actions: Action[] = await DataStore.query(Action);
        return actions
    }
    catch (error) {
        console.log("Error retrieving posts", error);
        return []
      }
}


export const handleDeleteGoal = async (id) => {
    const todelete = await DataStore.query(Goal, id);
    if (todelete) {
      DataStore.delete(todelete);
    }
    else {
      console.error ('Item not found to delete')
    }    
  }

export const handleDeleteAction = async (id) => {
    const todelete = await DataStore.query(Action, id);
    if (todelete) {
      DataStore.delete(todelete);
    }
    else {
      console.error ('Item not found to delete')
    }    
  }
