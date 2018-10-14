import React, { Component } from 'react';
import { getStaticData } from '../utilities';

import CatalogItem from './CatalogItem';
import Loader from './Loader';

class Catalog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      dataIsFetching: true
    };

    this.handleItemSelected = this.handleItemSelected.bind(this);
  }

  componentDidMount() {
    //API-like loader
    setTimeout(() => {
      this.setState({
        items: getStaticData(),
        dataIsFetching: false
      });
    }, 1000);
  }

  handleItemSelected(id) {
    const { items } = this.state;

    const newItems = items.map((item, index) => {
      if (index === id && item !== item.disabled) {
        return {
          ...item,
          selected: !item.selected
        }
      } else {
        return item;
      }
    });

    this.setState({
      items: newItems
    })
  }

  render() {
    const { items, dataIsFetching } = this.state;

    if (dataIsFetching) return (
      <div className="catalog">
        <Loader />
      </div>
    );

    return (
      <div className="catalog">
        {items.map((item, index) => (
          <CatalogItem
            key={index}
            data={item}
            onSelect={() => this.handleItemSelected(index)}
            selected={item.selected}
          />
        ))}
      </div>
    )
  }
}

export default Catalog;
