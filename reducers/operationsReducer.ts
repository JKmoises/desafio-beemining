import { Collection1, Collection2, GridData } from '../interfaces/interfaces';

interface OperationsState{
  gridData: GridData[];
}

type OperationsAction =
  | { type: "UNION_OF_COLLECTIONS"; payload: [GridData[], GridData[]] }
  | { type: "INTERSECTION_OF_COLLECTIONS"; payload: [GridData[], GridData[]] }
  | { type: "DIFFERENCE_OF_COLLECTIONS"; payload: [GridData[], GridData[]] };

export const operationsInitialState: OperationsState = {
  gridData: [],
};

export function operationsReducer(state: OperationsState, action: OperationsAction) {
  switch (action.type) {
    case "UNION_OF_COLLECTIONS":
      const [collectionUnion1, collectionUnion2] = action.payload;
      const union = [];

      for (const item1 of collectionUnion1) {
        let found = false;
        for (const item2 of union) {
          if (
            item1.concept_id === item2.concept_id &&
            item1.emp_auditada_id === item2.emp_auditada_id &&
            item1.periodo === item2.periodo &&
            item1.rut === item2.rut &&
            item1.monto === item2.monto
          ) {
            found = true;
            break;
          }
        }
        if (!found) {
          union.push(item1);
        }
      } 

      for (const item2 of collectionUnion2) {
        let found = false;
        for (const item1 of union) {
          if (
            item2.concept_id === item1.concept_id &&
            item2.emp_auditada_id === item1.emp_auditada_id &&
            item2.periodo === item1.periodo &&
            item2.rut === item1.rut &&
            item2.monto === item1.monto
          ) {
            found = true;
            break;
          }
        }
        if (!found) {
          union.push(item2);
        }
      } 


      return {
        ...state,
        gridData: union,
      };
  
    case "INTERSECTION_OF_COLLECTIONS":
      const [collectionIntersection1, collectionIntersection2] = action.payload;
      const intersection = [];

      for (const item1 of collectionIntersection1) {
        for (const item2 of collectionIntersection2) {
          if (
            item1.concept_id === item2.concept_id &&
            item1.emp_auditada_id === item2.emp_auditada_id &&
            item1.periodo === item2.periodo &&
            item1.rut === item2.rut &&
            item1.monto === item2.monto
          ) {
            intersection.push(item1);
            break;
          }
        }
      }

      return {
        ...state,
        gridData: intersection,
      };
  
    case "DIFFERENCE_OF_COLLECTIONS":
      const [collectionDifference1, collectionDifference2] = action.payload;
      const difference = [];
      for (const item1 of collectionDifference1) {
        let found = false;
        for (const item2 of collectionDifference2) {
          if (
            item1.concept_id === item2.concept_id &&
            item1.emp_auditada_id === item2.emp_auditada_id &&
            item1.periodo === item2.periodo &&
            item1.rut === item2.rut &&
            item1.monto === item2.monto
          ) {
            found = true;
            break;
          }
        }
        if (!found) {
          difference.push(item1);
        }
      }


      return {
        ...state,
        difference,
      };
  
    default:
      return state;
  }
}
