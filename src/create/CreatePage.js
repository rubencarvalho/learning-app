import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '../cards/Card'
import CardContainer from '../cards/CardContainer'
import { split } from '../utils'
const Grid = styled.section`
  display: grid;
  align-content: flex-end;
  padding: 12px;
`

const StyledForm = styled.form`
  display: grid;
  grid-gap: 12px;
  grid-template-rows: 40px 60px 40px 48px;
`

export default class CreatePage extends Component {
  state = {
    title: '',
    content: '',
    tags: '',
  }

  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onSubmit = event => {
    event.preventDefault()
    const tags = split(this.state.tags)
    this.props.onSubmit({ ...this.state, tags })
  }

  render() {
    const { title, content, tags } = this.state

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
        <StyledForm onSubmit={this.onSubmit}>
          <input
            onChange={this.onInputChange}
            type="text"
            placeholder="Title"
            name="title"
          />
          <textarea
            onChange={this.onInputChange}
            placeholder="Content"
            name="content"
            cols="30"
            rows="10"
          />
          <input
            onChange={this.onInputChange}
            type="text"
            placeholder="Tags"
            name="tags"
          />
          <button>Create</button>
        </StyledForm>
      </Grid>
    )
  }
}
