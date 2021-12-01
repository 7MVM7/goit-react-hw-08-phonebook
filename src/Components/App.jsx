import { Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect,Suspense,lazy } from 'react';
import AppBar from './AppBar/AppBar';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';
import { fetchCurrentUser } from '../redux/auth/auth-back-end';
// import { isAuth } from '../redux/auth/auth-selectors';
import { getFetchingCurrent } from '../redux/auth/auth-selectors';


const HomePage = lazy(() => import('../view/HomePage'));
const Register = lazy(() => import('../view/Register'));
const Login = lazy(() => import('../view/Login'));
const Contact = lazy(() => import('../view/Contacts'));

function App() {
  // const isLoggedIn = useSelector(isAuth);
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getFetchingCurrent);

     useEffect(() => dispatch(fetchCurrentUser()), [dispatch]);


  // useEffect(() => {
  //   dispatch(fetchCurrentUser(isLoggedIn));
  // }, [dispatch, isLoggedIn]);


  return (
    <div>
       {isFetchingCurrentUser ? (
        <h2>Loading</h2>
       ) : ( 
         <>
      <AppBar />
      <Switch>
<Suspense fallback={<p>Завантаження...</p>}>
<PublicRoute exact path="/">
<HomePage/>
  </PublicRoute>
       <PublicRoute exact path="/register" restricted>
<Register/>
        </PublicRoute>
     
        <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                  <Login />
              </PublicRoute>
              <PrivateRoute path="/contacts">
                <Contact/>
              </PrivateRoute>
              <Redirect to="/" />
            </Suspense>
          </Switch>
          </>
       )}
</div>
  );
}
export default App;





