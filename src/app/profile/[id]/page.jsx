"use client";
import React, { useEffect, useState } from "react";
// import { UserCoverImg } from "@/app/components/user/UserCoverImg";
import UserCoverImg from "@/app/components/user/UserCoverImg";
import UserInfo from "@/app/components/user/UserInfo";
import UserImg from "@/app/components/user/UserImg";

import LikeProject from "@/app/components/activity/LikeProject";
import CommentProject from "@/app/components/activity/CommentProject";
import LikeCommunity from "@/app/components/activity/LikeCommunity";
import CommentCommunity from "@/app/components/activity/CommentCommunity";

import { logout, deleteUser } from "@/app/api/user/userAPI";

export default function ProfilePage(props) {
  // const userId = props.params.id;

  const [userId, setUserId] = useState(null);
  useEffect(() => {
    async function fetchParams() {
      console.log("=== props", props);
      const params = await props.params;
      console.log("=== params", params);
      setUserId(params.id);
    }
    fetchParams();
    console.log("=== 2 userId", userId);
  }, [props.params]);

  const handleDeleteUserClick = async () => {
    console.log("회원탈퇴 요청");
    console.log("userId", userId);
    await deleteUser(userId);
    logout();
  };
  return (
    <div style={{ width: "60%", margin: "0 auto" }}>
      {/* 이미지 컴포넌트 */}
      {userId && <UserCoverImg userId={userId} />}
      {/* <UserImg userId={userId} /> */}
      {userId && <UserImg userId={userId} />}
      {/* 사용자 정보 */}
      {/* <UserInfo userId={userId} /> */}
      {userId && <UserInfo userId={userId} />}

      {/* 활동내역 */}
      {/* 관심있는 정부 공고 */}
      {userId && <LikeProject userId={userId} />}

      {/* 관심있는 정부 공고 */}
      {userId && <CommentProject userId={userId} />}

      {/* 관심있는 정부 공고 */}
      {userId && <LikeCommunity userId={userId} />}

      {/* 관심있는 정부 공고 */}
      {userId && <CommentCommunity userId={userId} />}

      <br />
      <p style={{ fontSize: "25px", fontWeight: "bold" }}>활동내역</p>

      {/* 회원탈퇴 버튼 */}
      <button
        onClick={handleDeleteUserClick}
        style={{
          width: "100%",
          backgroundColor: "#D72222",
          borderRadius: "20px",
          height: "30px",
          color: "white",
          margin: "50px 0",
        }}
      >
        회원탈퇴
      </button>

      {/* 임시 로그아웃 버튼*/}
      <button onClick={logout}>로그아웃</button>
    </div>
  );
}
