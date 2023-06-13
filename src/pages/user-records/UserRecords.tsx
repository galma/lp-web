import * as React from "react";

import {
  ColumnDef,
  PaginationState,
  SortingState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMutation, useQuery } from "@tanstack/react-query";
import { UserRecordsDTO, UserRecordsResponse } from "@/types/operation";
import { getUserRecords } from "@/api/users/getUserRecords";
import { useContext, useState } from "react";
import { UserContext } from "@/contexts/UserContext";
import { deleteUserRecord } from "@/api/users/deleteUserRecord";

export type Record = {
  id: string;
  userBalance: number;
  amount: number;
  operationResponse: string | number;
  date: Date;
};

const useDeleteRecordMutation = () => {
  const mutation = useMutation(deleteUserRecord);

  const deleteRecord = async (recordId: string, userId: string) => {
    await mutation.mutateAsync({ recordId, userId });
  };

  return {
    deleteRecord,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
    error: mutation.error,
  };
};

const UserRecord = () => {
  const { deleteRecord } = useDeleteRecordMutation();

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
      {
        accessorKey: "delete",
        header: () => "Actions",
        enableSorting: false,
        cell: (info) => (
          <button
            className="border rounded p-1"
            onClick={() => handleDelete(info.row.original.id, userId)}
          >
            Delete
          </button>
        ),
      },
    ],
    []
  );

  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const [sorting, setSorting] = React.useState<SortingState>([]);

  const sortingParam = React.useMemo(() => sorting, [sorting]);

  const { userId } = useContext(UserContext);

  const dataQuery = useQuery(
    [
      "userRecords",
      {
        userId,
        page: pagination.pageIndex,
        limit: pagination.pageSize,
        sorting: sortingParam,
      },
    ],
    () =>
      getUserRecords({
        userId,
        page: pagination.pageIndex,
        limit: pagination.pageSize,
        sorting: sortingParam,
      } as UserRecordsDTO),
    {}
  );

  const defaultData = React.useMemo(() => [], []);

  const table = useReactTable({
    data: dataQuery?.data?.records ?? defaultData,
    columns,
    pageCount: dataQuery?.data?.totalPages ?? -1,
    state: {
      pagination,
      sorting,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    debugTable: false,
  });

  const handleDelete = async (recordId: string, userId: string) => {
    await deleteRecord(recordId, userId);
    dataQuery.refetch();
  };

  return (
    <div className="p-2">
      <div className="h-2" />
      <div className="max-h-96 overflow-y-auto">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? "cursor-pointer select-none"
                              : "",
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: " 🔼",
                            desc: " 🔽",
                          }[header.column.getIsSorted() as string] ?? null}
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
                      <td key={cell.id} className="border-b px-4 py-2">
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
      </div>

      <div className="h-4" />
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
          className="border p-1 rounded"
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        {dataQuery.isFetching ? "Loading..." : null}
      </div>
    </div>
  );
};

export default UserRecord;
