import React from 'react';
import {List, Box, Divider, ListItemButton, ListItemText} from '@mui/material';

interface ListItemProps {
    id:string;
    text:string;
    onClick: (id:string)=>void;
}

export default function GoalListItem ({id, text, onClick}: ListItemProps) {

  const onKlik = () => {
    onClick(id)
  }
    return (
            <React.Fragment key={id}>
              <Divider variant='middle' sx={{ bgcolor: "primary.orinj" }} />
              <ListItemButton onClick={onKlik}>
                <ListItemText primary={text} color='primary.white' />
              </ListItemButton>             
            </React.Fragment>
          );
}
