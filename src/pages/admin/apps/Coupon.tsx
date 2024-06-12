import { useEffect, useState } from "react";
import CardLayout from "../../../layout/CardLayout";
import "../../../styles/_adminApp.scss";
import Box from "../../../components/Box";
import InputField from "../../../components/InputField";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
const Coupon = () => {
  const [criteria, setCriteria] = useState({
    size: 8,
    prefix: "",
    number: true,
    symbol: false,
    character: false,
  });

  const [coupon, setCoupon] = useState<string>("");
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type, name, value, checked } = e.target;
    if (type === "checkbox") {
      setCriteria((prev) => ({ ...prev, [name]: checked }));
    } else {
      setCriteria((prev) => ({ ...prev, [name]: value }));
    }
  };

  const generateCoupon = () => {
    let allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let digits = "0123456789";
    let symbols = "!@#$%^&*+|;?";

    if (!criteria.number && !criteria.symbol && !criteria.character)
      return alert("choose atlease one");

    let result: string = criteria.prefix;

    let combo = "";

    if (criteria.number) combo += digits;
    if (criteria.character) combo += allCharacters;
    if (criteria.symbol) combo += symbols;
    const len = Number(criteria.size) - criteria.prefix.length;
    console.log(result);
    for (let i = 0; i < len; i++) {
      const randomIndex = Math.floor(Math.random() * combo.length);
      result += combo[randomIndex];
      console.log(combo);
    }

    setCoupon(result);
  };

const copiedCoupon = async()=>{
  await window.navigator.clipboard.writeText(coupon);
  setIsCopied(true);
}

useEffect(()=>{
  const timeoutId = setTimeout(()=>{
    setIsCopied(false);
  },2000);
  return  ()=>clearTimeout(timeoutId)

},[isCopied])

  return (
    <div className="adminAppContainer">
      <CardLayout>
        <Box classname="coupon-container" title={"Generate Your Coupon"}>
          <InputField
            name="prefix"
            type="text"
            onChange={handleChage}
            placeholder="Add prefix"
            value={criteria.prefix}
          />

          <InputField
            name="size"
            type="number"
            value={criteria.size}
            onChange={handleChage}
          />

          <Checkbox
            name="symbol"
            onChange={handleChage}
            label="Symbol"
            value={criteria.symbol}
          />
          <Checkbox
            onChange={handleChage}
            name={"number"}
            label="Number"
            value={criteria.number}
          />
          <Checkbox
            onChange={handleChage}
            name={"character"}
            label="Character"
            value={criteria.character}
          />
          <Button text="Generate" onClick={generateCoupon} />
            {coupon && (

          <div className="couponResult">
              
              <code className="coupon-code">
                {coupon}
              </code>
                 <div className="copy-coupon" style={{
                  backgroundColor:`${isCopied ?'#a176eb':"black"}`
                 }} onClick={copiedCoupon}>{isCopied ? "Copied" : "Copy"}</div>
          </div>
            )}
        </Box>
      </CardLayout>
    </div>
  );
};

export default Coupon;
