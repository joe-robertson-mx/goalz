import React, { useState } from 'react';
import { FormControl, InputLabel, Input, Switch ,Button, Box, TextField, FormControlLabel, IconButton } from '@mui/material';
import {Delete, Edit} from '@mui/icons-material'
import { Action } from '../models/goalModels'

interface ActionListProps {
    action: Action;
}

export default function GoalForm({action}: ActionListProps) {
  const [actionState, setActionState] = useState<Action>(action);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setActionState({
      ...actionState,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <Box sx={{padding: '15px', m: 2}}>
        <form>
        <TextField 
            id="description"
            name="Description"
            value={action.Description}
            onChange={handleChange}
            className='header-form' />
            <Box sx={{m:3}}>
              <FormControlLabel 
                sx={{m: 1}}
                control={
                  <Switch
                    id="active"
                    name="Active"
                    checked={action.Active}
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

