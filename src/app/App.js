import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import styled from 'styled-components'
import Cards from '../cards/CardsPage'
import Create from '../create/CreatePage'
import {
  getAllCards,
  getCardsFromStorage,
  postNewCard,
  saveCardsToStorage,
  toggleCardBookmark,
} from '../services'
import Settings from '../settings/SettingsPage'
import GlobalStyle from './GlobalStyle'

const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 48px;
`

const Nav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2px;
`

const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
  color: white;
  text-decoration: none;

  &.active {
    background: hotpink;
  }
`

export default function App() {
  const [cards, setCards] = useState(getCardsFromStorage())

  useEffect(() => {
    getAllCards().then(res => {
      setCards(res.data)
    })
  })

  useEffect(() => {
    saveCardsToStorage(cards)
  }, [cards])

  function createCard(data) {
    postNewCard(data).then(res => {
      setCards([...cards, res.data])
    })
  }

  function toggleBookmark(card) {
    toggleCardBookmark(card)
      .then(res => {
        const index = cards.indexOf(card)
        setCards([
          ...cards.slice(0, index),
          { ...res.data },
          ...cards.slice(index + 1),
        ])
      })
      .catch(err => console.log(err))
  }

  return (
    <Router>
      <Grid>
        <Route
          exact
          path="/"
          render={() => <Cards cards={cards} onBookmark={toggleBookmark} />}
        />
        <Route path="/create" render={() => <Create onSubmit={createCard} />} />
        <Route
          path="/bookmarks"
          render={() => (
            <Cards
              cards={cards.filter(card => card.bookmarked)}
              onBookmark={toggleBookmark}
            />
          )}
        />
        <Route path="/settings" component={Settings} />
        <Nav>
          <StyledLink exact to="/">
            Home
          </StyledLink>
          <StyledLink to="/bookmarks">Bookmarks</StyledLink>
          <StyledLink to="/create">Create</StyledLink>
          <StyledLink to="/settings">Settings</StyledLink>
        </Nav>
        <GlobalStyle />
      </Grid>
    </Router>
  )
}
