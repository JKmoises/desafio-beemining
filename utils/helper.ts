import { Collection1, Collection2, GridData } from "@/interfaces/interfaces";

export function formattedCollection1(collection: Collection1[]): GridData[] {
   return collection.map(({ concept_id, emp_auditada_id, periodo, ...item }) => ({
    concept_id,
    emp_auditada_id,
    periodo,
    rut: item.rut_facturadora,
    monto: item.monto_neto,
  })).sort((a, b) => a.concept_id - b.concept_id);
}

export function formattedCollection2(collection: Collection2[]): GridData[] {
  return collection.map(({ concept_id, emp_auditada_id, periodo, ...item }) => ({
    concept_id,
    emp_auditada_id,
    periodo,
    rut: item.rut_acreedor,
    monto: item.monto,
  })).sort((a, b) => a.concept_id - b.concept_id);
  
}


export function pagination(page: number,data: GridData[]) {
  const pageSize = 10;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const gridData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / pageSize);

  return { gridData, totalPages };
}