
// const Table = ({ columns, }: { columns: { header: string, accessor: string }[], className?: string, }) => {
//     return (
//         <div>
//             <table className="w-full mt-3">
//                 <thead>
//                     <tr className="text-left text-gray-500 text-sm ">
//                         {columns.map(col => (
//                             <th key={col.accessor}>
//                                 {col.header}
//                             </th>
//                         ))}
//                     </tr>
//                 </thead>
//             </table>
//         </div>
//     )
// }

// export default Table

interface Column {
    header: string;
    accessor: string;
    className?: string;
}

interface TableProps<T> {
    columns: Column[];
    renderRow: (item: T) => React.ReactNode;
    data: T[];
}

const Table = <T,>({ columns, renderRow, data }: TableProps<T>) => {
    return (
        <table className="w-full mt-4">
            <thead>
                <tr className="text-left text-gray-500 text-sm">
                    {columns.map((col) => (
                        <th key={col.accessor} className={col.className}>{col.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>{data.map((item) => renderRow(item))}</tbody>
        </table>
    );
};

export default Table;
