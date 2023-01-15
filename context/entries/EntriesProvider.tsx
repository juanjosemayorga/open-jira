import { useReducer } from 'react';
import { v4 as uuidv4 } from "uuid";
import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces';

export interface EntriesState {
  entries: Entry[];
}

export const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      status: "pending",
      createdAt: Date.now(),
    };

    dispatch({
      type: "[Entry] - Add-Entry",
      payload: newEntry,
    });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "[Entry] - Update-Entry", payload: entry });
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
