
const Table = ({ columns, }: { columns: { header: string, accessor: string }[], className?: string, }) => {
    return (
        <div>
            <table className="w-full mt-3">
                <thead>
                    <tr className="text-left text-gray-500 ">
                        {columns.map(col => (
                            <th key={col.accessor}>
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Table
