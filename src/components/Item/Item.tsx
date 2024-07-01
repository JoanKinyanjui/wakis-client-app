import React from 'react'
import Footer from '../Footer'
import CustomerReviews from './CustomerReviews/customerReviews'
import AboutStore from './AboutStore/aboutStore'
import ItemImages from './ItemImages'
import MoreInfo from './moreInfo'
import ItemDescription from './itemDescription'

function Item() {
  return (
    <div>
      <ItemImages />
      <MoreInfo />
      <ItemDescription />
      <AboutStore />
      <CustomerReviews />
      <Footer />
    </div>
  )
}

export default Item
