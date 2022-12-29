import React, { useState } from 'react';
import { FormControl, InputLabel, Input, Switch ,Button, Box, TextField, FormControlLabel, IconButton } from '@mui/material';
import {Delete, Check, Edit} from '@mui/icons-material'
import { Goal } from '../models/index'
import {DataStore} from '@aws-amplify/datastore';


interface GoalListProps {
    goal: Goal;
    onDelete:(id: string) => void;
    onSave:(goal: Goal) => void;
    newItem: boolean;
}

export default function GoalForm({goal, onDelete, onSave, newItem}: GoalListProps) {
  const [goalState, setGoalState] = useState<Goal>(goal);
  const [edit, setEdit] = useState<boolean>(newItem);

  const handleChange =
  (prop: keyof Goal) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setGoalState({ ...goalState, [prop]: event.target.value });
  };

  const handleToggleChange = 
  (prop: keyof Goal) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setGoalState({ ...goalState, [prop]: event.target.checked });
  };


  const saveGoal = async () => {  
      if (!newItem) {
        const original = await DataStore.query(Goal, goalState.id);
        if (!original) {
          console.error ('No original item found')
          return;
        }
        console.log ('Exists')
        let newGoal = await DataStore.save(
          Goal.copyOf(original, updated => {
            updated.Description = goalState.Description
            updated.Active = goalState.Active
          })
        )
        onSave(newGoal)
        setEdit(false)
      }
      else {
        console.log ('New')
        let goalToCommit = new Goal ({
          Description: goalState.Description,
          Active: goalState.Active
        })
        let newGoal = await DataStore.save (goalToCommit)
        onSave(newGoal)
        setEdit(false)
      }
  }


  return (
    <Box sx={{padding: '15px', m: 2}}>
        <form>
        <TextField 
            id="description"
            name="Description"
            value={goalState.Description}
            onChange={handleChange('Description')}
            className='header-form'
            inputProps={{
              style: {fontSize: 32} 
            }}
            disabled={!edit} />
            <Box sx={{m:3}}>
              <FormControlLabel 
                sx={{m: 1}}
                control={
                  <Switch
                    id="active"
                    name="Active"
                    checked={goalState.Active}
                    onChange={handleToggleChange('Active')}
                    color='warning'
                    disabled={!edit}
                    />} 
                label="Active" />
                <Box sx={{float: 'right' }}>
                  {edit ?
                    <IconButton aria-label="check" size="large" color="warning" onClick={()=> saveGoal()}>
                      <Check fontSize="inherit" />
                    </IconButton> :
                  <IconButton aria-label="edit" size="large" color="secondary" onClick={()=>setEdit(true)}>
                    <Edit fontSize="inherit" />
                  </IconButton>}
                  <IconButton aria-label="delete" size="large" color="error" onClick={()=>onDelete(goal.id)}>
                    <Delete fontSize="inherit" />
                  </IconButton>
                </Box>
            </Box>
        </form>
    </Box>
  );
}

