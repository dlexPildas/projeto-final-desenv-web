"use client";

import CardPerson from "../card-person/card-person";
import { getPeople } from "../services/people-service";
import "./list-person.css";

export default async function ListPerson(props: { favorite: boolean }) {
  let people = await getPeople(props.favorite);

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
