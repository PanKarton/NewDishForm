import { AdminDashboard } from '@/components/templates/AdminDashboard/AdminDashboard';
import Head from 'next/head';

const AdminPanel = () => (
  <>
    <Head>
      <title>Soup &#38; Slice - admin panel page</title>
      <meta name="description" content="Admin panel page" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <>
      <AdminDashboard heading="Admin dashboard">
        <div>
          Was planning to create mock tiles ready for displaying data about how many people visit
          page, how many and what dishes have been sold, but got run out of time
        </div>
      </AdminDashboard>
    </>
  </>
);

export default AdminPanel;
