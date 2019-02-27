import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../common/Header'

import Card from './Card'

const PageGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;
`

const CardContainer = styled.section`
  display: grid;
  align-content: flex-start;
  grid-gap: 12px;
  padding: 20px;
  overflow-y: scroll;
`

export default class CardsPage extends Component {
  render() {
    const { onBookmark } = this.props
    return (
      <PageGrid>
        <Header />
        <CardContainer>
          {this.props.cards.map(card => (
            <Card
              {...card}
              key={card._id}
              onBookmark={() => onBookmark(card)}
            />
          ))}
        </CardContainer>
      </PageGrid>
    )
  }
}
