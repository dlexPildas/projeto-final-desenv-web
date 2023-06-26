"use client";

import CardPerson from "./card-person/card-person";
import ListPerson from "./list-person/list-person";
import { getPeople } from "../../services/people-service";
import './style.css'

export default async function HomePage() {
  let people = await getPeople(false);

  return (
    <>
      <section className="container-main">
        <ListPerson favorite={false} />
      </section>
    </>
  );
}
