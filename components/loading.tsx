import React from 'react'
import ContentLoader from 'react-content-loader'

const ProductDetails = (props: any) => {
  return (
    <ContentLoader viewBox="0 0 1300 500" height={500} width={1300} {...props}>
      <rect x="16" y="45" rx="4" ry="4" width="80" height="112" />
      <rect x="112" y="45" rx="2" ry="2" width="20" height="12" />
      <rect x="112" y="60" rx="2" ry="2" width="247" height="20" />
      <rect x="112" y="88" rx="2" ry="2" width="247" height="16" />
      <rect x="112" y="112" rx="2" ry="2" width="247" height="16" />
      <rect x="0" y="173" rx="0" ry="0" width="375" height="1" />

      <rect x="16" y="189" rx="4" ry="4" width="80" height="112" />
      <rect x="112" y="189" rx="2" ry="2" width="20" height="12" />
      <rect x="112" y="204" rx="2" ry="2" width="247" height="20" />
      <rect x="112" y="232" rx="2" ry="2" width="247" height="16" />
      <rect x="112" y="254" rx="2" ry="2" width="247" height="16" />
      <rect x="0" y="317" rx="0" ry="0" width="375" height="1" />

      <rect x="16" y="333" rx="4" ry="4" width="80" height="112" />
      <rect x="112" y="333" rx="2" ry="2" width="20" height="12" />
      <rect x="112" y="348" rx="2" ry="2" width="247" height="20" />
      <rect x="112" y="376" rx="2" ry="2" width="247" height="16" />
      <rect x="112" y="398" rx="2" ry="2" width="247" height="16" />
      <rect x="0" y="414" rx="0" ry="0" width="375" height="1" />
    </ContentLoader>
  )
}

ProductDetails.metadata = {
  name: 'Mohd Arif Uddin', // My name
  github: 'Arif-un', // Github username
  description: 'E-Commerce / Online Shop Product Details page', // Little tagline
  filename: 'ProductDetails', // filename of your loader
}

export default ProductDetails
