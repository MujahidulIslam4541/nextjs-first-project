"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const Profile = () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = isAuthenticated();
  const user = getUser();

  return (
    <div>
      {isUserAuthenticated ? (
        <div>
          <h2>Welcome Your Profile</h2>
          <h1>{user?.given_name}</h1>
        </div>
      ) : (
        <div> UnAuthorized Access Please Sign In Or Sign Up</div>
      )}
    </div>
  );
};

export default Profile;
