import AttendenceChart from "@/app/components/AttendenceChart";
import CountChart from "@/app/components/CountChart";
import EventCalendar from "@/app/components/EventCalendar";
import FinanceChart from "@/app/components/FinanceChart";
import UserCard from "@/app/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8 ">
        <div className="flex gap-3 justify-between flex-wrap">
          <UserCard type="Student" />
          <UserCard type="Parent" />
          <UserCard type="Teacher" />
          <UserCard type="Staff" />

        </div>
        {/* middle chart */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* COUNT CHART  */}
          <div className="w-full lg:w-1/3 h-[400px]  ">
            <CountChart />
          </div>

          {/* Attendence Chart */}
          <div className="w-full lg:w-2/3 ">
            <AttendenceChart />
          </div>

        </div>
        {/* BOTTOM CHART  */}
        <div className="w-full  h-[450px]">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 ">
        <div className="flex flex-col gap5">
          <EventCalendar />
        </div>
      </div>

    </div>
  );
};

export default AdminPage;