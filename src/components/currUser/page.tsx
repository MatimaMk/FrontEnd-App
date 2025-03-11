"use client";

import {
  CurrentUserAction,
  CurrentUserState,
} from "@/providers/currUserProvider";
import { useEffect } from "react";

const UserDetails = () => {
  const { currentUser, iscurrPending, iscurrError } = CurrentUserState();
  const { getCurrentUser } = CurrentUserAction();

  // Fetch the current user details on component mount
  useEffect(() => {
    if (getCurrentUser) {
      getCurrentUser();
    }
  }, [getCurrentUser]);

  // Handle loading state
  if (iscurrPending) {
    return <p>Loading user details...</p>;
  }

  // Handle error state
  if (iscurrError) {
    return <p>Failed to load user details. Please try again later.</p>;
  }

  // Display current user details
  if (currentUser) {
    const { name, id, email } = currentUser;
    return (
      <div>
        <h2>Current User Details</h2>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>ID:</strong> {id}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
      </div>
    );
  }

  // Handle case where no user details are available
  return <p>No user details available.</p>;
};

export default UserDetails;
