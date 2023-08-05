import Card from '../components/Card'
import styled from 'styled-components/macro'
import imageMobile from '../assets/image-product-mobile.jpg'
import imageDesktop from '../assets/image-product-desktop.jpg'

export const productData: Tproduct[] = [
  {
    section: 'Perfume',
    title: 'Gabrielle essence eau de parfum',
    image: {
      src: [imageMobile, imageDesktop],
      alt: 'Product image description'
    },
    description: 'A floral, solar and voluptuos interpretation composed by Oliver Polge, Perfume-Creator for the house of CHANNEL',
    price: {
      currentPrice: 149.99,
      discount: 169.99
    },
    button: 'Add to Cart'
  }
]

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`

const Presentation = (): JSX.Element => {
  return (
    <Container>
      <Card product={productData} />
    </Container>
  )
}

export default Presentation
