import axios from "axios";

const getData = async (userId) => {
  const userResponse = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  const postsResponse = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  let user = { user: userResponse.data };
  let posts = { posts: postsResponse.data };

  console.log({ ...user, ...posts });
  return { ...user, ...posts };
};

export default getData;
