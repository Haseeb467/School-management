import Image from "next/image"

const SingleTeacherPage = () => {
    return (
        <div className="flex=-1 p-4 flex flex-col gap-4 xl:flex-row ">
            {/* Left */}
            <div className="w-full xl:w-2/3">
                {/* top */}
                <div className="flex flex-col lg:flex-row gap-4 p-2  shadow-md">
                    {/* user info card */}
                    <div className="bg-blue-100 w-1/2 py-6 px-4 flex gap-3">
                        {/* user image */}
                        <div className="w-1/3">
                            <Image
                                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                alt="" width={144} height={144} className="w-36 h-36 rounded-full" />
                        </div>
                        {/* user details/info */}
                        <div className="w-2/3 flex flex-col justify-between gap=-4">
                            <h1 className="text-xl   font-semibold">
                                haseeb 
                            </h1>
                            <p className="text-sm text--">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis exercitationem consequatur maxime recusandae, </p>
                        </div>
                    </div>
                    {/* Small card */}
                    <div className="bg-red-100 w-1/2">k</div>
                </div>
                {/* bottom */}
                <div className="Schedule">
                    <h1>
                        Schedule
                    </h1>
                </div>
            </div>
            {/* right */}
            <div className="w-full xl:w-1/3">
                r
            </div>
        </div>
    )
}

export default SingleTeacherPage
