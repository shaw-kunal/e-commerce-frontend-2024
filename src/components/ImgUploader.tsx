import React, { ChangeEvent } from 'react'
import "../../src/styles/_imgUploader.scss"
import { BiPlus } from 'react-icons/bi';



interface inputProps {
    label?: string,
    value?: string,
    required?: boolean,
    name: string,
    onChange: (name:string,value:string) => void; // Update prop type
    width?: string
    isShowSelectedImg?:boolean
}


const ImgUploader = ({
    label,
    name,
    onChange,
    required,
    value,
    width = "100%",
    isShowSelectedImg=true

}: inputProps) => {


    const style: React.CSSProperties = {
        width: `${width}`
    }



  const  onChangeImgHandler = (e:ChangeEvent<HTMLInputElement>)=>{
    const file:File | undefined = e.target.files?.[0];
    const reader:FileReader = new FileReader();

    if(file){
     reader.readAsDataURL(file)
     reader.onloadend =()=>{
       if( typeof reader.result ==='string'){
        onChange(name,reader.result)
       }
     }
    }
 }


    return (
        <div className="imgUploaderContainer" style={style}>
            <label htmlFor={"fileUpload"} className="imgUploaderLabel">{label}</label>
            <div className='imgUploaderWrapper'>
            <input
                id='fileUpload'
                type={"file"}
                name={name}
                required={required}
                onChange={onChangeImgHandler}
                className="imgUploader"
            />
            <label htmlFor="fileUpload" className="imgUploaderLabel addPhotoBtn"><BiPlus fontSize={40}/></label>
            <label htmlFor='fileUpload' className='selectedImg'>
                {
                  isShowSelectedImg &&  value && <img src={value} alt="ProductImg" />
                }
            </label>
            </div>
        </div>
    )

}

export default ImgUploader
