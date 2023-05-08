import { AdminDashboard } from '@/components/templates/AdminDashboard/AdminDashboard';
import { NewDishFormSection } from '@/modules/admin-panel/NewDishFormSection/NewDishFormSection';
import Head from 'next/head';

const AddNewDish = () => (
  <>
    <Head>
      <title>Soup &#38; Slice - new dish form</title>
      <meta name="description" content="Admin panel page - new dish form" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <>
      <AdminDashboard heading="Add new dish!">
        <NewDishFormSection />
      </AdminDashboard>
    </>
  </>
);

export default AddNewDish;
