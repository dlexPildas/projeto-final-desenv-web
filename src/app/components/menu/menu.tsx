/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import './menu.css';
import ImgTitle from '../img-titte';

export default function Menu() {
    
    return (
        <header>
            <ImgTitle />

            <nav>
                <ul>
                    <Link href="/">
                        <li>Home</li>
                    </Link>

                    <Link href="/favorite">
                        <li>Favoritos</li>
                    </Link>

                    <Link href="/contact">
                        <li>Fale Conosco</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}