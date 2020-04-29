import useSWR from "swr";
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";
import { fetch } from "../utils/fetch";
import Layout from "../components/Layout";
import { optionalAuth } from "../utils/ssr";

import Head from "next/head";

// function RandomDog() {
//   const { data } = useSWR("/api/dog", fetch, {
//     // By default, useSWR will call the endpoint we specified (in this case, /api/dog) every time we click away from
//     // the page. This can be really useful if we want to make sure the web app is always showing the latest data,
//     // but in this case, we don't need that behavior. See what happens if you set these options to true or remove them!
//     revalidateOnFocus: false,
//     revalidateOnReconnect: false,
//   });

//   // if (!data) {
//   //   return <Spinner animation="border" />;
//   // }

//   return (
//     <div>
//       <p>work in progress...</p>
//       {/* <Image data-cy="doggo" src={data.image} /> */}
//     </div>
//   );
// }

export const getServerSideProps = optionalAuth;

function Search(props) {
  const user = props.user;

  return (
    <Layout user={user}>
      <Head>
        <title>Search for Recipes</title>
      </Head>
      <div>
        <p>Search for Recipes work in progres...</p>
      </div>
    </Layout>
  );
}

export default Search;

// copied from woof.js