import Announcements from "@/app/components/Announcements";
import EventCalendar from "@/app/components/EventCalendar";

const StudentPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col xl:flex-row">
            {/* left */}
            <div className=" bg-whit w-full xl:w-2/3 ">
                <div className="h-full bg-white p-4 rounded-md ">
                    <h1 className="">Schedule (4A)</h1>
                </div>
            </div>
            {/* Right */}
            <div className="w-full xl:w-1/3 flex flex-col gap-5">
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    );
};

export default StudentPage;