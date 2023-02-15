import { ChangeEvent } from 'react';
import Form from "react-bootstrap/Form";

interface AppProps {
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  operation: string;
}

export const SelectOperations = ({ handleChange, operation }: AppProps) => {
  return (
    <Form.Select
      onChange={handleChange}
      size="lg"
      className="w-50 ms-auto mt-5"
      value={operation}
    >
      <option value="union">Unión Agrupada</option>
      <option value="interseccion">Intersección</option>
      <option value="diferencia">Diferencias</option>
    </Form.Select>
  );
};
