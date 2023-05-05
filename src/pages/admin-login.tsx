import { LogInPageSection } from '@/modules/admin-login/LogInPageSection/LogInPageSection';
import Head from 'next/head';
import React from 'react';

const AdminLogin = () => (
  <>
    <Head>
      <title>Soup &#38; Slice - admin login page</title>
      <meta name="description" content="Admin login page" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <LogInPageSection />
  </>
);

export default AdminLogin;
