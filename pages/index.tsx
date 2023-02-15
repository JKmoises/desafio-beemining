import { DataTable } from '@/components/DateTable';
import { SelectOperations } from '@/components/SelectOperations';
import {Layout} from '@/layout/Layout';
import { Collection1, Collection2 } from '../interfaces/interfaces';


interface PageProps{
  collection1: Collection1;
  collection2: Collection2;
}


export default function Home({ collection1, collection2 }: PageProps) {

  return (
    <Layout>
      <SelectOperations />

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

