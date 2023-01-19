import { useState, useEffect } from "react";
import { Heading, Box } from "@chakra-ui/react";

import { EndpointsItem, Footer } from "@Components"
import * as APY from "../../services/apy";

export default function Endpoints () {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    APY.getAllLaunches().then(setLaunches).catch(console.log);
  }, []);

  return (
    <>
      <Heading as="h1" size="lg" m={4}>
        SpaceX Launches
      </Heading>
      {launches.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <section>
          {[launches].map((launch: any) => (
            <EndpointsItem key={launch.JSON} {...launch.JSON} />
            ))}
        </section>
      )}
      <Footer />
    </>
  );
}