"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tooltip,
  Spinner,
} from "@nextui-org/react";
import { DeleteIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CancelOrder({
  orderId,
  page = "orders",
  disabled = false,
}: {
  orderId: string;
  page?: string;
  disabled?: boolean;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleCancelOrder() {
    setIsLoading(true);
    setError("");
    try {
      if (page === "orders") {
        await fetch(`/api/orders/${orderId}`, {
          method: "DELETE",
        });
      } else if (page === "pre-orders") {
        await fetch(`/api/pre-orders/${orderId}`, {
          method: "DELETE",
        });
      }
      router.refresh();
      onOpenChange();
    } catch (error) {
      setError("An error occurred. Please try again later");
    }
    setIsLoading(false);
  }
  return (
    <>
      <Tooltip
        color="danger"
        content="Cancel order"
      >
        {disabled ? (
          <span className="text-lg text-danger cursor-not-allowed opacity-50">
            <DeleteIcon />
          </span>
        ) : (
          <span
            onClick={onOpen}
            className="text-lg text-danger cursor-pointer active:opacity-50"
          >
            <DeleteIcon />
          </span>
        )}
      </Tooltip>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent className="text-black dark:text-white">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Are you sure you want to cancel this order?
              </ModalHeader>
              <ModalBody>
                <p className="text-red-500 mb-4">{error}</p>
                <p>
                  This action cannot be undone. If you proceed, the order will
                  be cancelled immediately. If you had already shipped the
                  order, it will be refunded within 72 hours.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="light"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button
                  color="danger"
                  onPress={handleCancelOrder}
                >
                  {isLoading ? <Spinner size="sm" /> : "Yes, Cancel Order"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
