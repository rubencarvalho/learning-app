import React from 'react'
import styled from 'styled-components'

const Grid = styled.section`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2px;
`

const Link = styled.div`
  display: flex;
  cursor: default;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  flex: 1 1;
  background: #eee;
  color: ${p => (p.isActive ? 'hotpink' : '#333')};
  text-transform: uppercase;
`

export default function Filter({ tags, activeTag, onClick }) {
  return (
    <Grid>
      {tags.map(tag => (
        <Link
          key={tag}
          isActive={tag === activeTag}
          onClick={() => onClick(tag)}
        >
          {tag}
        </Link>
      ))}
    </Grid>
  )
}
