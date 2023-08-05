import styled from 'styled-components/macro'
import iconCart from '../../assets/icon-cart.svg'

const CardContainer = styled.article`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  margin-inline: 1rem;
  margin-block: 1rem;
  border-radius: .5rem;
  overflow: hidden;
  /* min-height: 80vh; */
  max-height: 629px;
  max-width: var(--card-width);
  box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.07);
  .product-image img {
    height: 240px;
    width: 344px;
  }

  header {
    margin-inline: var(--m-medium);
    p {
      text-transform: uppercase;
      letter-spacing: .3rem;
      font-size: .9rem;
    }
    h2 {
      font-size: 2rem;
      color: var(--darkBlue);
      line-height: 1;
      margin-block: 0;
      text-transform: capitalize;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
  }
  .desciption {
    margin-inline: var(--m-medium);
    line-height: 1.7;
    .copy {
      width: 93%;
    }
    .price,.discount-from {
      margin: 0;
      display: inline;
    }
    .price{
      display: flex;
      align-items: center;
      margin-block-end: 16px;
    }
    .price-tag {
      font-family: var(--font-fraunces);
      font-size: 2rem;
      color: var(--light);
      margin: 0;
    }
    .discount-from {
      text-decoration: line-through;
      font-size: .9rem;
      margin-inline-start: var(--m-medium);
    }
  }
  button {
    font-weight: 700;
    border: 0;
    background-color: var(--light);
    margin-inline: var(--m-medium);
    margin-block-end: var(--m-medium);
    padding-block: 1rem;
    background-image: url(${iconCart});
    background-repeat: no-repeat;
    background-position: 25% 50%;
    transition: background-color .6s ease;
  }

  @media (min-width: 688px)  {
    flex-direction: row;
    max-width: 600px;
    max-height: 900px;
    header h2 {
      width: 80%;
    }
    .product-image img {
      min-height: 457px;
      min-width: 300px;
      width: 300px;
      height: 100%;
    }
    .content {
      --m-medium: 1.7rem;
      justify-content: space-around;
      flex: 1 0 50%;
      .copy {
        width: 90%;
      }
      button:hover {
        background: var(--darkBlue);
        background-image: url(${iconCart});
        background-repeat: no-repeat;
        background-position: 25% 50%;
      }
      button:focus, button:focus-visible, button:hover {
        outline: none;
        border: 0;
      }
    }
  }
`

export default CardContainer
