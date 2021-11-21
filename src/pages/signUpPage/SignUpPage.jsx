import React from 'react';
import ChildrenProfile from '../../components/childrenProfile/childrenProfile';
import DownloadOffline from '../../components/downloadOffline/downloadOffline';
import EnjoyTv from '../../components/enjoyTv/enjoyTv';
import Footer from '../../components/footer/footer';
import FrequentlyAskedQuestions from '../../components/frequentlyAskedQuestions/frequentlyAskedQuestions';
import NavbarAndHeader from '../../components/navbarAndHeader/navbarAndHeader';
import WatchEverywhere from '../../components/watchEverywhere/watchEverywhere';

function SingUpPage() {
  return (
    <>
      <NavbarAndHeader />
      <EnjoyTv />
      <DownloadOffline />
      <WatchEverywhere />
      <ChildrenProfile />
      <FrequentlyAskedQuestions />
      <Footer />
    </>
  );
}

export default SingUpPage;
