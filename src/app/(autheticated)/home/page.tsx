"use client";

import CardPerson from "./card-person/card-person";
import ListPerson from "./list-person/list-person";
import { getPeople } from "../../services/people-service";
import './style.css'

export default async function HomePage() {
  return (
    <>
      <section className="container-main">
        <ListPerson favorite={false} />
      </section>
    </>
  );
}
