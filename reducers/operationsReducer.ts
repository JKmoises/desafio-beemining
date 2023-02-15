import { Collection1, Collection2, GridData } from '../interfaces/interfaces';

interface OperationsState{
  gridData: GridData[];
}

type OperationsAction =
  | { type: "UNION_OF_COLLECTIONS"; payload: [Collection1, Collection2] }
  | { type: "INTERSECTION_OF_COLLECTIONS"; payload: [Collection1, Collection2] }
  | { type: "DIFFERENCE_OF_COLLECTIONS"; payload: [Collection1, Collection2] };

export const operationsInitialState: OperationsState = {
  gridData: [],
};

export function operationsReducer(state: OperationsState, action: OperationsAction) {
  switch (action.type) {
    case "UNION_OF_COLLECTIONS":
      return state;
  
    case "INTERSECTION_OF_COLLECTIONS":
      return state;
  
    case "DIFFERENCE_OF_COLLECTIONS":
      return state;
  
    default:
      return state;
  }
}
