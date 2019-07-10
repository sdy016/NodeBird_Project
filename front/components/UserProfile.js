import { Avatar, Card, Button } from 'antd';
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../reducers/user';

// const dummy = {
//   nickname: '제로초',
//   Post: [],
//   Followings: [],
//   Followers: [],
//   isLoggedIn: false,
// };

const UserProfile = () => {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => { dispatch(logoutAction); }, []);

  return (
    <Card
      actions={[
        <div key="twit">짹짹<br />{user.Post.length}</div>,
        <div key="following">팔로잉<br />{user.Followings.length}</div>,
        <div key="follower">팔로워<br />{user.Followers.length}</div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{user.nickname[0]}</Avatar>}
        title={user.nickname}
      />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;