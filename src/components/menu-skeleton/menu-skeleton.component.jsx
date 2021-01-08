import React from 'react'
import './menu-skeleton.component.css';

const MenuSkeleton = ()=>{
    return <section className="menu__skeleton">
        <article className="image__skeleton animate animatesSkeleton"></article>
        <input type="text" className="animate" disabled placeholder="Search show"/>
    </section>
}
export default MenuSkeleton;