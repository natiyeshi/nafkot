import { useState } from "react";
import CustomeInput from "./CustomeInput";
import { useSelector } from "react-redux";
import { getCart } from "../../../store/features/cartslice/cartSlice";
import axios from "../../../core/hooks/axios";
import { useNavigate } from "react-router-dom";
import PayButton from "./PayButton";

const FormDiv = () => {
  const navitator = useNavigate();
  const carts = useSelector(getCart);
  const cart = [];
  carts.cartItems.forEach((elem) => {
    cart.push({ product: elem.data, amount: elem.amount });
  });
  const intialFormData = {
    totalPrice: carts.total,
    senderFirstName: "",
    senderLastName: "",
    senderEmail: "",
    senderPhoneNumber: "",
    reciverFirstName: "",
    reciverLastName: "",
    reciverEmail: "",
    reciverPhoneNumber: "",
    reciverPhoneNumber2: "",
    reciverCity: "",
    reciverRegion: "",
    message: "",
    cart,
  };

  const [formData, setFormData] = useState(intialFormData);
  const [err, setErr] = useState("");
  const onChangeFunc = ({ target }) => {
    setFormData((data) => ({ ...data, [target.name]: target.value }));
  };

  const submit = () => {
    console.log(formData);
    for (let i in formData) {
      if (typeof formData[i] == "string" && formData[i].length < 3) {
        setErr(`${i} should be at least 3 letter`);
        return;
      }
      if (typeof formData[i] == "number" && formData[i] <= 0) {
        setErr(` invalid ${i} `);
        return;
      }
      if (formData.cart < 1) {
        setErr(` invalid cart data`);
      }
    }
    setErr("");
    sendData(formData);
  };

  const sendData = async (data) => {
    try {
      /*
                data ->  totalPrice 
                     ->  cart [ {amount , product } , {} , {}] data.cart[0].product.
                     ->  information
            
            */

      const result = await axios.post("/transaction/buyitems", data);
      const res = result.data;
      alert("Your file is saved!");
      navitator("/");
    } catch (e) {
      console.log(e);
      setErr(e.response.data.error.message);
    }
  };

  return (
    <form className=" px-4" onSubmit={(e) => e.preventDefault()}>
      <div className="ps-4 text-red-500 font-semibold my-2 mt-3">{err}</div>

      <div className="flex gap-10 max-md:gap-3 max-md:flex-col ps-4 py-2 justify-around ">
        <CustomeInput
          name={"senderFirstName"}
          label={"First Name"}
          onChangeFunc={onChangeFunc}
        />
        <CustomeInput
          name={"senderLastName"}
          label={"Last Name"}
          onChangeFunc={onChangeFunc}
        />
      </div>

      <div className="flex max-md:gap-3 max-md:flex-col ps-4 py-2 justify-around gap-10">
        <CustomeInput
          name={"senderEmail"}
          label={"Email"}
          onChangeFunc={onChangeFunc}
        />

        <CustomeInput
          name={"senderPhoneNumber"}
          label={"Phone Number"}
          onChangeFunc={onChangeFunc}
        />
      </div>

      <div className="flex max-md:gap-3 max-md:flex-col ps-4 py-2 justify-around gap-10">
        <CustomeInput
          name={"reciverFirstName"}
          label={"Reciver First Name"}
          onChangeFunc={onChangeFunc}
        />
        <CustomeInput
          name={"reciverLastName"}
          label={"Reciver Last Name"}
          onChangeFunc={onChangeFunc}
        />
      </div>

      <div className="flex max-md:gap-3 max-md:flex-col ps-4 py-2 justify-around gap-10">
        <CustomeInput
          name={"reciverPhoneNumber"}
          label={"Reciver Phone Number"}
          onChangeFunc={onChangeFunc}
        />
        <CustomeInput
          name={"reciverPhoneNumber2"}
          label={"Reciver Phone Number 2"}
          onChangeFunc={onChangeFunc}
        />
      </div>

      <div className="flex ps-4 max-md:gap-3 max-md:flex-col py-2 justify-around gap-10">
        <CustomeInput
          name={"reciverCity"}
          label={"Reciver City"}
          onChangeFunc={onChangeFunc}
        />

        <CustomeInput
          name={"reciverRegion"}
          label={"Reciver Region / sefer"}
          onChangeFunc={onChangeFunc}
        />
      </div>

      <div className="flex ps-4 py-2 max-md:gap-3 max-md:flex-col justify-around gap-10">
        <CustomeInput
          name={"reciverEmail"}
          label={"Reciver Email"}
          onChangeFunc={onChangeFunc}
        />

        <div className="flex flex-col w-full">
          <label className="" htmlFor="">
            Message
          </label>
          <textarea
            onChange={onChangeFunc}
            type="text"
            name="message"
            placeholder="message"
            className="w-full resize-none focus:outline-none border border-gray-300 p-2 rounded-md"
          />
        </div>
      </div>

      {/* <div className='flex ps-4 py-2 justify-around gap-10 my-7'>

                <button className='w-full bg-blue-500 text-white py-3 rounded font-bold capitalize'>
                    pay pal
                </button>

                <button className='w-full bg-blue-500 text-white py-3 rounded font-bold capitalize'>
                    pay pal
                </button>

                <button className='w-full bg-blue-500 text-white py-3 rounded font-bold capitalize'>
                    pay pal
                </button>

            </div> */}

      <div className="text-center  my-10 ">
        {/* <button
          onClick={submit}
          className="bg-redd px-8 rounded text-white font-bold te py-2"
        >
          Place order
        </button> */}
        <PayButton />
      </div>
    </form>
  );
};

export default FormDiv;
