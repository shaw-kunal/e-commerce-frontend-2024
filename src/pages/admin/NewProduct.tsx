import React from "react";
import InputField from "../../components/InputField.tsx";
import "../../styles/_newProduct.scss"

interface ProductStateTypes {
  name: string;
  price:number;
  stock:number;
  photo:string
}

const NewProduct = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [data, setData] = React.useState<ProductStateTypes>({
    name: "",
    photo:'',
    stock:0,
    price:0,

  });



  return (
    <div className="newProductContainer">
      
     <div className="newProductWrapper">
      <h2>Create New Product</h2>
     <InputField
        label="Name"
        name="name"
        onChange={handleChange}
        type="text"
        value={data.name}
      />

     <InputField
        label="Stock"
        name="stock"
        onChange={handleChange}
        type="number"
        value={data.stock}
      />
     <InputField
        label="Price"
        name="price"
        onChange={handleChange}
        type="number"
        value={data.price}
      />
     <InputField
        label="Photo"
        name="photo"
        onChange={handleChange}
        type="string"
        value={data.photo}
      />
     </div>
    </div>
  );
};

export default NewProduct;
