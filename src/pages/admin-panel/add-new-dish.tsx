import { AdminDashboard } from '@/components/templates/AdminDashboard/AdminDashboard';
import { NewDishForm } from '@/modules/admin-panel/NewDishForm/NewDishForm';
import Head from 'next/head';

const AddNewDish = () => (
  <>
    <Head>
      <title>Soup &#38; Slice - admin panel page</title>
      <meta name="description" content="Admin panel page" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <>
      <AdminDashboard heading="Add new dish!">
        <NewDishForm />
      </AdminDashboard>
    </>
  </>
);

export default AddNewDish;
