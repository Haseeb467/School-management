import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
    return (
        <div className="card rounded-2xl odd:bg-slate-300 even:bg-green-200 p-3 min-w-[150px] " >
            <div className="flex justify-between ">
                <span className="text-[11px] bg-white px-2 py-1 rounded-full text-green-500 ">
                    2024 / 25
                </span>
                <Image src="/more.png" alt="" width={20} height={20} />
            </div>
            <h1>sdkj</h1>
            <p>{type} </p>
        </div >
    )
}

export default UserCard;