import Image from "next/image";

const UserCard = ({ }: { type: string }) => {
    return (
        <div className="card rounded-2xl odd:bg-slate-300 even:bg-green-200 p-3">
            <div className="">
                <span>
                    2024 / 25
                </span>
                <Image />
            </div>
        </div>
    )
}

export default UserCard;