import React from 'react';
import {List, Box, Divider, ListItemButton, ListItemText} from '@mui/material';
import {Goal} from '../models/goalModels'
import GoalListItem from './GoalListItem';
import {ListSkeleton} from './Skeleton';

interface GoalListProps {
    goals: Goal[];
    loading: boolean;
    onClick: (id:string)=>void;
}

export default function GoalList ({goals, loading, onClick}: GoalListProps) {

    return (
            <Box sx={{ width: '100%'}}>
              {!loading?
                  <List>
                    {goals.map((goal, i) => (
                      <GoalListItem key={i} id={goal.id} text={goal.Description} onClick={onClick}/>
                    ))}
                    <Divider variant='middle' sx={{ bgcolor: "primary.orinj" }} />
                  </List>: <ListSkeleton />}
            </Box> 
          );
}
