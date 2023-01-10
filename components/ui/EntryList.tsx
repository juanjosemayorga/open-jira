import { useMemo, useContext } from 'react'
import { List, Paper } from '@mui/material'
import { EntryCard } from './'
import { EntryStatus } from '../../interfaces'
import { EntriesContext } from '../../context/entries'

interface Props {
  status: EntryStatus
}

export const EntryList = ({ status }: Props) => {
  const { entries } = useContext(EntriesContext)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const entriesByStatus = useMemo(() => entries.filter((entry) => entry.status === status), [entries]);

  return (
    // TODO: add onDrop
    <div>
      <Paper sx={{ height: 'calc(100vh - 180px)', backgroundColor: 'transparent', padding: '3px 5px' }}>
        {/* Will change depending on drag */}
        <List sx={{ opacity: 1 }}>
          {
            entriesByStatus.map((entry) => (
              <EntryCard key={entry._id} entry={entry} />
            ))
          }
        </List>
      </Paper>
    </div>
  )
}
