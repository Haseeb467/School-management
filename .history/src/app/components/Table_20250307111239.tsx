
const Table = ({columns,}:{columns:{header:string, accessor:string}[] , className?:string,}) => {
    return (
        <div>
            <table className="w-full mt-3">
                <thead>
                    <tr>
                        {columns.map(col => (
                            <th>
                                
                            </th>
                        ))}
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Table
