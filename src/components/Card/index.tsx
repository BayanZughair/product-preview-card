import CardContainer from './CardStyles'

/**
* Component for showing a card product
* @component
*
*/

const Card = ({ product }: TCard): JSX.Element => {
  return (
    <CardContainer>
      <div className='product-image'>
        <img
          srcSet={`${product[0].image.src[0]} 1000w,
          ${product[0].image.src[1]} 1200w`}
          src={product[0].image.src[0]}
          alt={product[0].image.alt}
        />
      </div>
      <div className='content'>
        <header>
          <p>{product[0].section}</p>
          <h2>{product[0].title}</h2>
        </header>
        <div className='desciption'>
          <p className='copy'>{product[0].description}</p>
          <div className='price'>
            <p className='price-tag'>{`$${product[0].price.currentPrice}`}</p><p className='discount-from'>{`$${product[0].price.discount}`}</p>
          </div>
        </div>
        <button role='button' name='addToCart'> <span>{product[0].button}</span></button>
      </div>
    </CardContainer>
  )
}

export default Card
