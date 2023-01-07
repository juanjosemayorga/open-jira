import { useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
  sideMenuOpen: boolean;
}

export const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
};

export const UIProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  return (
    <UIContext.Provider value={{
      sideMenuOpen: false,
    }}>
      {children}
    </UIContext.Provider>
  );
};
