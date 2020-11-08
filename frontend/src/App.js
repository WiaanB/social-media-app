import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'
import './App.css'

import { AuthProvider } from './context/auth'
import AuthRoute from './util/AuthRoute'

import MenuBar from './components/MenuBar'
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import SinglePost from './views/SinglePost'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Route exact path='/' component={Home} />
          <AuthRoute exact path='/login' component={Login} />
          <AuthRoute exact path='/register' component={Register} />
          <Route exact path='/posts/:postId' component={SinglePost}/>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
