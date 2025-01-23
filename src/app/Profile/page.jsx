"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const Profile = () => {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = isAuthenticated();

  return (
    <div>
      {isUserAuthenticated ? (
        <div>Welcome Your Profile</div>
      ) : (
        <div> UnAuthorized Access Please Sign In Or Sign Up</div>
      )}
    </div>
  );
};

export default Profile;
