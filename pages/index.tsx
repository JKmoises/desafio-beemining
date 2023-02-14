import { DataTable } from '@/components/DateTable';
import { SelectOperations } from '@/components/SelectOperations';
import {Layout} from '@/layout/Layout';


export default function Home() {
  return (
    <Layout>
      <SelectOperations />
      
      <DataTable/>


    </Layout>
  );
}
