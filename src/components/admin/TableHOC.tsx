import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import {
  useTable,
  Column,
  TableOptions,
  useSortBy,
  usePagination,
} from "react-table";

function TableHOC<T extends Object>(
  columns: Column<T>[],
  data: T[],
  containerClassname: string,
  heading: string,
  showPagination:boolean=false,
) { 
  return (function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
      initialState:{
        pageSize:5
      }
    };

    const { getTableProps, getTableBodyProps, headerGroups, prepareRow,page,nextPage,previousPage,canNextPage,canPreviousPage,pageCount,state:{pageIndex} } = useTable(options, useSortBy,usePagination);
    return (
      <div className={containerClassname}>
        <h2 className="heading">{heading}</h2>
        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((columns: any) => (
                  <th
                    {...columns.getHeaderProps(columns.getSortByToggleProps())}
                  >
                    {columns.render("Header")}
                    {columns.isSorted && (
                      <span>
                        {columns.isSortedDesc ? (
                          <AiOutlineSortDescending />
                        ) : (
                          <AiOutlineSortAscending />
                        )}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        {


showPagination && <div className="Tablepagination">
    <button onClick={previousPage} disabled={!canPreviousPage}>Prev</button>
    <span>{`${pageIndex + 1 } page of ${pageCount}`}</span>
    <button onClick={nextPage} disabled={!canNextPage}>Next</button>
</div>
        }
      </div>
    );
  })();
}

export default TableHOC;
