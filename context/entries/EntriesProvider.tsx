import { useReducer } from 'react';
import { v4 as uuidv4 } from "uuid";
import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces';

export interface EntriesState {
  entries: Entry[];
}

export const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "Pendiente: Non ad pariatur excepteur labore nulla ullamco.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "En-progreso: Commodo id laborum irure est excepteur et ipsum dolor exercitation ipsum exercitation.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description: "Terminada: Do duis consequat reprehenderit ut velit labore dolore ad.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
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

  return (
    <EntriesContext.Provider value={{
      ...state,
      addNewEntry,
    }}>
      {children}
    </EntriesContext.Provider>
  );
};
