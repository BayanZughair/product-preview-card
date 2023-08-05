import Card from '.'
import { productData } from '../../pages/Presentation'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { test, expect, beforeEach, describe } from 'vitest'

beforeEach(() => {
  render(<Card product={productData} />)
})

describe('<Card />', async () => {
  test('Card component image alt', () => {
    expect(screen.getByAltText('Product image description')).toBeTruthy()
  })

  test('Card component section text', () => {
    expect(screen.getByText('Perfume')).toBeTruthy()
  })

  test('Card component title text', () => {
    expect(screen.getByText('Gabrielle essence eau de parfum')).toBeTruthy()
  })

  test('Card component price', () => {
    expect(screen.getByText('$149.99')).toBeTruthy()
  })

  test('Card component discount from price', () => {
    expect(screen.getByText('$169.99')).toBeTruthy()
  })

  test('Card component button text', () => {
    expect(screen.getByText('Add to Cart')).toBeTruthy()
  })

  test('Card component button text', () => {
    expect(screen.getByRole('button')).toBeTruthy()
  })
})
