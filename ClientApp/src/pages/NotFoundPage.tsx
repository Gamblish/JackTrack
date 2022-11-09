import React from 'react'
import { Link } from 'react-router-dom'
import { LogoSvg } from '../img/svgs'

export default function NotFoundPage() {
  return (
    <div className='NotFoundContainer'>
        <LogoSvg/>
        <h1>
            The page you're looking for can't be found.
        </h1>
        <Link className = "NotFoundContainer_Link" to ='/'> Go home </Link>
    </div>
  )
}

