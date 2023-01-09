import { List, Paper } from '@mui/material'
import React from 'react'
import { EntryCard } from './'

export const EntryList = () => {
  return (
    // TODO: add onDrop
    <div>
      <Paper sx={{ height: 'calc(100vh - 180px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '3px 5px' }}>
        {/* Will change depending on drag */}
        <List sx={{ opacity: 1 }}>
          <EntryCard />
        </List>
      </Paper>
    </div>
  )
}
