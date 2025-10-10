"use client";

import { useState } from "react";

export default function FollowButton() {
  const [followState, setFollowState] = useState("Follow");
  const [isHovered, setIsHovered] = useState(false);

  const handleFollowClick = () => {
    if (followState === "Follow") {
      setFollowState("Following");
      // Add logic to add profile
    } else if (followState === "Following") {
      setFollowState("Follow");
      // Add logic to remove profile
    }
  };

  return (
    <button
      className={`bg-csrcblue text-csrcdark flex items-center justify-center gap-x-1 rounded px-2.5 py-1 font-bold tracking-wider transition delay-150 duration-300 hover:delay-150 ${
        followState === "Follow"
          ? "hover:border-csrclight hover:text-csrclight"
          : followState === "Following" && !isHovered
            ? "bg-csrclight/15 text-csrclight"
            : followState === "Following" && isHovered
              ? "bg-csrcdanger text-csrclight"
              : ""
      } `}
      onClick={handleFollowClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{followState}</span>
      {followState === "Follow" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="follow size-4"
        >
          <path d="M8.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 13c.552 0 1.01-.452.9-.994a5.002 5.002 0 0 0-9.802 0c-.109.542.35.994.902.994h8ZM12.5 3.5a.75.75 0 0 1 .75.75v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0v-1h-1a.75.75 0 0 1 0-1.5h1v-1a.75.75 0 0 1 .75-.75Z" />
        </svg>
      )}
      {followState === "Following" && !isHovered && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="following size-4"
        >
          <path d="M8.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10.9 12.006c.11.542-.348.994-.9.994H2c-.553 0-1.01-.452-.902-.994a5.002 5.002 0 0 1 9.803 0ZM14.002 12h-1.59a2.556 2.556 0 0 0-.04-.29 6.476 6.476 0 0 0-1.167-2.603 3.002 3.002 0 0 1 3.633 1.911c.18.522-.283.982-.836.982ZM12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        </svg>
      )}
      {followState === "Following" && isHovered && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="unfollow size-4"
        >
          <path d="M8.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 13c.552 0 1.01-.452.9-.994a5.002 5.002 0 0 0-9.802 0c-.109.542.35.994.902.994h8ZM10.75 5.25a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z" />
        </svg>
      )}
    </button>
  );
}
