import React from 'react';
import { Button, Box, Skeleton } from '@mui/material';

export interface WideButton {
    loading: boolean;
    cancel: boolean;
    buttonText: string;
    onClick: ()=>void;
}

export default function WideButton({loading, cancel, buttonText, onClick}: WideButton) {
  return (
    <Box m={3}>
        {!loading ?
            <Button 
                variant="contained" 
                fullWidth={true}
                color={!cancel?"secondary":"info"}
                onClick={onClick}
                >
                    {buttonText}
            </Button> : <Skeleton variant="rectangular" width={200} height={40} />}
    </Box>
  );
}