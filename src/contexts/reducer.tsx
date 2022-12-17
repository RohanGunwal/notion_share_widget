import { appState } from "./DataContext";

export const reducer = (
  state: appState,
  action: {
    type: string;
    payload: object | string | number | boolean | Array<any> | any;
  }
) => {
  switch (action.type) {
    case "SetModal": {
      return { ...state, isModalOpen: action.payload };
    }

    case "SetPopover": {
      return { ...state, isPopoverOpen: action.payload };
    }

    case "SetPeople_Groups": {
      return {
        ...state,
        data: {
          _id: [...state.data._id, ...action.payload._id],
          details: [...state.data.details, ...action.payload.details],
        },
      };
    }

    case "updateOptions": {
      return {
        ...state,
        data: {
          _id: state.data._id,
          details: action.payload,
        },
      };
    }

    default: {
      return state;
    }
  }
};
