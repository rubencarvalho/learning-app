import React, { useState } from 'react'
import styled from 'styled-components'
import Card from '../cards/Card'
import CardContainer from '../cards/CardContainer'
import { split } from '../utils'
import Form from './Form'
const Grid = styled.section`
  display: grid;
  align-content: flex-end;
  padding: 12px;
`

export default function CreatePage(props) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState('')

  function onInputChange(event) {
    if (event.target.name === 'title') {
      setTitle(event.target.value)
    } else if (event.target.name === 'content') {
      setContent(event.target.value)
    } else if (event.target.name === 'tags') {
      setTags(event.target.value)
    }
  }

  function onSubmitHandler(event) {
    event.preventDefault()
    const splitTags = split(tags)
    props.onSubmit({ title, content, tags: splitTags })
  }

  return (
    <Grid>
      <CardContainer>
        {(title || content || tags) && (
          <Card
            title={title || 'No title yet'}
            content={content || 'No content yet'}
            tags={split(tags)}
          />
        )}
      </CardContainer>
      <Form onSubmit={onSubmitHandler} onInputChange={onInputChange} />
    </Grid>
  )
}
