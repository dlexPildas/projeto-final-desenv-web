"use client";

import Link from "next/link";
import "./menu.css";
import ImgTitle from "../img-titte";
import { useEffect, useState } from "react";
import {
  isAdmin,
  isAuthenticated,
  logoutUser,
} from "@/app/services/user-service";
import { useRouter } from "next/navigation";

export default function Menu() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [admin, setAdmin] = useState(false);

  const handleLogout = async () => {
    const result = await logoutUser();
    if (result) {
      router.push("/login");
      setAuthenticated(false);
    }
  };

  const handleAuthenticated = async () => {
    const result = isAuthenticated();
    setAuthenticated(result);
    console.log('auth');
  };

  const handleadmin = async () => {
    const result = isAdmin();
    setAdmin(result);
    console.log('auth');
  };

  useEffect(()=>{
    handleAuthenticated();
    handleadmin();
	}, [])


  return (
    <header>
      <ImgTitle />

      <nav>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>

          <Link href="/contact">
            <li>Fale Conosco</li>
          </Link>

          {admin ? (
            <>
              <Link href="/user">
                <li>Incluir</li>
              </Link>
            </>
          ) : (
            <></>
          )}

          {authenticated ? (
            <>
              <Link href="/favorite">
                <li>Favoritos</li>
              </Link>

              <Link onClick={handleLogout} href="/">
                <li>Sair</li>
              </Link>
            </>
          ) : (
            <>
              <Link href="/login">
                <li>Login</li>
              </Link>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
