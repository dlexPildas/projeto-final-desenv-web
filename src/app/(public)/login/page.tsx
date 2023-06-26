"use client";

import React, { useState } from "react";
import "./style.css";
import Link from "next/link";
import ImgTitle from "@/app/components/img-titte";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Lógica de autenticação...
  };

  return (
    <section className="container">
      <div className="login-form-container">

        <div className="title-login">     
        <Link href="/">
          <ImgTitle />
        </Link> 

          <h2>Login</h2>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
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
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Entrar</button>

          <div className="login-action">
            <a href="">
              Esqueceu sua senha?
            </a>

            <a href="">
              Criar conta
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
