import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: grid;
  grid-gap: 12px;
  grid-template-rows: 40px 60px 40px 48px;
`

export default function Form({ data, onSubmit, onInputChange }) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <input
        onChange={onInputChange}
        type="text"
        placeholder="Title"
        name="title"
        value={data.title}
      />
      <textarea
        onChange={onInputChange}
        placeholder="Content"
        name="content"
        cols="30"
        rows="10"
        value={data.content}
      />
      <input
        onChange={onInputChange}
        type="text"
        placeholder="Tags"
        name="tags"
        value={data.tags}
      />
      <button>Create</button>
    </StyledForm>
  )
}
