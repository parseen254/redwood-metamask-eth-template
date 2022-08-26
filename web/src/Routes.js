import { Set, Router, Route, Private } from '@redwoodjs/router'

import Loader from 'src/components/Loader'
import DefaultLayout from 'src/layouts/DefaultLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={DefaultLayout}>
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
