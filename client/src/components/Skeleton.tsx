import Skeleton from '@mui/material/Skeleton';
import React from 'react';

function ListItemSkeleton() {
    return (
        <React.Fragment>
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
            <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
            />
        <Skeleton animation="wave" height={10} width="40%" />
      </React.Fragment>
    );
}

export function ListSkeleton() {
    return (
        <React.Fragment>
            <ListItemSkeleton />
            <ListItemSkeleton />
            <ListItemSkeleton />
            <ListItemSkeleton />
            <ListItemSkeleton />
        </React.Fragment>
    );
}