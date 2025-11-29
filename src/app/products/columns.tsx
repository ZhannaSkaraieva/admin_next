"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ProductItem } from "@/src/lib/productsListItem";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<ProductItem>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "vendorCode",
    header: "VendorCode",
  },
  {
    accessorKey: "article",
    header: "Article",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "enabled",
    header: "Enabled",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "createAt",
    header: "Create At",
  },
  {
    accessorKey: "updateAt",
    header: "Update At",
  },
];
