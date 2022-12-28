import React, {useState, useEffect, useRef} from 'react';
import { Box, Typography} from '@mui/material';
import GoalList from '../components/GoalList';
import ActionList from '../components/ActionList';
import WideButton from '../components/WideButton';
import GoalForm from '../components/GoalForm';
import ActionForm from '../components/ActionForm'
import { Goal, Action } from '../models/index';
import {retrieveGoals, retrieveActions} from '../services/services'
import TruckImg from '../assets/72.jpg'


export default function Homepage() {

    const [goals, setGoals] = useState<Goal[]>([]);
    const [goal, setGoal] = useState<Goal>();
    const [loading, setLoading] = useState<boolean>(true);
    const [actions, setActions] = useState<Action[]>([]);
    const [allActions, setAllActions] = useState<Action[]>([]);
    const [action, setAction] = useState<Action>();


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
      }

      const editGoal = (id: string) => {
        const goal = goals.find(goal => goal.id === id);
        setGoal(goal)
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
        }
        else {
            console.error ('No goal found')
        }

      }

      const editAction = (id: string) => {
        const action = actions.find(action => action.id === id);
        setAction(action)
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
                        <GoalForm goal={goal} onDelete={deleteGoal} onSave={saveGoal} />}
                    {goal && action &&
                      <ActionForm action={action}/>}
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
                    <WideButton loading={false} cancel={true} buttonText='Cancel' onClick={cancelGoal}/>
                </React.Fragment>}
                {goal && action  &&
                <React.Fragment>
                    <WideButton loading={false} cancel={true} buttonText='Cancel' onClick={cancelAction}/>
                </React.Fragment>}
            </Box>
        </React.Fragment>
    );
}
