import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import styled from 'styled-components'
import Create from '../create/CreatePage'
import Cards from '../cards/CardsPage'
import Settings from '../settings/SettingsPage'
import {
  getAllCards,
  getCardsFromStorage,
  postNewCard,
  saveCardsToStorage,
  toggleCardBookmark,
} from '../services'
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

class App extends Component {
  state = {
    cards: getCardsFromStorage(),
  }

  componentDidMount() {
    getAllCards().then(res => {
      this.setState({
        cards: res.data,
      })
    })
  }

  componentDidUpdate() {
    saveCardsToStorage(this.state.cards)
  }

  createCard = data => {
    postNewCard(data).then(res => {
      this.setState({
        cards: [...this.state.cards, res.data],
      })
    })
  }

  toggleBookmark = card => {
    toggleCardBookmark(card)
      .then(res => {
        const { cards } = this.state
        const index = cards.indexOf(card)
        this.setState({
          cards: [
            ...cards.slice(0, index),
            { ...res.data },
            ...cards.slice(index + 1),
          ],
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { cards } = this.state
    return (
      <Router>
        <Grid>
          <Route
            exact
            path="/"
            render={() => (
              <Cards cards={cards} onBookmark={this.toggleBookmark} />
            )}
          />
          <Route
            path="/create"
            render={() => <Create onSubmit={this.createCard} />}
          />
          <Route
            path="/bookmarks"
            render={() => (
              <Cards
                cards={cards.filter(card => card.bookmarked)}
                onBookmark={this.toggleBookmark}
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
}

export default App
