import React from 'react'
import Box from '../../common/components/Box'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getSingleAdminProduct,getAdminProducts } from '../../../../store/features/adminproductslice/adminProductsSlice'

const Product = () => {

  const products = useSelector(getAdminProducts)
  console.log(products)

  return (
    
    <div className='mt-7 flex flex-wrap gap-3'>
        
        {
          products.map(data => <Box {...data} key={data._id} />)
        }
    </div>
  )
}

export default Product