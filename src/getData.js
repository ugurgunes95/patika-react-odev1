import axios from "axios";

const getData = async (userId) => {
  const userResponse = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  const postsResponse = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  let posts = { posts: postsResponse.data };

  console.log({ ...userResponse.data, ...posts });
  return { ...userResponse.data, ...posts };
};

export default getData;
