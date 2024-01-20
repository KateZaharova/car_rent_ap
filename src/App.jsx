import { Route, Routes } from 'react-router-dom';
//import { Layout } from './Layout/Layout.jsx';
import { RestrictedRoute } from "./components/RestrictedRoute.jsx";
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { refreshUser } from "./redux/auth/operations.jsx";


const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
//const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage.jsx"));
//const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage.jsx"));
const CataloguePage = lazy(() => import("./pages/CataloguePage/CataloguePage.jsx"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites.jsx"));

//const ForgetPasswordPage = lazy(() => import("../Pages/ForgetPasswordPage/ForgetPasswordPage.js"));
//const RecoveryPasswordPage = lazy(() => import("../Pages/RecoveryPage/RecoveryPage.jsx"));




export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" /*element={<Layout />}*/>
          <Route path="/" index element={<HomePage />}></Route>
         
           <Route
            path="/catalogue"
            element={
              <RestrictedRoute redirectTo="/catalogue" component={<CataloguePage />} />
            }
          />
           <Route
            path="/favorites"
            element={
              <RestrictedRoute redirectTo="/favorites" component={<Favorites />} />
            }
          />
          
        </Route>
      </Routes>
      <Toaster position="top-right" />
    </div>
  );
};

/*
<Route path="/forgot-password" element={<ForgetPasswordPage />} />
          <Route path="/recovery" element={<RecoveryPasswordPage />} />
           <Route
            path="/signUp"
            element={
              <RestrictedRoute redirectTo="/" component={<SignUpPage />} />
            }
          />
          <Route
            path="/signIn"
            element={
              <RestrictedRoute redirectTo="/" component={<SignInPage />} />
            }
          />
          */