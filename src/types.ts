export type  OrderItemType={
    _id:string,
    name:string,
    photo:string,
    price:number,
    quantity:number
}

export type OrderType ={
    name:string,
    address:string,
    city:string,
    state:string,
    country:string,
    pincode:number,
    status:"processing" | "shipped"| "Delivered"
    subtotal:number;
    discount:number;
    shippingCharges:number;
    tax:number,
    total:number,
    orderItem:OrderItemType[],
    _id:string

}