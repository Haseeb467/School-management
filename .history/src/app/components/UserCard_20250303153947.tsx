import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
    return (
        <div className="card rounded-2xl odd:bg-slate-300 even:bg-green-200 p-3 min-w-[150px] " >
            <div className="flex gap justify-between ">
                <span>
                    2024 / 25
                </span>
                <Image src="/more.png" alt="" width={20} height={20} />
                <h1>sdkj</h1>
                <p>{type} </p>
            </div>
        </div>
    )
}

export default UserCard;