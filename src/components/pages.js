import React from 'react'
import { Link } from 'react-router-dom';
import '../stylesheets/globals_router.scss';
import '../stylesheets/menus.scss'

export const Home = () =>
    <section className='home'>
        <h1>[Home]</h1>
        <nav>
            <Link to="about">about</Link>
            <Link to="events">events</Link>
            <Link to="products">products</Link>
            <Link to="contact">contact</Link>
        </nav>
    </section>
    
export const About = () =>
    <section className='about'>
        <h1>[About]</h1>
    </section>

export const Events = () =>
    <section className='events'>
        <h1>[Events]</h1>
    </section>

export const Products = () =>
    <section className='products'>
        <h1>[Products]</h1>
    </section>

export const Contact = () =>
    <section className='contact'>
        <h1>[Contact]</h1>
    </section>

export const WHoops404 = ({ location }) =>
    <div className="whoops-404">
        <h1>`{location.pathname}` 경로의 자원을 찾을 수 없습니다.</h1>
    </div>