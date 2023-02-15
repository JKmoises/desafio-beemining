export interface GridData {
  concept_id: number;
  emp_auditada_id: number;
  periodo: number;
  rut: string;
  monto: number;
}

export interface Collection1 {
  concept_id: number;
  emp_auditada_id: number;
  periodo: number;
  rut_facturadora: string;
  empresa_facturadora: string;
  concepto: string;
  codigo: string;
  monto_neto: number;
  fecha_de_recepcion: string;
  n_folio_factura: number;
  correlativo_proceso_de_pago: number;
  portal: string;
  link_csv: string;
}


export interface Collection2 {
  concept_id: number;
  emp_auditada_id: number;
  periodo: number;
  nemotecnico_deudor: string;
  rut_deudor: string;
  nemotecnico_acreedor: string;
  rut_acreedor: string;
  monto: number;
  concepto: string;
  tipo: string;
  ventana_de_facturacion: string;
  link_csv: string;
}


