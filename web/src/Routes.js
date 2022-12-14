import { Set, Router, Route, Private } from '@redwoodjs/router'

import DefaultLayout from 'src/layouts/DefaultLayout'

import Loader from './components/Loader/Loader'

const Routes = () => {
  return (
    <Router>
      <Set wrap={DefaultLayout} whileLoadingPage={Loader}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/login" page={LoginPage} name="login" />
        <Private unauthenticated="login">
          <Route path="/users" page={UserUsersPage} name="users" />
          <Route path="/users/{id}" page={UserUserPage} name="user" />
        </Private>
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
