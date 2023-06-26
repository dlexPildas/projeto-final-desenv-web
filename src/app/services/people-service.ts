'use client'

import { Person } from '@/app/models/person';
import {
    collection,
    addDoc,
    getDocs,
    updateDoc,
    doc,
} from 'firebase/firestore';
import { db } from './firebase';

export async function getPeople(favorite: boolean) {
    const people = [] as Person[];
    try {
        const querySnapshot = await getDocs(collection(db, 'person'));
        querySnapshot.forEach((doc) => {
            people.push({ id: doc.id, ...doc.data() } as Person);
        });
        return favorite ? people.filter(x => x.favorite) : people;
    } catch (error) {
        console.error('Error fetching collection: ', error);
    }
    return people;
}

export async function addPerson(person: Person) {
    try {
        const docRef = await addDoc(collection(db, 'person'), person);

        if (docRef.id) return true;

        return false;
    } catch (error) {
        return false;
    }
}

export async function favoritePerson(value: boolean, id: string) {
    try {
        
        await updateDoc(doc(db, 'person', id), {
            favorite: value
        });
        return true;
    } catch (error) {
        return false;
    }
}

export async function addComment(name: string, email: string, message: string) {
    try {
        const docRef = await addDoc(collection(db, 'comment'), { name, email, message });

        if (docRef.id) return true;

        return false;
    } catch (error) {
        return false;
    }
}