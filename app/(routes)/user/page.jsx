import { UserProfile } from "@clerk/nextjs";

const User = () => {
  return (
    <div className="flex justify-center items-center">
      <UserProfile></UserProfile>
    </div>
  );
};

export default User;
