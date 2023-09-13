// import axios from "axios";
import { useSelector } from "react-redux";
import { url } from "../../../store/features/APISlice/url";
import axios from "../../../core/hooks/axios";
function PayButton({ cartItems }) {
  const user = useSelector((state) => state.auth);

  const handleCheckout = async () => {
    try {
      const response = await axios.post(
        `${url}/stripe/create-checkout-session`,
        {
          cartItems,
          user,
        }
      );
      const { url: checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error("Error during checkout:", error);
      // Handle the error gracefully (e.g., show an error message to the user).
    }
  };

  return (
    <>
      <button
        onClick={handleCheckout}
        className="disabled:bg-gray-400 hover:bg-red-400 duration-100 bg-red-400 px-8 py-3 rounded font-semibold text-white"
      >
        Check out Now
      </button>
    </>
  );
}

export default PayButton;
