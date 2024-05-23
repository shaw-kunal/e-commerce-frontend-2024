import { ReactElement, useState } from "react";
import { Column } from "react-table";
import { transaction } from "./../../assets/data.json";
import TableHOC from "../../components/admin/TableHOC";
import { Link } from "react-router-dom";
import "../../styles/_transaction.scss"
interface DataTypes {
  id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action?:ReactElement;
}

const colums: Column<DataTypes>[] = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];



const arr:DataTypes[]=[
  {
    id: "mrkk1",
    amount: 5000,
    discount: 300,
     quantity: 3,
    status:<span className="red">Processing </span>,
    action:<Link to={"/admin/transaction/ljd"}>manage</Link>
  },
  {
    id: "mrkk2",
    amount: 5000,
    discount: 300,
     quantity: 3,
    status:<span className="red">Processing </span>,
    action:<Link to={"/admin/transaction/ljd"}>manage</Link>
  },
  {
    id: "mrkk3",
    amount: 5000,
    discount: 300,
     quantity: 3,
    status:<span className="red">Processing </span>,
    action:<Link to={"/admin/transaction/ljd"}>manage</Link>
  },
]

const Transaction = () => {
  const [data] = useState<DataTypes[]>(arr);

  const Table = TableHOC<DataTypes>(
    colums,
    data,
    "Transaction-box",
    "Transactions",
    true
  );

  return (
    <div>
      <div>{Table}</div>
    </div>
  );
};

export default Transaction;
