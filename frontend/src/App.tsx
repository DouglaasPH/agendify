import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
import HomePage from "./pages/home/home";
import AboutUsPage from "./pages/about_us/aboutUs";
import HelpCenterPage from "./pages/help_center/helpCenter";
import ContactPage from "./pages/contact/contact";
import PrivacyPolicyPage from "./pages/privacy_policy/privacyPolicy";
import AcceptTermsOfUsePage from "./pages/accept_terms_of_use/acceptTermsOfUse";
import LoginPage from "./pages/login/login";
import RegisterPage from "./pages/register/register";

// Components
import NavBar from "./components/navbar/navBar";
import FooterBar from "./components/footerbar/footerBar";

const browserRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        index
        element={
          <>
            <NavBar /> <HomePage /> <FooterBar />
          </>
        }
      />
      <Route
        path="about-us"
        element={
          <>
            <NavBar /> <AboutUsPage /> <FooterBar />
          </>
        }
      />
      <Route
        path="help-center"
        element={
          <>
            <NavBar /> <HelpCenterPage /> <FooterBar />
          </>
        }
      />
      <Route
        path="contact"
        element={
          <>
            <NavBar /> <ContactPage /> <FooterBar />
          </>
        }
      />
      <Route
        path="privacy-policy"
        element={
          <>
            <NavBar /> <PrivacyPolicyPage /> <FooterBar />
          </>
        }
      />
      <Route
        path="login"
        element={
          <>
            <NavBar /> <LoginPage /> <FooterBar />
          </>
        }
      />
      <Route
        path="register"
        element={
          <>
            <NavBar /> <RegisterPage /> <FooterBar />
          </>
        }
      />
      <Route
        path="register/accept-terms-of-use"
        element={
          <>
            <NavBar /> <AcceptTermsOfUsePage /> <FooterBar />
          </>
        }
      />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={browserRoutes} />
    </>
  );
}

export default App;
