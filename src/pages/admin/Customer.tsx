import  { ReactElement,useState } from 'react'
import { Column } from 'react-table'
import TableHOC from '../../components/admin/TableHOC'
import "./../../styles/_customer.scss"
import { MdDelete } from 'react-icons/md'

interface DataTypes{
   avatar:ReactElement,
   name:string,
   gender:string,
   email:string,
   role:string,
   action:ReactElement

}
const colums:Column<DataTypes>[]=[
  {
    Header:"Avatar",
    accessor:'avatar'
  },
  
  {
    Header:"Name",
    accessor:'name'
  },
  {
    Header:"Gender",
    accessor:'gender'
  },
  {
    Header:"Email",
    accessor:'email'
  },
  {
    Header:"Role",
    accessor:'role'
  },
  {
    Header:"Action",
    accessor:'action'
  }
]

const arr:DataTypes[]=[
  {
    avatar: (
      <img
      className="avatar"
        src="https://cdn.pixabay.com/photo/2023/05/29/00/24/blue-tit-8024809_1280.jpg"
        alt=""
      />
    ),
    name: "kunal",
    gender: "male",
    email: 'shawkunal3010@gmail.com',
    role:"user",
    action:<div><MdDelete/></div>
  }
]
const Customer = () => {
  const [data] = useState<DataTypes[]>(arr);

  const Table = TableHOC<DataTypes>(
    colums,
    data,
    "customer-box",
    "Customer",
    true
  )
  return (
    <div>
    <div>{Table}</div>
      
    </div>
  )
}

export default Customer
