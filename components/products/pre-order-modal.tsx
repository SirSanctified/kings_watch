"use client";

import { Product } from "@/app/(root)/page";
import { useUser } from "@clerk/nextjs";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  Spinner,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import FloatingInput from "../ui/floating-input";
import { useEffect, useState } from "react";
import { getUserById } from "@/sanity/user-utils";
import FloatingTextArea from "../ui/floating-autoheight-textarea";
import { formatCurrency } from "@/lib/utils";
import PreOrderSummary from "./pre-order-summary";
import { CreatePreOrder } from "@/types";
import toast from "react-hot-toast";

const PreOrderModal = ({ product }: { product: Product }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { user, isLoaded, isSignedIn } = useUser();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [quantity, setQuantity] = useState(1);
  const [orderTotal, setOrderTotal] = useState(product.price * quantity);

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("EcoCash");
  const [selectedFee, setSelectedFee] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getSanityUser() {
      if (isLoaded && isSignedIn) {
        const sanityUser = await getUserById(
          user.publicMetadata.userId as string
        );
        if (sanityUser) {
          setUserDetails({
            name: sanityUser.name,
            email: sanityUser.email,
            phone: sanityUser.phoneNumber,
            address: sanityUser.address,
          });
        }
      }
    }
    getSanityUser().then(() =>
      // pass
      {}
    );
    setOrderTotal(product.price * quantity);
  }, [user, isLoaded, isSignedIn, quantity, product.price]);

  const distances = [
    { label: "Within Harare CBD (Free)", value: 0 },
    { label: "Outside Harare CBD ($5.00)", value: 5 },
  ];

  async function preOrderProduct() {
    setLoading(true);
    let createOrder = false;
    const preOderDetails: CreatePreOrder = {
      address: userDetails.address,
      email: userDetails.email,
      name: userDetails.name,
      customer: {
        _type: "reference",
        _ref: user?.publicMetadata.userId as string,
      },
      paymentStatus: "pending",
      phone: userDetails.phone,
      product: { _type: "reference", _ref: product._id },
      price: product.price,
      quantity,
      status: "pending",
      total: orderTotal * 0.9 + selectedFee,
      createdAt: new Date().toISOString(),
    };
    try {
      if (selectedPaymentMethod === "EcoCash") {
        const res = await fetch(process.env.NEXT_PUBLIC_PAYMENT_SERVICE_URL!, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: orderTotal + selectedFee,
            auth_email: "trevorncube2@gmail.com",
            ecocash_number: "0771111111",
            result_url: "http://localhost:3000/orders",
            product: "King's Watch Pre-Order Payment",
            invoice: `Order ${Date.now().toString()}`,
          }),
        });
        if (res.ok) {
          const { status } = await res.json();
          if (status === "sent" || status === "paid") {
            createOrder = true;
            preOderDetails.paymentStatus = "paid";
            toast.success("Payment successful", {
              icon: "🎉",
            });
          } else {
            toast.error("Payment failed, please try again", {
              icon: "❌",
            });
          }
        } else {
          toast.error("Payment failed", {
            icon: "❌",
          });
        }
      } else {
        createOrder = true;
      }
      if (createOrder) {
        const response = await fetch("/api/orders/pre-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ preOderItem: preOderDetails }),
        });
        if (response.ok) {
          onOpenChange();
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Button
        onPress={onOpen}
        className="bg-yellow-800 hover:bg-yellow-600 h-10 px-4"
      >
        {isLoaded ? (
          "Pre-Order"
        ) : (
          <Spinner
            size="sm"
            color="white"
          />
        )}
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        backdrop="blur"
        size="4xl"
        scrollBehavior="inside"
      >
        <ModalContent className="bg-gray-200 dark:bg-gray-800">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-3xl text-black dark:text-gray-50">
                Fill in your order details
              </ModalHeader>
              <ModalBody className="flex mt-4 flex-col space-y-6">
                <h2 className="text-xl font-semibold text-black dark:text-gray-50">
                  Personal Details
                </h2>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-2 md:space-x-6">
                  <FloatingInput
                    label="Full name"
                    required
                    id="name"
                    name="name"
                    value={userDetails.name}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, name: e.target.value })
                    }
                  />
                  <FloatingInput
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    value={userDetails.email}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, email: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-2 md:space-x-6">
                  <FloatingInput
                    label="Phone number"
                    id="phone"
                    name="phone"
                    required
                    type="tel"
                    value={userDetails.phone}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, phone: e.target.value })
                    }
                  />
                  <FloatingTextArea
                    label="Address"
                    id="address"
                    name="address"
                    required
                    value={userDetails.address}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
                <h2 className="text-xl font-semibold text-black dark:text-gray-50">
                  Product Details
                </h2>
                <div className="flex space-x-2 md:space-x-6">
                  <FloatingInput
                    label="Name"
                    id="name"
                    name="name"
                    value={product.name}
                    readOnly
                  />
                  <FloatingInput
                    label="Price"
                    id="price"
                    name="price"
                    value={formatCurrency(product.price)}
                    readOnly
                  />
                </div>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-2 md:space-x-6">
                  <FloatingInput
                    label="Quantity"
                    id="quantity"
                    name="quantity"
                    type="number"
                    value={quantity.toString()}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    min={1}
                    required
                  />
                  <FloatingInput
                    label="Order Total"
                    id="total"
                    name="total"
                    value={formatCurrency(orderTotal)}
                    readOnly
                  />
                </div>
                <h2 className="text-xl font-semibold text-black dark:text-gray-50">
                  Delivery & Payment Options
                </h2>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-2 md:space-x-6">
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
                </div>
                <h2 className="text-xl font-semibold text-black dark:text-gray-50">
                  Final Order Details
                </h2>
                <PreOrderSummary
                  deliveryFee={selectedFee}
                  originalPrice={orderTotal}
                  discount={10}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="flat"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button
                  onPress={preOrderProduct}
                  className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg block min-w-40 px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                >
                  {loading ? (
                    <Spinner
                      size="sm"
                      color="white"
                    />
                  ) : (
                    "Pre-Order"
                  )}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default PreOrderModal;
