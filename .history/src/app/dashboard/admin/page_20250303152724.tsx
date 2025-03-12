import UserCard from "@/app/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
        <div className="">
          <UserCard type="Student" />
          <UserCard type="Parent" />
          <UserCard type="" />
          <UserCard type="" />

        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3">j</div>

    </div>
  );
};

export default AdminPage;