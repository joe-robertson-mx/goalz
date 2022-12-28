import React, { useState } from 'react';
import { FormControl, InputLabel, Input, Switch ,Button, Box, TextField, FormControlLabel, IconButton } from '@mui/material';
import {Delete, Edit} from '@mui/icons-material'
import { Goal } from '../models/goalModels'

interface GoalListProps {
    goal: Goal;
}

export default function GoalForm({goal}: GoalListProps) {
  const [goalState, setGoalState] = useState<Goal>(goal);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setGoalState({
      ...goalState,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <Box sx={{padding: '15px', m: 2}}>
        <form>
        <TextField 
            id="description"
            name="Description"
            value={goal.Description}
            onChange={handleChange}
            className='header-form' />
            <Box sx={{m:3}}>
              <FormControlLabel 
                sx={{m: 1}}
                control={
                  <Switch
                    id="active"
                    name="Active"
                    checked={goal.Active}
                    onChange={handleChange}
                    color='warning'
                    />} 
                label="Active" />
                <Box sx={{float: 'right' }}>
                  <IconButton aria-label="edit" size="large" color="secondary">
                    <Edit fontSize="inherit" />
                  </IconButton>
                  <IconButton aria-label="delete" size="large" color="error">
                    <Delete fontSize="inherit" />
                  </IconButton>
                </Box>
            </Box>
        </form>
    </Box>
  );
}

