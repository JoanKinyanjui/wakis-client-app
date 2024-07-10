type orderStatus = 'processing' | 'delivered' |'cancelled'

export type OrderProps  = {
    id?: string;
    orderId?:string;
    title:string;
    imageUrl:string;
    date?:string;
    status?:orderStatus
}