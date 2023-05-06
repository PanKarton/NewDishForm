import { AdminDashboard } from '@/components/templates/AdminDashboard/AdminDashboard';
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
      <AdminDashboard>
        <p>new dish</p>
      </AdminDashboard>
    </>
  </>
);

export default AddNewDish;
