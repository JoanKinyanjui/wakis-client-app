import React, { useEffect, useState } from 'react'
import OneOrder from './oneOrder'
import { orders } from '@/Data/orders'
import { OrderProps } from '../../types'

function Orders() {
  const [data,setData] = useState<OrderProps[]>();
  const [status,setStatus] = useState<string>('delivered');
  const [processed,setProcessed] = useState<number>(0);
  const [delivered,setDelivered] = useState<number>(0);
  const [cancelled,setCancelled] = useState<number>(0);

  const findStatus=(status:string) =>{
  setStatus(status)
  const results = orders.filter((order)=>order.status === status);
  setData(results)
  return results.length;
  }

  const findNumber = (str:string) =>{
   if(str === 'delivered'){
    setDelivered(findStatus(str))
   }else if (str === 'processing'){
    setProcessed(findStatus(str))
   }else{
    setCancelled(findStatus(str))
   }
  }

  useEffect(()=>{
    setStatus('delivered')
    findStatus('delivered')
    findNumber('processing');
    findNumber('delivered');
    findNumber('cancelled')
  },[])

  return (
    <div className='w-full '>
    <div className='flex gap-0 justify-between md:justify-start md:gap-6 mb-2 md:mb-4 '>
      <p className={`smallText md:normalXText uppercase text-center md:text-start ${status === 'processing' ? 'text-purple_01' :'text-black_101 dark:text-grey_102'}`} onClick={()=>findStatus('processing')}>Processing ({processed})</p>
      <p className={`smallText md:normalXText uppercase text-center md:text-start ${status === 'delivered' ? 'text-purple_01' :'text-black_101 dark:text-grey_102'}`} onClick={()=>findStatus('delivered')}>Delivered ({delivered})</p>
      <p className={`smallText md:normalXText uppercase text-center md:text-start ${status === 'cancelled' ? 'text-purple_01' :'text-black_101 dark:text-grey_102'}`} onClick={()=>findStatus('cancelled')}>Cancelled / Returned ({cancelled})</p>
    </div>
    {/* orders */}
    <div>
{data && data.map((order)=>(
  <OneOrder id={order.id}  orderId={order.orderId} title={order.title} imageUrl={order.imageUrl} status={order.status}/>
))}
    </div>
    </div>
  )
}

export default Orders
