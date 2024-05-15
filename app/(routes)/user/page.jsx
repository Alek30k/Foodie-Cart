import { UserButton, UserProfile } from "@clerk/nextjs";
import { DotIcon } from "lucide-react";

const User = () => {
  return (
    <div className="flex justify-center items-center">
      <UserProfile>
        <UserButton.UserProfilePage
          label="Terms"
          labelIcon={<DotIcon />}
          url="terms"
        >
          <div>
            <h1>Custom Terms Page</h1>
            <p>This is the custom terms page</p>
          </div>
        </UserButton.UserProfilePage>
      </UserProfile>
    </div>
  );
};

export default User;
