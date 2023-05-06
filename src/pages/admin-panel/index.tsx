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
        <div>dashboard</div>
      </AdminDashboard>
    </>
  </>
);

export default AdminPanel;