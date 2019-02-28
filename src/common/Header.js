import React, { useState } from 'react'
import styled from 'styled-components'
import Filter from './Filter'

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin-bottom: 4px;
  background: hotpink;
  color: white;
  text-transform: uppercase;
`
export default function Header({ tags, setActiveTag, activeTag }) {
  tags = ['all', ...tags]

  return (
    <header>
      <Title>{activeTag}</Title>
      <Filter tags={tags} activeTag={activeTag} onClick={setActiveTag} />
    </header>
  )
}
