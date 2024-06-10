import React from 'react'
import InputField from '../../../components/InputField';
import ImgUploader from '../../../components/ImgUploader';
import Button from '../../../components/Button';
import "../../../styles/_productManagement.scss"
import CardLayout from '../../../layout/CardLayout';


interface ProductStateTypes {
  name: string;
  price: number;
  stock: number;
  photo: string
}


const ProductManagement = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImgChange = (name: string, value: string) => {
    setData((prev) => ({ ...prev, [name]: value }))
  }


  const [data, setData] = React.useState<ProductStateTypes>({
    name: "",
    photo: '',
    stock: 0,
    price: 0,
  });




  return (
    <section className='productManagementContgainer'>
      <div className='updatedproductContainer'>
      <CardLayout>
        <div className='updatedproductWrapper'>
           <span className='productStock'>10 available</span>
           <p className='productId'>ID-mrAK253088</p>
           <div className='productImage'>
            <img src="https://cdn.pixabay.com/photo/2013/07/13/11/47/low-shoe-158667_640.png" alt="" />
           </div>
           <span className="productTitle">Puma Shoe</span>
           <h2 className='productCost'>2000</h2>


        </div>
      </CardLayout>
  
      </div>
      <div className='manageContainer'>
        <CardLayout>    
          <h2>Manage Your Product</h2>
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
            text={"Update"}
            type="submit"
          />
        </CardLayout>
      </div>


    </section>
  )
}

export default ProductManagement
