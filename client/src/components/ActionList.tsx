import React from 'react';
import {List, Box, Divider, ListItemButton, ListItemText} from '@mui/material';
import {Action} from '../models/index'
import ListItem from './GoalListItem';
import {ListSkeleton} from './Skeleton';

interface ActionListProps {
    actions: Action[];
    loading: boolean;
    onClick: (id:string)=>void;
}

export default function ActionList ({actions, loading, onClick}: ActionListProps) {

    return (
            <Box sx={{ width: '100%'}}>
              {!loading?
                  <List>
                    {actions.map((action, i) => (
                      <ListItem key={i} id={action.id} text={action.Description} onClick={onClick}/>
                    ))}
                    <Divider variant='middle' sx={{ bgcolor: "primary.orinj" }} />
                  </List>: <ListSkeleton />}
            </Box> 
          );
}
