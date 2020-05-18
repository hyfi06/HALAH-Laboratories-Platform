import Layout from '../components/Layout';
import Table from '../components/Table';
import Filter from '../components/Filter';

export default function () {
  return (
    <>
      <Layout name="Alberto Camarena" typeOfUser="Administrator">
        <Filter />
        <Table />
      </Layout>
    </>
  );
}
