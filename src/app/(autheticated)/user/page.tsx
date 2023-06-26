"use client";

import React, { useState } from "react";
import "./style.css";
import { useRouter } from 'next/navigation';

import { Person } from "@/app/models/person";
import { addPerson } from "@/app/services/people-service";

export default function UserPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [bithDate, setBithDate] = useState("");
  const [deadDate, setDeadDate] = useState("");
  const [urlFoto, setUrlFoto] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let messages = "";

    if (name.length === 0 || name.length > 100) {
      messages += "Nome inválido (Mínimo 0 e Máximo 100 caracteres)"
    }

    if (bio.length === 0 || bio.length > 1000) {
      messages += "\nBiografia inválida (Mínimo 0 e Máximo 1000 caracteres)"
    }

    if (messages) {
      return alert(messages);
    }

    const result = await addPerson({
      name,
      bithDate,
      deadDate,
      urlFoto,
      bio,
    } as Person);

    setName("");
    setBithDate("");
    setBio("");
    setDeadDate("");

    if (result) router.push("/");
  };

  return (
    <form className="user-comment-form" onSubmit={handleSubmit}>
      <h1 className="form-title">Incluir novos homenageados</h1>

      <div className="form-group">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="urlFoto">Url foto:</label>
        <input
          type="text"
          id="urlFoto"
          value={urlFoto}
          onChange={(e) => setUrlFoto(e.target.value)}
        />
      </div>

      <div className="form-dates">
        <div className="form-group flex-1 mr-3">
          <label htmlFor="bithDate">Data Nascimento:</label>
          <input
            type="date"
            id="bithDate"
            value={bithDate}
            onChange={(e) => setBithDate(e.target.value)}
          />
        </div>

        <div className="form-group flex-1">
          <label htmlFor="deadDate">Data falescimento:</label>
          <input
            type="date"
            id="deadDate"
            value={deadDate}
            onChange={(e) => setDeadDate(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="bio">Comentário:</label>
        <textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
      </div>
      <button className="contact-button" type="submit">
        Enviar
      </button>
    </form>
  );
}
