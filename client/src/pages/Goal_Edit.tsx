import React, {useState, useEffect} from 'react';
import {Button, Skeleton, Box, Typography} from '@mui/material';
import List from '../components/GoalList';
import {ListSkeleton} from '../components/Skeleton';
import {useParams} from 'react-router-dom';

export interface GoalInterface {
    id: string;
    Description: string;
    Active: boolean;
}

export default function GoalEdit() {

    const [goal, setGoal] = useState<GoalInterface>();
    const [loading, setLoading] = useState<boolean>(true);
    const [activities, setActivities] = useState<string[]>(['Watch video series', 'Book 2 holidays', 'Get out']);
    let { id } = useParams();

    useEffect(() => {
        if (id) {
            setGoal ({id, Description: 'Learn Kitesurfing', Active: true})
            setLoading (false)
        }
          
      }, []);


    return (
        <React.Fragment>
            {goal &&
        <Box sx={{padding: '15px', m: 2}}>
        <Typography variant='h3' align='center' color='primary.white'>
            {goal.Description}
        </Typography>
            {!loading ? <List textArray={activities}/> : <ListSkeleton />} 
            <Box m={3}>
                {!loading ?
                    <Button 
                        variant="contained" 
                        fullWidth={true}
                        color="secondary"
                        >
                            Add Action
                    </Button> : <Skeleton variant="rectangular" width={200} height={40} />}
            </Box>
        </Box>}
    </React.Fragment>
    )
}