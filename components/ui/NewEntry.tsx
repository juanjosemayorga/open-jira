import { ChangeEvent, useContext, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'

import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import { EntriesContext } from '../../context/entries'
import { UIContext } from '../../context/ui/UIContext';

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);
  // const [isAdding, setIsAdding] = useState<boolean>(false);
  const [inputValue, setinputValue] = useState<string>('');
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const onTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    setinputValue(e.target.value);
  }

  const onSave = () => {
    if (inputValue.length === 0) {
      return;
    }
    addNewEntry(inputValue);
    setIsAddingEntry(false);
    setIsTouched(false);
    setinputValue('');
  }

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="nueva entrada"
            autoFocus
            multiline
            label="Nueva entrada"
            helperText={isTouched && inputValue.length === 0 && "Ingrese un valor"}
            error={isTouched && inputValue.length === 0}
            value={inputValue}
            onChange={onTextFieldChange}
            onBlur={() => setIsTouched(true)}
          />

          <Box display="flex" justifyContent="space-between">
            <Button variant="text" onClick={() => setIsAddingEntry(false)}>
              Cancelar
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddCircleOutlineOutlinedIcon />}
          fullWidth
          variant="outlined"
          onClick={() => setIsAddingEntry(true)}
        >
          Agregar Tarea
        </Button>
      )}
    </Box>
  );
}
