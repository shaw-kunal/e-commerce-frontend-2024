import { ReactElement, useState } from "react";
import TableHOC from "../../components/admin/TableHOC";
import { Column } from "react-table";
import "./../../styles/_products.scss";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataTypes {
  photo: ReactElement;
  name: string;
  price: string;
  stock: number;
  action: ReactElement;
}

const colums: Column<DataTypes>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataTypes[] = [
  {
    photo: (
      <img
      className="productImg"
        src="https://cdn.pixabay.com/photo/2023/05/29/00/24/blue-tit-8024809_1280.jpg"
        alt=""
      />
    ),
    name: "kunal",
    price: "30",
    action: <Link to="/admin/product/ldjf" className="manageBtn">manage</Link>,
    stock: 2,
  },
  {
    photo: (
      <img
      className="productImg"
        src="https://cdn.pixabay.com/photo/2023/05/29/00/24/blue-tit-8024809_1280.jpg"
        alt=""
      />
    ),
    name: "aniket",
    price: "50",
    action: <Link to={"/admin/product/lkf"} className="manageBtn">manage</Link>,
    stock: 3,
  }
];

const Product = () => {
  const [data] = useState<DataTypes[]>(arr);

  const Table = TableHOC<DataTypes>(
    colums,
    data,
    "dashboard-product-box",
    "Products",
    true
  );

  return (
    <div>
      <div>{Table}</div>
      <Link to='/admin/product/new' className="createNewProduct" >
      <FaPlus fontSize={20}/>
      </Link>
    </div>
  );
};

export default Product;
