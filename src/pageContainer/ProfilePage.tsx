import React from "react";
import ProfileInfo from "@/components/ProfileInfo";
import ProfileView from "@/components/ProfileView";

const ProfilePage = () => {
  return (
    <div className="w-screen h-screen flex flex-row">
      <ProfileView />
      <ProfileInfo />
    </div>
  );
};

export default ProfilePage;
