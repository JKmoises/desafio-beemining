import Form from "react-bootstrap/Form";

export const SelectOperations = () => {
  return (
    <Form.Select onChange={this} size="lg" className="w-50 ms-auto mt-5" defaultValue="union">
      <option value="diferencia">Diferencias</option>
      <option value="interseccion">Intersección</option>
      <option value="union">Unión Agrupada</option>
    </Form.Select>
  );
};
