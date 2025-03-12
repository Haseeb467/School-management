import Image from "next/image";

const UserCard = ({ }: { type: string }) => {
    return (
        <div className="card rounded-2xl odd:bg-slate-300 even:bg-green-200 p-3 ,i" >
            <div className="flex justify-between ">
                <span>
                    2024 / 25
                </span>
                <Image src="/more.png" alt="" width={20} height={20} />
            </div>
        </div>
    )
}

export default UserCard;