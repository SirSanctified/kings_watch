"use client";

import { useState } from "react";
import { RadioGroup, Radio, Spinner } from "@nextui-org/react";
import CartOrderSummary from "../cart/order-summary";
import FloatingInput from "../ui/floating-input";
import FloatingTextArea from "../ui/floating-autoheight-textarea";
import { useCartStore } from "@/context/cart-store";
import { CreateOrderItem } from "@/types";
import { useRouter } from "next/navigation";

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
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("EcoCash");
  const [loading, setLoading] = useState(false);
  const { cart, cartTotal } = useCartStore();
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const rawOrderItems: CreateOrderItem[] = cart.map((product) => ({
        product: { _type: "reference", _ref: product._id },
        quantity: product.quantity,
        price: product.price,
        name: product.name,
        image: product.image,
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
        const order = await response.json();
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      className="max-w-3xl lg:mx-auto"
      onSubmit={handleSubmit}
    >
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
      <legend className="text-xl font-semibold my-6 text-gray-900 dark:text-white">
        Payment Method
      </legend>
      <div className="relative z-0 w-full mb-5 group">
        <RadioGroup
          label="Select your payment method"
          value={selectedPaymentMethod}
          onValueChange={(value) => setSelectedPaymentMethod(value)}
        >
          <Radio
            value="EcoCash"
            color="warning"
          >
            EcoCash
          </Radio>
          <Radio
            value="Cash On Delivery"
            color="warning"
          >
            Cash On Delivery
          </Radio>
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
        <button
          type="submit"
          className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg block text-sm w-full sm:max-w-sm mx-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
        >
          {!loading && selectedPaymentMethod === "EcoCash" ? (
            "Pay with EcoCash"
          ) : !loading && selectedPaymentMethod === "Cash On Delivery" ? (
            "Place Order"
          ) : (
            <Spinner
              size="sm"
              color="white"
            />
          )}
        </button>
      </div>
    </form>
  );
};

export default DetailsForm;
