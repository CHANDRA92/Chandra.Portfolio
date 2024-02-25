import React from 'react';
import { Helmet } from 'react-helmet';
import favicon from '../../assets/CwebLogo.svg'; 
const Helmets = () => {
  return (
    <div>
      <Helmet>
        <link rel="icon" href={favicon} type="image/gif/png" />
      </Helmet>

    </div>
  );
};

export default Helmets;
