import {
  CurrentUserAction,
  CurrentUserState,
} from "@/providers/currUserProvider";
import { useState, useEffect } from "react";

const UserDetails = () => {
  const { currentUser, iscurrPending, iscurrError } = CurrentUserState();
  const { getCurrentUser } = CurrentUserAction();

  useEffect(() => {
    // Fetch the current user details on component mount
    // No need to check if getCurrentUser exists, as it's guaranteed by the provider
    getCurrentUser();
  }, []);

  if (iscurrPending) {
    return <p>Loading user details...</p>;
  }

  if (iscurrError) {
    return <p>Failed to load user details. Please try again later.</p>;
  }

  if (!currentUser) {
    return <p>No user details available.</p>;
  }

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
};

export default UserDetails;
