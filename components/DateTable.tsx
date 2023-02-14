import Table from "react-bootstrap/Table";
import { DataRegister } from "./DataRegister";

export const DataTable = () => {
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
        <DataRegister />
      </tbody>
    </Table>
  );
};
