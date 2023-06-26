"use client";
import "./card-person..css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { Person } from "@/app/models/person";
import { favoritePerson } from "../../../services/people-service";
import { useEffect, useState } from "react";
import { isAuthenticated } from "@/app/services/user-service";

export default function CardPerson(props: { person: Person }) {
  const [authenticated, setAuthenticated] = useState(false);

  const handleFavorite = async (value: boolean) => {
    await favoritePerson(value, props.person.id);
  };

  const handleAuthenticated = async () => {
    const result = isAuthenticated();
    setAuthenticated(result);
  };

  useEffect(() => {
    handleAuthenticated();
  }, []);

  return (
    <li className="card">
      <div className="card-header">
        <img src={props.person.urlFoto} alt="Foto" />

        <strong>{props.person.name}</strong>
      </div>

      <div className="card-body">
        <p>Data de nascimento: {props.person.bithDate}</p>
        <p>Data de falecimento: {props.person.deadDate}</p>
        <button className="see-more">Ver mais...</button>

        {authenticated ? props.person.favorite ? (
          <FontAwesomeIcon
            width={26}
            onClick={() => handleFavorite(false)}
            icon={faHeart}
            className="favoritar-icon"
          />
        ) : (
          <FontAwesomeIcon
            width={26}
            onClick={() => handleFavorite(true)}
            icon={farHeart}
            className="favoritar-icon"
          />
        ) : <></>}
      </div>
    </li>
  );
}
