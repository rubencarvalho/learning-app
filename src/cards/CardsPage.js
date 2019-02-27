import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../common/Header'
import CardContainer from './CardContainer'

import Card from './Card'

const PageGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;
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
