import { GridData } from '../interfaces/interfaces';
interface AppProps {
  data: GridData;
}

export const DataRegister = ({ data }: AppProps) => {
  const {concept_id,emp_auditada_id,periodo,rut,monto } = data;
  return (
    <tr>
      <td>{concept_id}</td>
      <td>{emp_auditada_id}</td>
      <td>{periodo}</td>
      <td>{rut}</td>
      <td>{monto}</td>
    </tr>
  );
};
