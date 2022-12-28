import React, { useState } from 'react';
import { FormControl, InputLabel, Input, Switch ,Button, Box, TextField, FormControlLabel, IconButton, TextareaAutosize } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Delete, Edit, Check} from '@mui/icons-material'
import { Action } from '../models/goalModels'

interface ActionListProps {
    action: Action;
}

export default function actionForm({action}: ActionListProps) {
  const [actionState, setactionState] = useState<Action>(action);
  const [edit, setEdit] = useState<boolean>(false);

  const handleChange =
    (prop: keyof Action) => (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
      setactionState({ ...actionState, [prop]: event.target.value });
    };
  
  const handleDateChange =
    (prop: keyof Action) => (value: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>|null) => {
      setactionState({ ...actionState, [prop]: value });
    };

  return (
    <Box sx={{padding: '15px', m: 2}}>
        <form>
        <TextField 
            id="description"  
            name="Description"
            value={actionState.Description}
            onChange={handleChange('Description')}
            className='header-form'
            inputProps={{
              style: {fontSize: 32} 
            }}
            disabled={!edit} />
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
          <TextField
            id="notes"
            name="Notes"
            value={actionState.Notes}
            multiline
            maxRows={4}
            onChange={handleChange('Notes')}
            disabled={!edit}
            sx={{mt: 2 }}
            inputProps={{
              style: {fontSize: 12} 
            }}
            label="Notes"
            fullWidth
            focused 
            color="warning" />
            <Box sx={{m:3}}>
              <FormControlLabel 
                sx={{m: 1}}
                control={
                  <Switch
                    id="active"
                    name="Active"
                    checked={actionState.Active}
                    onChange={handleChange('Active')}
                    color='warning'
                    disabled={!edit}
                    />} 
                label="Active" />
              <FormControlLabel 
                sx={{m: 1}}
                control={
                  <Switch
                    id="reminder"
                    name="Reminder"
                    checked={actionState.Reminder}
                    onChange={handleChange('Reminder')}
                    color='primary'
                    disabled={!edit}
                    />} 
                label="Reminder" />
                {actionState.Reminder &&
                  <Box sx={{width: '100%'}}>
                       <LocalizationProvider dateAdapter={AdapterMoment}>
                          <DatePicker
                              label="Start Date"
                              value={actionState.StartDate}
                              onChange={handleDateChange('StartDate')}
                              renderInput={(params) => 
                              <TextField 
                                {...params}             
                                fullWidth
                                focused 
                                color="warning" />}
                          />
                      </LocalizationProvider>
                      <TextField 
                        id="frequencyDays"  
                        name="FrequencyDays"
                        value={actionState.FrequencyDays}
                        onChange={handleChange('FrequencyDays')}
                        disabled={!edit}
                        label='Reminder Frequency (Days)'
                        fullWidth
                        focused
                        color="warning"
                        sx={{mt: 2 }}
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
                      <TextField 
                        id="timesPerDay"  
                        name="TimesPerDay"
                        value={actionState.TimesPerDay}
                        onChange={handleChange('TimesPerDay')}
                        disabled={!edit}
                        label='Times per Day'
                        fullWidth
                        focused
                        color="warning"
                        sx={{mt: 2 }}
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
                  </Box>}
            </Box>
        </form>
    </Box>
  );
}
