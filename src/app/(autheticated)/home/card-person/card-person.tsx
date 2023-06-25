'use client'
import "./card-person..css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { Person } from "@/app/models/person";

export default function CardPerson(props: { person: Person}) {
  const handleFavorite = (value: boolean) => {
    props.person.favorite = value;
    console.log(props.person.favorite);
  }

  return (
    <div className="card">
      <div className="card-header">
        <img src={props.person.urlFoto} alt="Foto" />

        <strong>{props.person.name}</strong>
      </div>

      <div className="card-body">
        <p>Data de nascimento: {props.person.bithDate}</p>
        <p>Data de falecimento: {props.person.deadDate}</p>
        <button className="see-more">Ver mais...</button>

        {props.person.favorite ? (
          <FontAwesomeIcon onClick={() => handleFavorite(true)} icon={faHeart} className="favoritar-icon" />
        ) : (
          <FontAwesomeIcon onClick={() => handleFavorite(false)} icon={farHeart} className="favoritar-icon" />
        )}
      </div>
    </div>
  );
}
