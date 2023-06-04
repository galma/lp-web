import * as React from "react";

import {
  ColumnDef,
  PaginationState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useQuery } from "@tanstack/react-query";

export type Record = {
  id: string;
  userBalance: number;
  amount: number;
  operationResponse: string | number;
  date: Date;
};

const UserRecord = () => {
  const rerender = React.useReducer(() => ({}), {})[1];

  const columns = React.useMemo<ColumnDef<Record>[]>(
    () => [
      {
        accessorKey: "id",
        header: () => "Id",
        footer: (info) => info.column.id,
      },
      {
        accessorKey: "userBalance",
        header: () => "Balance",
        footer: (info) => info.column.id,
      },
      {
        accessorKey: "amount",
        header: () => "Amount",
        footer: (info) => info.column.id,
      },
      {
        accessorKey: "operationResponse",
        header: () => "Response",
        footer: (info) => info.column.id,
      },
      {
        accessorKey: "date",
        header: () => "Date",
        footer: (info) => info.column.id,
      },
    ],
    []
  );

  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    });

  const fetchDataOptions = {
    pageIndex,
    pageSize,
  };

  const fetchData = async (options: {
    pageIndex: number;
    pageSize: number;
  }) => {
    // Simulate some network latency
    await new Promise((r) => setTimeout(r, 500));

    return {
      rows: [
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
        {
          id: "65655057-b342-4a4f-88a1-49245378a610",
          userBalance: "89.00",
          amount: "1.50",
          operationResponse: "1",
          date: "2023-05-29T22:32:29.152Z",
        },
      ],
      pageCount: 15,
    };
  };

  const dataQuery = useQuery(
    ["data", fetchDataOptions],
    () => fetchData(fetchDataOptions),
    {}
  );

  const defaultData = React.useMemo(() => [], []);

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const table = useReactTable({
    data: dataQuery.data?.rows ?? defaultData,
    columns,
    pageCount: dataQuery.data?.pageCount ?? -1,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  });

  return (
    <div className="p-2">
      <div className="h-2" />
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="h-2" />
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        {dataQuery.isFetching ? "Loading..." : null}
      </div>
      <div>{table.getRowModel().rows.length} Rows</div>
      <div>
        <button onClick={() => rerender()}>Force Rerender</button>
      </div>
      <pre>{JSON.stringify(pagination, null, 2)}</pre>
    </div>
  );
};

export default UserRecord;
