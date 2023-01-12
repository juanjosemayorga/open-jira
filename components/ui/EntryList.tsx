import { useMemo, useContext, DragEvent } from 'react'
import { List, Paper } from '@mui/material'
import { EntryCard } from './'
import { EntryStatus } from '../../interfaces'
import { EntriesContext } from '../../context/entries'
import { UIContext } from '../../context/ui'

import styles from './EntryList.module.css'

interface Props {
  status: EntryStatus
}

export const EntryList = ({ status }: Props) => {
  const { entries, updateEntry } = useContext(EntriesContext)
  const { isDragging, stopDragging } = useContext(UIContext)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const entriesByStatus = useMemo(() => entries.filter((entry) => entry.status === status), [entries]);

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text');
    const entry = entries.find((entry) => entry._id === id)!;
    entry.status = status;

    updateEntry(entry);
    stopDragging();
  };

  return (
    // TODO: add onDrop
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ''}
    >
      <Paper sx={{ height: 'calc(100vh - 180px)', backgroundColor: 'transparent', padding: '3px 5px' }}>

        <List sx={{ opacity: isDragging ? 0.4 : 1, transition: 'all 0.3s' }}>
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
