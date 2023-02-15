import Table from "react-bootstrap/Table";
import { DataRegister } from "./DataRegister";
import { GridData } from '../interfaces/interfaces';
import Placeholder from 'react-bootstrap/Placeholder';

interface AppProps{
  gridData: GridData[];
}

export const DataTable = ({ gridData }: AppProps) => {
  return (
    <Table striped hover responsive className="mt-4 border text-center">
      <thead className="bg-primary text-white text-uppercase">
        <tr className="align-middle">
          <th>Concept Id</th>
          <th>Emp Auditada Id</th>
          <th>Periodo</th>
          <th>Rut</th>
          <th>Monto</th>
        </tr>
      </thead>
      <tbody>
        {gridData.length === 0 ? (
          <>
            <tr>
              <td colSpan={5}>
                <Placeholder xs={12} bg="secondary" />
              </td>
            </tr>
            <tr>
              <td colSpan={5}>
                <Placeholder xs={12} bg="secondary" />
              </td>
            </tr>
            <tr>
              <td colSpan={5}>
                <Placeholder xs={12} bg="secondary" />
              </td>
            </tr>
            <tr>
              <td colSpan={5}>
                <Placeholder xs={12} bg="secondary" />
              </td>
            </tr>
            <tr>
              <td colSpan={5}>
                <Placeholder xs={12} bg="secondary" />
              </td>
            </tr>
          </>
        ) : (
          gridData.map((data, i) => <DataRegister key={i + 1} data={data} />)
        )}
      </tbody>
    </Table>
  );
};
