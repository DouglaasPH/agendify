import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Components
import NavBar from "./components/navbar/navBar";
import FooterBar from "./components/footerbar/footerBar";

// Pages
import HomePage from "./pages/home/home";
import AboutUsPage from "./pages/about_us/aboutUs";
import HelpCenterPage from "./pages/help_center/helpCenter";
import ContactPage from "./pages/contact/contact";
import PrivacyPolicyPage from "./pages/privacy_policy/privacyPolicy";
import AcceptTermsOfUsePage from "./pages/accept_terms_of_use/acceptTermsOfUse";
import LoginPage from "./pages/login/login";
import RegisterPage from "./pages/register/register";
import ChooseYourAvatarPage from "./pages/choose_your_avatar/chooseYourAvatar";
import UserProfilePage from "./pages/user_profile/userProfile";
import EditDataPage from "./pages/edit_data/edit_data";
import EditEmailPage from "./pages/edit_email/editEmail";
import VerifyYourEmailPage from "./pages/verify_your_email/verifyYourEmail";

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
      <Route path="register">
        <Route
          index
          element={
            <>
              <NavBar /> <RegisterPage /> <FooterBar />
            </>
          }
        />
        <Route
          path="accept-terms-of-use"
          element={
            <>
              <NavBar /> <AcceptTermsOfUsePage /> <FooterBar />
            </>
          }
        />
      </Route>

      <Route
        path="choose-your-avatar"
        element={
          <>
            <NavBar /> <ChooseYourAvatarPage /> <FooterBar />
          </>
        }
      />
      <Route path="user-profile">
        <Route
          index
          element={
            <>
              <NavBar /> <UserProfilePage /> <FooterBar />
            </>
          }
        />
        <Route path="edit">
          <Route
            path="user-data"
            element={
              <>
                <NavBar /> <EditDataPage /> <FooterBar />
              </>
            }
          />
          <Route
            path="email"
            element={
              <>
                <NavBar /> <EditEmailPage /> <FooterBar />
              </>
            }
          />
        </Route>
      </Route>
      <Route
        path="verify-your-email"
        element={
          <>
            <NavBar /> <VerifyYourEmailPage /> <FooterBar />
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
