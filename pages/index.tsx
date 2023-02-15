import { useState, useEffect,useReducer, ChangeEvent } from "react";
import { DataTable } from '@/components/DateTable';
import {Layout} from '@/layout/Layout';
import { SelectOperations } from '@/components/SelectOperations';
import { Collection1, Collection2 } from '../interfaces/interfaces';
import { operationsInitialState, operationsReducer } from "@/reducers/operationsReducer";


interface PageProps{
  collection1: Collection1;
  collection2: Collection2;
}


export default function Home({ collection1, collection2 }: PageProps) {
  const [operation, setOperation] = useState<string>("");
  const [state, dispatch] = useReducer(operationsReducer,operationsInitialState);

  useEffect(() => {
    
    if (operation === "union") {
    }

    if (operation === "interseccion") {
    }

    if (operation === "diferencia") {
    }
    
  }, [operation])
  

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOperation(e.target.value);

  };

  return (
    <Layout>
      <SelectOperations operation={operation} handleChange={handleChange} />

      <DataTable />
    </Layout>
  );
}

export async function getServerSideProps() {
  const [resCollection1, resCollection2] = await Promise.all([
    fetch(`${process.env.API_URL}/DataSIGGE`),
    fetch(`${process.env.API_URL}/DataCEN`),
  ]);
  const [{ Data: collection1 }, { Data: collection2 }] = await Promise.all([
    resCollection1.json(),
    resCollection2.json(),
  ]);

  return {
    props: {
      collection1,
      collection2,
    },
  };
}

