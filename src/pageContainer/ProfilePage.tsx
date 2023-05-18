import React from "react";
import ProfileInfo from "@/components/Profile/ProfileInfo";
import ProfileView from "@/components/Profile/ProfileView";

const ProfilePage = () => {
  return (
    <div className="w-screen h-screen flex flex-row bg-Background-Gray">
      <ProfileView />
      <ProfileInfo />
    </div>
  );
};

export default ProfilePage;
