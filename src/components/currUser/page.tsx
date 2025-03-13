import React from 'react';
import { Flex, Typography, Image } from 'antd';
import { USECurrentuser } from "@/providers/currUserProvider";
import { useStyles } from "./styles/style";
import { useEffect } from 'react';

const Desc: React.FC<Readonly<{ text?: string | number }>> = (props) => (
  <Flex justify="center" align="center" style={{ height: '100%' }}>
    <Typography.Title type="secondary" level={5} style={{ whiteSpace: 'nowrap' }}>
      {props.text}
    </Typography.Title>
  </Flex>
);

const UserDetails: React.FC = () => {
  const { styles } = useStyles();
  const { currentUser, iscurrError, getCurrentUser } = USECurrentuser();

  const token = typeof window !== "undefined" ? sessionStorage.getItem("token") : null;


  useEffect(() => {
    if (token) {
      getCurrentUser();
    }
  }, []);

  if (iscurrError) {
    return (
      <div className={styles.noItemsMessage}>
        Failed to load user details. Please try again later.
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className={styles.noItemsMessage}>
        No user details available.
      </div>
    );
  }

  return (
    <div className={styles.cardDiv}>
      <div className={styles.card}>
        <Typography.Title className={styles.title}>User Details</Typography.Title>
        <Image
          width={100}
          src={'https://domf5oio6qrcr.cloudfront.net/medialibrary/4954/4965bf45-98cc-4d16-bae5-9f4b8503c5ed.jpg'}
          alt="User Image"
        />
        <Desc text={`ID: ${currentUser.data?.id}`} />
        <Desc text={`Email: ${currentUser.data?.email}`} />
        <Desc text={`Role: ${currentUser.data?.role}`} />
        <Desc text={`Contact Number: ${currentUser.data?.contactNumber}`} />
        <Desc text={`Active State: ${currentUser.data?.activeState ? 'Active' : 'Inactive'}`} />
        <Desc text={`Plan Type: ${currentUser.data?.planType}`} />
      </div>
    </div>
  );
};

export default UserDetails;