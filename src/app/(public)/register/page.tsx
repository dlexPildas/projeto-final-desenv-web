"use client";

import React, { useState } from "react";
import "./style.css";
import Link from "next/link";
import ImgTitle from "@/app/components/img-titte";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../services/firebase";
import { useRouter } from "next/navigation";
import { createUser } from "@/app/services/user-service";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (password != confirmPassword) return;

    const result = await createUser(email, password);

    if (result) {
        router.push('/login');
    }
  };

  return (
    <section className="container">
      <div className="login-form-container">
        <div className="title-login">
          <Link href="/">
            <ImgTitle />
          </Link>

          <h2>Criar uma nova conta</h2>
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
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Senha:</label>
            <input
              type="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button type="submit">Criar</button>

          <div className="login-action">
            <Link href="/login">Voltar para login</Link>
          </div>
        </form>
      </div>
    </section>
  );
}
