import React from 'react';
import HeaderPrimary from '../../components/headerPrimary';

// Styles
import './styles.scss';

const HomeScreen = () => {
  return <div className='home-page-style'>
    <HeaderPrimary />
    <div className='title4'>Hello India Welcome to India</div>
    <p className='description'>
      Writer Aaron Mahnke launched his podcast "Lore" in 2015 and it has gained critical acclaim in the time since, including earning Best of 2015 honors from iTunes. The audio program is now becoming a TV series as an anthology that, like the podcast, uncovers real-life events that spawned people's
    </p>
  </div>;
};

export default HomeScreen;
