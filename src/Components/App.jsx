// import ContactsForm from "./ContactsForm/ContactsForm";
// import Filter from "./Filter/Filter";
// import ContactsList from "./ContactsList/ContactsList";


// export default function App() {


//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactsForm/>

//       <h2>Contacts</h2>
//       <Filter />
// //       <ContactsList/>
// //     </div>
// //   );
// }

import { Routes, Route } from 'react-router-dom';
import Login from '../view/Login';
import Register from '../view/Register';
import Contact from '../view/Contacts';
import HomePage from '../view/HomePage';
import AppBar from './AppBar/AppBar';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';
import { fetchCurrentUser } from '../redux/auth/auth-back-end';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isAuth } from '../redux/auth/auth-selectors';

function App() {
  const isLoggedIn = useSelector(isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser(isLoggedIn));
  }, [dispatch, isLoggedIn]);

  return (
    <div>
      <AppBar />
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute restricted redirectTo="/contacts">
              <HomePage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute restricted>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute restricted>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login">
              <Contact />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;