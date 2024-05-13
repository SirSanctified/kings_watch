"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Link,
  Tooltip,
  Spinner,
} from "@nextui-org/react";
import FloatingInput from "./ui/floating-input";
import { EditIcon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UpdateOrder({
  page = "orders",
  orderId,
  disabled = false,
}: {
  page?: string;
  orderId: string;
  disabled?: boolean;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [paynowReference, setPaynowReference] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit() {
    if (paynowReference.trim() === "") {
      setError("Please enter a valid Paynow reference");
      return;
    }
    setError("");
    try {
      setIsLoading(true);
      if (page === "orders") {
        const response = await fetch("/api/orders", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ orderId, paynowReference }),
        });
        if (response.ok) {
          router.refresh();
          onOpenChange();
        }
      } else if (page === "pre-orders") {
        const response = await fetch("/api/orders/pre-order", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ orderId, paynowReference }),
        });
        if (response.ok) {
          router.refresh();
          onOpenChange();
        }
      }
    } catch (error) {
      setError("An error occurred. Please try again later");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Tooltip
        color="secondary"
        content="Edit Order"
        aria-controls="edit-order"
      >
        {disabled ? (
          <span
            id="edit-order"
            className="text-lg text-purple-500 cursor-pointer opacity-50"
          >
            <EditIcon />
          </span>
        ) : (
          <span
            onClick={onOpen}
            id="edit-order"
            className="text-lg text-purple-500 cursor-pointer active:opacity-50"
          >
            <EditIcon />
          </span>
        )}
      </Tooltip>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Enter Your Paynow Payment Reference
              </ModalHeader>
              <ModalBody>
                <FloatingInput
                  label="Paynow Reference"
                  required
                  value={paynowReference}
                  onChange={(e) => {
                    setError("");
                    setPaynowReference(e.target.value);
                  }}
                  helperText="The reference number you received after making a payment"
                />
                <p className="text-red-500">{error}</p>
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
                  color="warning"
                  onPress={handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Spinner
                      color="success"
                      size="sm"
                    />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
