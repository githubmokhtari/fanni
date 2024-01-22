import React from 'react'
import { StorePageProperties } from '@/app/(AuthorizedLayout)/stores/_models/store'
import StoreListContainer from '@/app/(AuthorizedLayout)/stores/_components/StoreListContainer'

const StoreListPage = async ({ pageParameters }: StorePageProperties) => {
  // @ts-ignore
  return <StoreListContainer pageParameters={pageParameters} />
}

export default StoreListPage
