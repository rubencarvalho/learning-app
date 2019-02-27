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
export default function Header() {
  const tags = ['html', 'css', 'js', 'shell']

  const [activeTag, setActiveTag] = useState('html')

  return (
    <header>
      <Title>{activeTag}</Title>
      <Filter items={tags} active={activeTag} onClick={setActiveTag} />
    </header>
  )
}
