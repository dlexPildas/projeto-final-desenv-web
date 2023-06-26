'use client'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "./firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function createUser(email: string, password: string) {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);

        if (result.user) {
            return true;
        }

        return false;
    } catch (error) {
        return false;
    }
}

export async function getUserRule(email: string) {
    let rule = {};

    try {
        const rulesRef = collection(db, 'rules');
        const q = query(rulesRef, where("emailUser", "==", email));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            rule = { id: doc.id, ...doc.data() };
        });
        return rule;        
    } catch (error) {
        console.error('Error fetching collection: ', error);
    }
}

export async function loginUser(email: string, password: string) {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);

        if (result.user) {
            const rule = await getUserRule(email) as { email: string, isAdmin: boolean };
            debugger
            localStorage.setItem('login-user', JSON.stringify({ isAdmin: rule?.isAdmin, user: result.user }));
            return true;
        }

        return false;
    } catch (error) {
        return false;
    }
}

export async function logoutUser() {
    try {
        await signOut(auth);

        localStorage.removeItem('login-user');
        return true;
    } catch (error) {
        return false;
    }
}


export function getUser() {
    if(!isAuthenticated()) return;

    const user = localStorage.getItem('login-user');

    if(!user) return null;

    return JSON.parse(user);
}



export function isAuthenticated() {
    const user = localStorage.getItem('login-user');

    if(user) return true;

    return false;
}

export function isAdmin() {
    const user = localStorage.getItem('login-user');

    if(user) {
        const userFormatted = JSON.parse(user);
        return userFormatted.isAdmin;
    }

    return false;
}