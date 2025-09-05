import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// Private Routes
import {
  VerifyAuthentication,
  VerifyNotAuthentication,
} from "./components/routes/VerifyAuthentication";
import { AcceptTermsOfUsePagePrivateRoute } from "./components/routes/PrivateRoutes";

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
//import VerifyYourEmailPage from "./pages/verify_your_email/verifyYourEmail";
//import EmailChangeNoticePage from "./pages/email_change_notice/emailChangeNotice";
//import EmailVerifiedSuccesfullyPage from "./pages/email_verified_successfully/emailVerifiedSuccessfully";
import ForgotYourPasswordWithoutLoginPage from "./pages/forgot_your_password_without_login/forgotYourPassword_without_login";
import ResetPasswordWithoutLoginPage from "./pages/reset_password_without_login/resetPasswordWithoutLogin";
import ResetPasswordWithLoginPage from "./pages/reset_password_with_login/resetPasswordWithLogin";
import PasswordChangedSuccessfullyPage from "./pages/password_changed_successfully/passwordChangedSuccessfully";
import DashboardPage from "./pages/dashboard/dashboard";
import AvailabilityPage from "./pages/availability/availability";
import AppointmentsPage from "./pages/appointments/appointments";
import ChatPage from "./pages/chat/chat";

// Redux
import { logout, setAccessToken } from "./features/auth/authSlice";
import { resetUserData, updateUserData } from "./features/auth/userDataSlice";

// API
import { getUserDataApi, refreshTokenApi } from "./api/authApi";
import { updateLoading } from "./features/loadingSlice";

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
      <Route element={<VerifyNotAuthentication />}>
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
          <Route element={<AcceptTermsOfUsePagePrivateRoute />}>
            <Route
              path="accept-terms-of-use"
              element={
                <>
                  <NavBar /> <AcceptTermsOfUsePage /> <FooterBar />
                </>
              }
            />
            <Route
              path="choose-your-avatar"
              element={
                <>
                  <NavBar /> <ChooseYourAvatarPage /> <FooterBar />
                </>
              }
            />
          </Route>
        </Route>
        <Route path="forgot-your-password">
          <Route
            index
            element={
              <>
                <NavBar /> <ForgotYourPasswordWithoutLoginPage /> <FooterBar />
              </>
            }
          />
          <Route
            path="reset-password"
            element={
              <>
                <NavBar /> <ResetPasswordWithoutLoginPage /> <FooterBar />
              </>
            }
          />
        </Route>
      </Route>
      <Route path="user" element={<VerifyAuthentication />}>
        <Route path="profile">
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
              index
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
            <Route
              path="password"
              element={
                <>
                  <NavBar /> <ResetPasswordWithLoginPage /> <FooterBar />
                </>
              }
            />
          </Route>
        </Route>
        <Route
          path="password-changed-succesfully-notice"
          element={
            <>
              <NavBar /> <PasswordChangedSuccessfullyPage /> <FooterBar />
            </>
          }
        />
        <Route
          path="dashboard"
          element={
            <>
              <NavBar /> <DashboardPage /> <FooterBar />
            </>
          }
        />
        <Route
          path="availability"
          element={
            <>
              <NavBar /> <AvailabilityPage /> <FooterBar />
            </>
          }
        />
        <Route
          path="appointment"
          element={
            <>
              <NavBar /> <AppointmentsPage /> <FooterBar />
            </>
          }
        />
      </Route>
      <Route
        path="chat"
        element={
          <>
            <NavBar /> <ChatPage />
          </>
        }
      />
    </Route>
  )
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateLoading());
    const refreshAccessToken = async () => {
      try {
        const refreshTokenResponse = await refreshTokenApi();
        dispatch(setAccessToken(refreshTokenResponse.data.access_token));
        const userDataResponse = await getUserDataApi(
          refreshTokenResponse.data.access_token
        );
        dispatch(updateUserData(userDataResponse.data));
      } catch (error) {
        dispatch(logout());
        dispatch(resetUserData());
      }
    };

    refreshAccessToken();
    dispatch(updateLoading());
  }, []);

  return (
    <>
      <RouterProvider router={browserRoutes} />
    </>
  );
}

export default App;
