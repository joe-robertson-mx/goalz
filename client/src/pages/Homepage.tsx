import React, {useState, useEffect} from 'react';
import {Button, Skeleton, Box, Typography} from '@mui/material';
import List from '../components/List';
import {ListSkeleton} from '../components/Skeleton';
import TruckImg from '../assets/72.jpg'


export default function Homepage() {

    const [goals, setGoals] = useState<string[]>(['Improve Kitesurfing', 'Whiten Teeth', 'Sub 17m 5k']);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(function() {
            setLoading (false)
          }, 2000); // 2000 milliseconds = 2 seconds
          
      }, []);


    return (
        <React.Fragment>
            <img className='header-image' src={TruckImg} />
            <Box sx={{padding: '15px', m: 2}}>
            <Typography variant='h3' align='center' color='primary.white'>
                GOALZ
            </Typography>
                {!loading ? <List textArray={goals}/> : <ListSkeleton />} 
                <Box m={3}>
                    {!loading ?
                        <Button 
                            variant="contained" 
                            fullWidth={true}
                            color="secondary"
                            href='/goal/1234'
                            >
                                Add Goal
                        </Button> : <Skeleton variant="rectangular" width={200} height={40} />}
                </Box>
            </Box>
        </React.Fragment>
    );
}
