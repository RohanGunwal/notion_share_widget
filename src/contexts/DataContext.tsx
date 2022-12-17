import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

export const Data_Context = createContext({});

export interface appState {
  isModalOpen: boolean;
  isPopoverOpen: boolean;
  data: {
    _id: Array<string>;
    details: Array<{
      name: string;
      imageSrc?: string;
      id: string;
      email?: string;
      options: string;
      quantity?: number;
    }>;
  };
}

export function DataContext({ children }: { children: React.ReactNode }) {
  let initialValue: appState = {
    isModalOpen: false,
    isPopoverOpen: false,
    data: {
      _id: ["Everyone"],
      details: [
        {
          name: "Everyone at OSlash",
          imageSrc: "/assets/oslash-logo.png",
          id: "Everyone",
          options: "No access",
          quantity: 25,
        },
      ],
    },
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  const setModalState = (value: boolean) => {
    dispatch({
      type: "SetModal",
      payload: value,
    });
  };

  const setPopoverState = (value: boolean) => {
    dispatch({
      type: "SetPopover",
      payload: value,
    });
  };

  const setData = (
    selectedData: Array<{
      name: string;
      imageSrc?: string;
      id: string;
      email?: string;
      quantity?: number;
    }>,
    options: string
  ) => {
    let newData: Array<{
      name: string;
      imageSrc?: string;
      options: string;
      email?: string;
      quantity?: number;
    }> = [];

    let new_id: Array<string> = [];
    const { _id } = state.data;

    selectedData.forEach((ele, index) => {
      if (!_id.includes(ele.id)) {
        new_id.push(ele.id);

        newData.push({
          name: ele.name,
          imageSrc: ele.imageSrc,
          options: options,
          ...(ele.email && { email: ele.email }),
          ...(ele.quantity && { quantity: ele.quantity }),
        });
      }
    });

    dispatch({
      type: "SetPeople_Groups",
      payload: {
        _id: new_id,
        details: newData,
      },
    });
  };

  const updateOption = (options: string, index: number) => {
    let newData: Array<{
      name: string;
      id: string;
      imageSrc?: string;
      options: string;
      quantity?: string;
      email?: string;
    }> = state.data.details;

    newData[index].options = options;

    dispatch({
      type: "updateOptions",
      payload: newData,
    });
  };

  let sharedState = {
    isModalOpen: state.isModalOpen,
    isPopoverOpen: state.isPopoverOpen,
    data: state.data,
    setPopoverState,
    setModalState,
    setData,
    updateOption,
  };

  return (
    <Data_Context.Provider value={sharedState}>
      {children}
    </Data_Context.Provider>
  );
}

export function useDataContext() {
  return useContext(Data_Context);
}
