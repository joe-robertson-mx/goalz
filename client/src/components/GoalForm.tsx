import React, { useState } from 'react';
import { FormControl, InputLabel, Input, Switch ,Button, Box, TextField, FormControlLabel, IconButton } from '@mui/material';
import {Delete, Check, Edit} from '@mui/icons-material'
import { Goal } from '../models/goalModels'

interface GoalListProps {
    goal: Goal;
}

export default function GoalForm({goal}: GoalListProps) {
  const [goalState, setGoalState] = useState<Goal>(goal);
  const [edit, setEdit] = useState<boolean>(false);

  const handleChange =
  (prop: keyof Goal) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setGoalState({ ...goalState, [prop]: event.target.value });
  };

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
                    onChange={handleChange('Active')}
                    color='warning'
                    disabled={!edit}
                    />} 
                label="Active" />
                <Box sx={{float: 'right' }}>
                  {edit ?
                    <IconButton aria-label="check" size="large" color="warning" onClick={()=>setEdit(false)}>
                      <Check fontSize="inherit" />
                    </IconButton> :
                  <IconButton aria-label="edit" size="large" color="secondary" onClick={()=>setEdit(true)}>
                    <Edit fontSize="inherit" />
                  </IconButton>}
                  <IconButton aria-label="delete" size="large" color="error">
                    <Delete fontSize="inherit" />
                  </IconButton>
                </Box>
            </Box>
        </form>
    </Box>
  );
}

