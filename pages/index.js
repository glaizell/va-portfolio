import AboutMe from '@/components/AboutMe';
import ContactForm from '@/components/ContactForm';
import ContactMe from '@/components/ContactMe';
import Main from '@/components/Main';
import MyServices from '@/components/MyServices';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);

  const showContactFormHandler = () => {
    setShowContactForm(true);
  };

  const hideContactFormHandler = () => {
    setShowContactForm(false);
  };
  return (
    <>
      <Head>
        <title>Virtual Assistant</title>
        <meta
          name='description'
          content='General Virtual Assistant Portfolio'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/assets/favicon.svg' />
      </Head>
      <main className='max-w-screen'>
        <Main />
        <AboutMe />
        <MyServices />
        <ContactMe onShowContactForm={showContactFormHandler} />
        {showContactForm && (
          <ContactForm onHideContactForm={hideContactFormHandler} />
        )}
      </main>
    </>
  );
}
