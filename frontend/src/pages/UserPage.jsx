import UserHeader from '../components/UserHeader';
import UserPost from '../components/UserPost';

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={1200}
        replies={481}
        postImg="post1.png"
        postTitle="Let's talk about thread."
      />
      <UserPost
        likes={451}
        replies={12}
        postImg="post2.png"
        postTitle="Nice tutorial."
      />
      <UserPost
        likes={356}
        replies={80}
        postImg="post3.png"
        postTitle="I love this guy."
      />
      <UserPost likes={560} replies={56} postTitle="This is my first thread." />
    </>
  );
};

export default UserPage;
