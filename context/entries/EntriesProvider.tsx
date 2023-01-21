import { useEffect, useReducer } from 'react';
import { useSnackbar } from 'notistack';

import { entriesApi } from '../../apis';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces';

export interface EntriesState {
  entries: Entry[];
}

export const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider = ({ children }: any) => {
  const { enqueueSnackbar } = useSnackbar();
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>('/entries');
    dispatch({ type: "[Entry] - Refresh-Entries", payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>('/entries', { description });

    dispatch({
      type: "[Entry] - Add-Entry",
      payload: data,
    });
  };

  const updateEntry = async ({ _id, description, status }: Entry, showSnackBar = false) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, { description, status });
      dispatch({ type: "[Entry] - Update-Entry", payload: data });

      if (showSnackBar) {
        enqueueSnackbar('Entry updated successfully',
          {
            variant: 'success',
            autoHideDuration: 1500,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
          }
        );
      }
    } catch (error) {
      console.log({ error });
    }

  };

  return (
    <EntriesContext.Provider value={{
      ...state,
      addNewEntry,
      updateEntry,
    }}>
      {children}
    </EntriesContext.Provider>
  );
};
