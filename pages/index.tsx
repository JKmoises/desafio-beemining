import { useState, useEffect, useReducer, ChangeEvent } from "react";

import { DataTable } from "@/components/DateTable";
import { SelectOperations } from "@/components/SelectOperations";
import { Layout } from "@/layout/Layout";

import {
  operationsInitialState,
  operationsReducer,
} from "@/reducers/operationsReducer";

import Link from "next/link";
import Router from "next/router";

import {
  formattedCollection1,
  formattedCollection2,
  pagination,
} from "../utils/helper";
import { Collection1, Collection2 } from "../interfaces/interfaces";

import Pagination from "react-bootstrap/Pagination";

interface PageProps {
  collection1: Collection1[];
  collection2: Collection2[];
  page: number;
}

export default function Home({ collection1, collection2, page }: PageProps) {
  const [operation, setOperation] = useState<string>("union");
  const [state, dispatch] = useReducer(
    operationsReducer,
    operationsInitialState
  );

  useEffect(() => {
    if (operation === "union") {
      dispatch({
        type: "UNION_OF_COLLECTIONS",
        payload: {
          collection1: formattedCollection1(collection1),
          collection2: formattedCollection2(collection2),
        },
      });
    }

    if (operation === "interseccion") {
      dispatch({
        type: "INTERSECTION_OF_COLLECTIONS",
        payload: {
          collection1: formattedCollection1(collection1),
          collection2: formattedCollection2(collection2),
        },
      });
    }

    if (operation === "diferencia") {
      dispatch({
        type: "DIFFERENCE_OF_COLLECTIONS",
        payload: {
          collection1: formattedCollection1(collection1),
          collection2: formattedCollection2(collection2),
        },
      });
    }
  }, [operation, collection1, collection2]);

  const { gridData, totalPages } = pagination(page, state.gridData);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOperation(e.target.value);
    Router.push("/");
  };

  return (
    <Layout>
      <SelectOperations operation={operation} handleChange={handleChange} />

      <DataTable gridData={gridData} />

      <Pagination
        className="display-flex justify-content-center gap-5"
      >
        {page > 1 && (
          <Pagination.First title="Anterior" onClick={() => Router.push(`/?page=${page - 1}`)} />
        )}

        {page < totalPages && (
          <Pagination.Last  title="Siguiente" onClick={() => Router.push(`/?page=${page + 1}`)} />
        )}
      </Pagination>
    </Layout>
  );
}

export async function getServerSideProps({ query }: any) {
  const page = parseInt(query.page) || 1;

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
      page,
    },
  };
}
