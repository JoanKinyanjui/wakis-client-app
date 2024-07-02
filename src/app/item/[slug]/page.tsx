import Item from '@/components/Item/Item';
import React from 'react';

function ItemPage({params}:{params:{slug:string}}) {
  return (
    <div>
    <Item product={params.slug} />
    </div>
  )
}

export default ItemPage
