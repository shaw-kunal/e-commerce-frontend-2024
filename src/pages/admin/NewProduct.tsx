import React from "react";
import InputField from "../../components/InputField.tsx";
import ImgUploader from "../../components/ImgUploader.tsx";
import Button from "../../components/Button.tsx";
import "../../styles/_newProduct.scss"
import CardLayout from "../../layout/CardLayout.tsx"

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

  const handleImgChange=(name:string,value:string)=>{
     setData((prev)=>({...prev,[name]:value}))
  }


  const [data, setData] = React.useState<ProductStateTypes>({
    name: "",
    photo:'',
    stock:0,
    price:0,
  });



  return (
    <div className="newProductContainer">

     
      <CardLayout classname="newProductWrapper">
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
     <ImgUploader
        label="Photo"
        name="photo"
        onChange={handleImgChange}
        value={data.photo}
      />
      <Button 
      text={"submit"}
      type="submit"
      classname="submitButton"
      />
     </CardLayout>
     
    </div>
  );
};

export default NewProduct;
