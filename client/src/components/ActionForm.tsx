import React, { useState } from 'react';
import { FormControl, InputLabel, Input, Switch ,Button, Box, TextField, FormControlLabel, IconButton, TextareaAutosize } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Delete, Edit, Check} from '@mui/icons-material';
import { Action } from '../models/index';
import {DataStore} from '@aws-amplify/datastore';

interface ActionListProps {
    action: Action;
    onDelete:(id: string) => void;
    onSave:(action: Action) => void;
    newItem: boolean;
}

export default function actionForm({action, onDelete, onSave, newItem}: ActionListProps) {
  const [actionState, setActionState] = useState<Action>(action);
  const [edit, setEdit] = useState<boolean>(newItem);

  const handleChange =
    (prop: keyof Action) => (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
      if (event.target.value) {
        setActionState({ ...actionState, [prop]: event.target.value });
      }
    };

  const handleNoChange =
    (prop: keyof Action) => (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
      if (event.target.value) {
        setActionState({ ...actionState, [prop]: parseInt (event.target.value) });
      }
    };
  

  const handleToggleChange = 
  (prop: keyof Action) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setActionState({ ...actionState, [prop]: event.target.checked });
  };
  
  const handleDateChange =
    (prop: keyof Action) => (value: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>|null) => {
      setActionState({ ...actionState, [prop]: value });
    };

    const saveAction = async () => {    
      if (!newItem) {
        const original = await DataStore.query(Action, actionState.id);
        if (!original) {
          console.log('No original')
          let ActionToCommit = new Action ({
            Description: actionState.Description,
            Notes: actionState.Notes,
            Active: actionState.Active,
            Reminder: actionState.Reminder,
            FrequencyDays: actionState.FrequencyDays,
            TimesPerDays: actionState.TimesPerDays,
            StartDate: actionState.StartDate,
            goalID: actionState.goalID
          })
          let newAction = await DataStore.save (ActionToCommit)
          onSave(newAction)
          setEdit(false)
          return;
        }
        console.log ('Exists')
        console.dir (original)
        let newAction = await DataStore.save(
          Action.copyOf(original!, updated => {
            updated.Description = actionState.Description
            updated.Notes = actionState.Notes
            updated.Active = actionState.Active
            updated.Reminder = actionState.Reminder
            updated.FrequencyDays = actionState.FrequencyDays
            updated.TimesPerDays = actionState.TimesPerDays
            updated.StartDate = actionState.StartDate
          })
        )
        onSave(newAction)
        setEdit(false)
      }
      else {
        console.log ('New')
        let ActionToCommit = new Action ({
          Description: actionState.Description,
          Notes: actionState.Notes,
          Active: actionState.Active,
          Reminder: actionState.Reminder,
          FrequencyDays: actionState.FrequencyDays,
          TimesPerDays: actionState.TimesPerDays,
          StartDate: actionState.StartDate,
          goalID: actionState.goalID
        })
        let newAction = await DataStore.save (ActionToCommit)
        onSave(newAction)
        setEdit(false)
      }
  }
  


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
              <IconButton aria-label="check" size="large" color="warning" onClick={()=>saveAction()}>
                <Check fontSize="inherit" />
              </IconButton> :
            <IconButton aria-label="edit" size="large" color="secondary" onClick={()=>setEdit(true)}>
              <Edit fontSize="inherit" />
            </IconButton>}
            <IconButton aria-label="delete" size="large" color="error" onClick={()=>onDelete(action.id)}>
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
                    checked={actionState.Active!}
                    onChange={handleToggleChange('Active')}
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
                    checked={actionState.Reminder!}
                    onChange={handleToggleChange('Reminder')}
                    color='secondary'
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
                        onChange={handleNoChange('FrequencyDays')}
                        disabled={!edit}
                        label='Reminder Frequency (Days)'
                        fullWidth
                        focused
                        color="warning"
                        sx={{mt: 2 }}
                        inputProps={{ type: 'number'}} />
                      <TextField 
                        id="timesPerDays"  
                        name="TimesPerDays"
                        value={actionState.TimesPerDays}
                        onChange={handleNoChange('TimesPerDays')}
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
