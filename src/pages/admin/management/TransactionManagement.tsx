import { useState } from 'react'
import { OrderItemType, OrderType } from '../../../types'
import "../../../styles/_transactionManagement.scss"
import CardLayout from '../../../layout/CardLayout'
import Box from '../../../components/Box'
import KeyValueList from '../../../components/KeyValueList'
import Button from '../../../components/Button'
import Avatar from '../../../components/Avatar'

const img = ''

const ordetItems: OrderItemType[] = [
    {
        name: "puma shoe",
        photo: img,
        _id: 'kdisdl',
        price: 500,
        quantity: 3
    }
]

const TransactionManagement = () => {


    const [order, setOrder] = useState<OrderType>({
        name: "Kunal kumar shaw",
        address: "Gandhinagar,kankinara",
        city: "kolkata",
        country: "India",
        pincode: 743126,
        state: "WB",
        subtotal: 4000,
        _id: "40045",
        discount: 4,
        orderItem: ordetItems, shippingCharges: 0,
        status: "Delivered",
        tax: 3,
        total: 525
    })
    return (
        <div className='transactionManagement'>

            <CardLayout classname='cardItemContainer'>
                <h1>Order Items</h1>
                <Box title={"Order Info"} >


                    <KeyValueList
                        icon={<Avatar classname='OrderItemImg' img="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D" />}
                        k={<span><span>Puma Shoes </span><span>$2000 * 4</span></span>}
                        value={8000}
                        seperator={"="}
                        classname='orderInfoList'
                         />
                         
                    <KeyValueList
                        icon={<Avatar classname='OrderItemImg' img="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D" />}
                        k={
                            <span>
                                <span>Puma Shoes </span>
                                <span>$2000 * 4</span>
                            </span>
                        }
                        value={8000}
                        seperator={"="}
                        classname='orderInfoList'
                         />



                </Box>
            </CardLayout>
            <CardLayout classname='cardInfoContainer'>
                <h1 className='title'>Order Info</h1>
                <Box title={"Order Info"} >
                    <KeyValueList icon={'*'} k={"name"} value={"kunal kumar shaw"} seperator={"-"} classname='listContainer' />
                    <KeyValueList icon={"*"} k={"Address"} value={"h/no-32/25, gandhinagar ,kankinagar,WB"} seperator={"-"} classname='listContainer' />
                </Box>
                <Box title={"Amount Info"} >

                    <KeyValueList
                        icon={'*'}
                        k={"Subtotal"}
                        value={4200}
                        seperator={"-"}
                        classname='amountInfo' />


                    <KeyValueList
                        icon={"*"}
                        k={"Shipping Charges"}
                        value={0}
                        seperator={"="}
                        classname='amountInfo' />


                    <KeyValueList
                        icon={"*"}
                        k={"Tax"}
                        value={200}
                        seperator={":"}
                        classname='amountInfo' />

                    <KeyValueList
                        icon={"*"}
                        k={"Total"}
                        value={3000}
                        seperator={"="}
                        classname='amountInfo' />
                </Box>
                <Box title={"Status Info"} >
                    <KeyValueList icon={'#'} k={"Status"} value={
                        <p className='red-text cursor'>Processing</p>
                    } seperator={"-"} classname='listContainer' />
                </Box>
                <Button text='Process Status' classname='statusBtn' />
            </CardLayout>

        </div>
    )
}

export default TransactionManagement
