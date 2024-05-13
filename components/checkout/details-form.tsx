"use client";

import { useState } from "react";
import Link from "next/link";
import { RadioGroup, Radio, Spinner } from "@nextui-org/react";
import CartOrderSummary from "../cart/order-summary";
import FloatingInput from "../ui/floating-input";
import FloatingTextArea from "../ui/floating-autoheight-textarea";
import { useCartStore } from "@/context/cart-store";
import { CreateOrderItem } from "@/types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const DetailsForm = ({
  userId,
  name,
  email,
  phoneNumber,
  address,
}: {
  userId: string;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
}) => {
  const [user, setUser] = useState({ name, email, phoneNumber, address });
  const [selectedFee, setSelectedFee] = useState(0);
  const [loading, setLoading] = useState(false);
  const { cart, cartTotal, clearCart } = useCartStore();
  const router = useRouter();

  const distances = [
    { label: "Within Harare CBD (Free)", value: 0 },
    { label: "Outside Harare CBD ($5.00)", value: 5 },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (cart.length <= 0) return;
      const rawOrderItems: CreateOrderItem[] = cart.map((product) => ({
        product: { _type: "reference", _ref: product._id },
        quantity: product.quantity,
        price: product.price,
        name: product.name,
        total: product.price * product.quantity,
      }));
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rawOrderItems,
          orderTotal: cartTotal + selectedFee,
          userId,
          userDetails: {
            name: user.name,
            email: user.email,
            phone: user.phoneNumber,
            address: user.address,
          },
        }),
      });
      if (response.ok) {
        clearCart();
        router.push("/orders");
      }
    } catch (error) {
      toast.error("Something went wrong, please try again");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="max-w-3xl lg:mx-auto">
      <p className="mb-3 text-gray-700 dark:text-gray-200">
        After a successfull payment, update your order with the Paynow reference
        given to you after the payment. If you do not enter this reference, your
        order will not be processed automatically.
      </p>
      <legend className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
        Personal Details
      </legend>
      <FloatingInput
        label="Full Name"
        className="mb-5"
        id="name"
        name="name"
        value={user.name}
        onChange={handleChange}
        required
      />
      <FloatingInput
        label="Email Address"
        className="mb-5"
        type="email"
        id="email"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <FloatingInput
        label="Phone Number"
        className="mb-8"
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        required
        value={user.phoneNumber}
        onChange={handleChange}
        helperText="We will send you order updates on this number"
      />
      <legend className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
        Delivery Options
      </legend>
      <FloatingTextArea
        label="Delivery Address"
        className="mb-5"
        id="address"
        name="address"
        value={user.address}
        onChange={handleChange}
        required
      />
      <div className="relative z-0 w-full mb-5 group">
        <RadioGroup
          label="Select your distance from Harare"
          value={selectedFee.toString()}
          onValueChange={(value) => setSelectedFee(Number(value))}
        >
          {distances.map((distance) => (
            <Radio
              key={distance.label}
              value={distance.value.toString()}
              color="warning"
            >
              {distance.label}
            </Radio>
          ))}
        </RadioGroup>
      </div>
      <div className="mt-8">
        <p className="text-xl mb-8 font-semibold text-gray-900 dark:text-white">
          Order summary
        </p>
        <CartOrderSummary
          deliveryFee={selectedFee}
          page="checkout"
        />
      </div>
      <div className="mt-4 mx-auto w-full">
        <Link
          href={cart.length <= 0 ? "#" : process.env.NEXT_PUBLIC_BUTTON_URL!}
          target={cart.length <= 0 ? "_self" : "_blank"}
          className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 flex items-center justify-center font-medium rounded-lg text-sm w-full sm:max-w-sm mx-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 disabled:bg-gray-800 disabled:text-gray-300 disabled:cursor-not-allowed dark:disabled:bg-zinc-600"
          onClick={handleSubmit}
        >
          {!loading ? (
            "Proceed to Payment"
          ) : (
            <>
              <Spinner
                size="sm"
                color="white"
              />
              <span className="ml-2">Creating Order...</span>
            </>
          )}
        </Link>
      </div>
    </form>
  );
};

export default DetailsForm;
