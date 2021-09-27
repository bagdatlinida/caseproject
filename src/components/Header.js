import React from 'react'
import {Menu} from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header() {
    return (
        <>
            <Menu stackable>
        <Menu.Item>
          <img src="https://react.semantic-ui.com/logo.png" />
        </Menu.Item>
        
        <Menu.Item
          name='Main Page'>
          <Link to="/"> Main Page </Link>
        </Menu.Item>
        

        <Menu.Item
        name='Games'>
        <Link to="/games">Games</Link>
       </Menu.Item>

        <Menu.Item
        name='Game Results'>
        <Link to="/results">Game Results</Link>
        </Menu.Item>

        </Menu>

        </>
    )
}

export default Header
