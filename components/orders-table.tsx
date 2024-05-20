"use client";

import { cn, formatCurrency } from "@/lib/utils";
import { FetchedOrder } from "@/types";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
  Tooltip,
  Chip,
  ChipProps,
} from "@nextui-org/react";
import { format } from "date-fns";
import {
  Check,
  DeleteIcon,
  EditIcon,
  EyeIcon,
  Info,
  Timer,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import CancelOrder from "./cancel-oder";

const iconMap: Record<string, React.ReactNode> = {
  delivered: <Check className="mr-2" />,
  inTransit: <Info className="mr-2" />,
  cancelled: <XCircle className="mr-2" />,
  pending: <Timer className="mr-2" />,
};

const paymentIconMap: Record<string, React.ReactNode> = {
  paid: <Check className="mr-2" />,
  failed: <XCircle className="mr-2" />,
  pending: <Timer className="mr-2" />,
};

export default function OrdersTable({ orders }: { orders: FetchedOrder[] }) {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(orders.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return orders.slice(start, end);
  }, [page, orders]);
  const renderCell = useCallback(
    (order: FetchedOrder, columnKey: React.Key) => {
      const cellValue = order[columnKey as keyof FetchedOrder];

      switch (columnKey) {
        case "number":
          return <span>#{cellValue as string}</span>;
        case "createdAt":
          return (
            <span>
              {/* @ts-expect-error // Cellvalue not recognised */}
              {format(new Date(cellValue), "dd/MM/yyyy")}
            </span>
          );
        case "items":
          return <span>{order.items.length}</span>;
        case "total":
          return <span>{formatCurrency(Number(cellValue))}</span>;
        case "status":
          return (
            <span
              className={cn(
                "capitalize flex",
                order.status === "delivered"
                  ? "text-success"
                  : order.status === "cancelled"
                  ? "text-danger"
                  : order.status === "inTransit"
                  ? "text-secondary"
                  : "text-yellow-700 dark:text-warning"
              )}
            >
              {/* @ts-expect-error // TS-CONVERSION */}
              {iconMap[order.status]}
              {String(cellValue) === "inTransit" ? "In Transit" : cellValue}
            </span>
          );
        case "paymentStatus":
          return (
            <span
              className={cn(
                "capitalize flex",
                order.paymentStatus === "paid"
                  ? "text-success"
                  : order.paymentStatus === "failed"
                  ? "text-danger"
                  : "text-yellow-700 dark:text-warning"
              )}
            >
              {paymentIconMap[(cellValue as string) ?? "pending"]}
              {(cellValue as string) ?? "pending"}
            </span>
          );
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip
                color="success"
                content="Order Details"
              >
                <Link
                  href={`/orders/${order._id}`}
                  className="text-lg text-success cursor-pointer active:opacity-50"
                >
                  <EyeIcon />
                </Link>
              </Tooltip>
              <CancelOrder
                orderId={order._id}
                disabled={order.status !== "pending"}
              />
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );
  return (
    <Table
      isStriped
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="primary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
      className="w-full"
    >
      <TableHeader>
        <TableColumn key="number">ORDER</TableColumn>
        <TableColumn key="createdAt">DATE</TableColumn>
        <TableColumn key="items">ITEMS</TableColumn>
        <TableColumn key="total">TOTAL</TableColumn>
        <TableColumn key="paymentStatus">PAYMENT STATUS</TableColumn>
        <TableColumn key="status">FULLFILLMENT STATUS</TableColumn>
        <TableColumn key="actions">ACTIONS</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item._id}>
            {(columnKey) => (
              // @ts-expect-error // TS doesn't know that renderCell will return a ReactNode
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
