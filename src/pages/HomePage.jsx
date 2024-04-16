import React, { useEffect, useState } from "react";
import User from "../components/User";
import { SimpleGrid } from "@chakra-ui/react";

const HomePage = () => {
  const [data, setData] = useState();

  const getData = () => {
    fetch("../public/Users.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <SimpleGrid columns={3} gap={1}>
      {data && data.length > 0 && data.map((item) => <User id={item.id} firstname={item.firstName} lastname={item.lastName} maidenname={item.maidenName} age={item.age} gender={item.gender} email={item.email} phone={item.phone} birthdate={item.birthDate} image={item.image} />)}
    </SimpleGrid>
  );
};

export default HomePage;
