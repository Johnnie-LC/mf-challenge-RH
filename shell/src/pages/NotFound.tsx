import React from 'react'
import { NotFoundBlock, NotFoundWrapper } from './NotFoundStyles'

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundBlock className="not-found">
        <h1 className="not-found__title">404 - Not Found</h1>
        <p className="not-found__message">The page you are looking for does not exist.</p>
      </NotFoundBlock>
    </NotFoundWrapper>
  )
}

export default NotFound
