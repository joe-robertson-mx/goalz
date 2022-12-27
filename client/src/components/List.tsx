import React from 'react';
import {List, Box, Divider, ListItemButton, ListItemText} from '@mui/material';

interface ListProps {
    textArray: string[];
}

export default function SimpleList ({textArray}: ListProps) {

    return (
            <Box sx={{ width: '100%'}}>
              <List>
                {textArray.map((text, i) => (
                  <React.Fragment key={i}>
                    <Divider variant='middle' sx={{ bgcolor: "primary.orinj" }} />
                    <ListItemButton href='/goal/1234'>
                      <ListItemText primary={text} color='primary.white' />
                    </ListItemButton>             
                  </React.Fragment>
                ))}
                <Divider variant='middle' sx={{ bgcolor: "primary.orinj" }} />
              </List>
            </Box>
          );
}
