import { createGlobalStyle } from 'styled-components'
import '@fontsource/fraunces/700.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/700.css'

const GlobalStyle = createGlobalStyle`
  :root {
  --light: hsl(158, 36%, 37%);
  --cream: hsl(30, 38%, 92%);

   --darkBlue: hsl(212, 21%, 14%);
  --grayishBlue: hsl(228, 12%, 48%);
  --white: hsl(0, 0%, 100%);

  --fs-paragraph: 14px;
  --font-montserrat: 'Montserrat', sans-serif;
  --font-fraunces: 'Fraunces', sans-serif;

  --font-body: var(--font-montserrat);

  --m-medium: 1.2rem;
  --card-width: 344px;
  }

  body {
    background-color: var(--cream);
    font-family: var(--font-body);
    font-size: var(--fs-paragraph);
    color: var(--grayishBlue);
  }

  img {
    width:100%;
  }
  h2 {
    font-family: var(--font-fraunces);
  }
`

export default GlobalStyle
