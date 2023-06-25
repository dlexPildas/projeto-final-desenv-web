"use client";

import React, { useState } from "react";
import "./style.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Nome:", name);
    console.log("E-mail:", email);
    console.log("Comentário:", comment);

    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <h1 className="form-title">Deixe um comentário</h1>

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
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="comment">Comentário:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={5}
        ></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}
