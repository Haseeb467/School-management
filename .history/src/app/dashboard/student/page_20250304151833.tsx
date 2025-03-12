import Announcements from "@/app/components/Announcements";
import EventCalendar from "@/app/components/EventCalendar";

const StudentPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col xl:flex-row">
            <h1>Welcome to the Student Page</h1>
            {/* left */}
            <div className="w-full xl:w-2/3"> </div>
            {/* Right */}
            <div className="w-full xl:w-1/3 ">
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    );
};

export default StudentPage;