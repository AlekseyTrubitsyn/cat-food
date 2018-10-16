import React from 'react';
import PropTypes from 'prop-types';

const CatalogItem = (props) => {
  const { data = {}, selected, onSelect } = props;

  const {
    header = 'Сказочное заморское яство',
    headerSelectedHovered = 'Котэ не одобряет?',
    title,
    subtitle,
    features,
    size,
    footer,
    disabled,
    image
  } = data;

  const handleClick = (element) => {
    if (!disabled) {
      onSelect();
    } else {
      element.classList.add('shake');

      setTimeout(() => {
        if (element) {
          element.classList.remove('shake')
        }
      }, 400);

    }
  }

  const handleMouseEnter = (element) => {
    if (!disabled) {
      element.classList.add('hovered');
    }
  }

  const handleMouseLeave = (element) => {
    element.classList.remove('hovered');
  }

  const articleClassName = 'catalog-item' + (disabled ? ' disabled' : '') + (selected ? ' selected' : '');

  return (
    <article
      className={articleClassName}
      onClick={(e) => handleClick(e.currentTarget)}
      onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
      onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
    >
      <header className="catalog-item__header">
        <div className="catalog-item-header__corner"></div>
        <div className="catalog-item-header__text-container">
          <p className="catalog-item-header__text catalog-item-header__text--default">{header}</p>
          {selected && <p className="catalog-item-header__text catalog-item-header__text--hover">{headerSelectedHovered}</p>}
        </div>
      </header>
      <div className="catalog-item__main">
        <h2 className="catalog-item__title">{title}</h2>
        <h3 className="catalog-item__subtitle">{subtitle}</h3>
        {features &&
          <ul className="catalog-item__features">
            {features.map((item, index) => (
              <li
                key={index}
                className="catalog-item__feature"
              >{item.split(' ')
                    .map(subitem => isNaN(subitem) ? subitem + ' ' : (<b>{subitem}</b> ))
                    .reduce((result, subitem) => [...result, ' ', subitem], [])
              }</li>
            ))}
          </ul>
        }
        <div className="catalog-item__image-container">
          <img
            className="catalog-item__image"
            src={image.source}
            alt={image.alt}
            width="auto"
            height="auto"
          />
        </div>
        <div className="catalog-item__size">
          <p className="catalog-item__amount">{size.value}</p>
          <p className="catalog-item__unit">{size.unit}</p>
        </div>
      </div>
      <footer className="catalog-item__footer">
        {disabled
          ? (<p>Печалька, {subtitle} закончился.</p>)
          : selected
            ? (<p>{footer}</p>)
            : (<p>Чего сидишь? Порадуй котэ, <button className="catalog-item__link" onClick={handleClick}>купи.</button></p>)
        }
      </footer>
    </article>
  );
}

CatalogItem.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.string,
    headerSelectedHovered: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    size: PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
      unit: PropTypes.string.isRequired
    }),
    footer: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    image: PropTypes.shape({
      source: PropTypes.string,
      alt: PropTypes.string
    })
  }),
  selected: PropTypes.bool,
  onSelect: PropTypes.func
}

export default CatalogItem;
