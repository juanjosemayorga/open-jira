import { useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

export const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

export const UIProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const openSideMenu = () => {
    dispatch({ type: "UI - Open Sidebar" });
  };

  const closeSideMenu = () => {
    dispatch({ type: "UI - Close Sidebar" });
  };

  const setIsAddingEntry = (value: boolean) => {
    dispatch({
      type: "UI - Is Adding Entry",
      payload: value,
    });
  };

  const startDragging = () => {
    dispatch({ type: "UI - Start Dragging" });
  };

  const stopDragging = () => {
    dispatch({ type: "UI - Stop Dragging" });
  };

  return (
    <UIContext.Provider value={{
      ...state,
      openSideMenu,
      closeSideMenu,
      setIsAddingEntry,
      startDragging,
      stopDragging,
    }}>
      {children}
    </UIContext.Provider>
  );
};
