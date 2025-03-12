// import CountChart from "@/app/components/CountChart";
import UserCard from "@/app/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
        <div className="flex gap-3 justify-between flex-wrap">
          <UserCard type="Student" />
          <UserCard type="Parent" />
          <UserCard type="Teacher" />
          <UserCard type="Staff" />

        </div>
        {/* middle chart */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* COUNT CHART  */}
          <div className="w-full lg:"></div>

          {/* BOTTOM CHART  */}
          <div></div>


        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3">
        {/* <CountChart /> */}
      </div>

    </div>
  );
};

export default AdminPage;