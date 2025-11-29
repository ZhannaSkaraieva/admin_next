import { DataTable } from "../products/data-table";
import { columns } from "./columns";
import { getData } from "./getData"; // если файл рядом

export default async function PageProducts() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

