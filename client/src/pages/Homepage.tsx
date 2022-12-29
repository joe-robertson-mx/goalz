import React, {useState, useEffect, useRef} from 'react';
import { Box, Typography} from '@mui/material';
import GoalList from '../components/GoalList';
import ActionList from '../components/ActionList';
import WideButton from '../components/WideButton';
import GoalForm from '../components/GoalForm';
import ActionForm from '../components/ActionForm'
import { Goal, Action } from '../models/index';
import {retrieveGoals, retrieveActions} from '../services/services';
import TruckImg from '../assets/72.jpg';


export default function Homepage() {

    const [goals, setGoals] = useState<Goal[]>([]);
    const [goal, setGoal] = useState<Goal>();
    const [loading, setLoading] = useState<boolean>(true);
    const [actions, setActions] = useState<Action[]>([]);
    const [allActions, setAllActions] = useState<Action[]>([]);
    const [action, setAction] = useState<Action>();
    const [newItem, setNewItem] = useState<boolean>(true);

    useEffect(() => {
        if (!goal && !action) {
            retrieveGoals().then(goals=> {
                setGoals(goals)               
            })
            retrieveActions().then(actions=>{
                setAllActions(actions)
            })
            setLoading(false);
        }
      }, []);

      useEffect(() => {
        if (goal) {
            const actionData = allActions.filter (action=>action.goalID === goal.id);
            setActions (actionData)
        }
        else {
            setActions ([])
        }          
      }, [goal]);

      const addGoal = () => {
        setGoal (new Goal({
            Description: '',
            Active: true,
        }))
        setNewItem(true)
      }

      const editGoal = (id: string) => {
        const goal = goals.find(goal => goal.id === id);
        setGoal(goal)
        setNewItem(false)
      }

      const deleteGoal = (id: string) => {
        if (goal && goal.id) {
            const newGoals = goals.filter (goalArr=>goalArr.id !== goal.id);
            setGoals (newGoals)
            setGoal (undefined)
        }        
      }

      const saveGoal = (goal: Goal) => {
        // remove old goal if necessary
        const newGoals = goals.filter (goalArr=>goalArr.id !== goal.id);
        newGoals.push (goal)
        setGoals (newGoals)
        setNewItem (false)
      }

      const cancelGoal = () => {
        setGoal(undefined)
      }

      const addAction = () => {
        if (goal) {
            setAction (new Action ({
                Description: '',
                Active: true,
                goalID: goal.id,
                Reminder: false
            }))
            setNewItem(true)
        }
        else {
            console.error ('No goal found')
        }
      }

      const deleteAction = (id: string) => {
        if (action && action.id) {
            const newActions = actions.filter (actionArr=>actionArr.id !== action.id);
            setActions (newActions)
            setAction (undefined)
        }        
      }

      const saveAction = (action: Action) => {
        // remove old Action if necessary
        const newActions = allActions.filter (actionArr=>actionArr.id !== action.id);
        newActions.push (action)
        setAllActions(newActions)

        const newGoalActions = actions.filter (actionArr=>actionArr.id !== action.id);
        newGoalActions.push (action)
        setActions (newGoalActions)
        setNewItem(false)
      }

      const editAction = (id: string) => {
        const action = actions.find(action => action.id === id);
        setAction(action)
        setNewItem(false)
      }

      const cancelAction = () => {
        setAction(undefined)
      }
        

    return (
        <React.Fragment>                            
                {/* <CSSTransition in={!goal} timeout={300} classNames='fade'> */}
                    {!goal && !action &&
                        <img className='header-image' src={TruckImg} />}
                    {goal && !action &&
                        <GoalForm goal={goal} onDelete={deleteGoal} onSave={saveGoal} newItem={newItem} />}
                    {goal && action &&
                      <ActionForm action={action} onDelete={deleteAction} onSave={saveAction} newItem={newItem}/>}
                {/* </CSSTransition>                  */}
            <Box sx={{padding: '15px', m: 2}}>
                        <Typography variant='h5' align='center' color='primary.white'>
                            {!goal &&'GOALZ'}
                            {goal && !action && 'ACTIONS'}
                        </Typography>
                            {!goal && !action &&
                                    <GoalList goals={goals} loading={loading} onClick={editGoal} />}
                            {goal && !action && 
                                <ActionList actions={actions} loading={loading} onClick={editAction} />}
                {!goal && !action  &&
                <React.Fragment>
                    <WideButton loading={loading} cancel={false} buttonText={'Add Goal'} onClick={addGoal}/>
                </React.Fragment>}
                {goal && !action  &&
                <React.Fragment>
                    <WideButton loading={loading} cancel={false} buttonText={'Add Action'} onClick={addAction}/>
                    <WideButton loading={false} cancel={true} buttonText='Close' onClick={cancelGoal}/>
                </React.Fragment>}
                {goal && action  &&
                <React.Fragment>
                    <WideButton loading={false} cancel={true} buttonText='Close' onClick={cancelAction}/>
                </React.Fragment>}
            </Box>
        </React.Fragment>
    );
}
