import FooterComponents from '@/src/components/Footer/FooterComponents'
import ProductPage from '@/src/navigation/Products/ProductPage'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Chargement...</div>}>
        <ProductPage />
      </Suspense>
      <FooterComponents />
    </div>
  )
}

export default page
