import axios from "axios";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile Page",
  description: "Profile Page",
};

const Profile = async () => {
  await new Promise((res) => setTimeout(res, 3000));
  const res = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  );

  const data = res.data.results;

  return (
    <div>
      <h1>Profile Hello</h1>
      <h2>User Info</h2>
      <ul>
        {data.map((el, i) => {
          return <li key={el.name}>{el.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Profile;
