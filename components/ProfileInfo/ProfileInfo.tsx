"use client";
import { useAuthStore } from "@/store/userStore";
import css from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  const user = useAuthStore((s) => s.user);

  return (
    <>{user && <div className={css["profileInfo"]}>{user.username}</div>}</>
  );
};

export default ProfileInfo;
