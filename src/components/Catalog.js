import React from 'react';
import { getStaticData } from '../utilities';

import CatalogItem from './CatalogItem';

const Catalog = () => {
  const items = getStaticData();

  return (
    <div className="catalog">
      {items.map((item, index) => (
        <CatalogItem
          key={index}
          data={item}
        />
      ))}
    </div>
  );
}

export default Catalog;
