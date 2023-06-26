"use client";

import CardPerson from "../card-person/card-person";
import { getPeople } from "../../../services/people-service";
import "./list-person.css";
import { useEffect, useState } from "react";
import { Person } from "@/app/models/person";

export default async function ListPerson(props: { favorite: boolean }) {
  const people = await getPeople(props.favorite);
  return (
    <>
      <ul>
        {people.length > 0 ? (
          people.map((item, index) => <CardPerson key={index} person={item} />)
        ) : (
          <></>
        )}
      </ul>
    </>
  );
}
