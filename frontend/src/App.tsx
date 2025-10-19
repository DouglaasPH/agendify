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
import HomePage from "./pages/home/homePage";
import AboutUsPage from "./pages/about_us/aboutUsPage";
import HelpCenterPage from "./pages/help_center/helpCenterPage";
import ContactPage from "./pages/contact/contactPage";
import TermsOfUsePage from "./pages/termsOfUsePage/termsOfUsePage";
import AcceptTermsOfUsePage from "./pages/accept_terms_of_use/acceptTermsOfUsePage";
import LoginPage from "./pages/loginPage/loginPage";
import RegisterPage from "./pages/register/register";
import ChooseYourAvatarPage from "./pages/choose_your_avatar/chooseYourAvatarPage";
import UserProfilePage from "./pages/user_profile/userProfilePage";
import EditDataPage from "./pages/edit_data/edit_dataPage";
import EditEmailPage from "./pages/edit_email/editEmail";
import EmailVerifiedSuccesfullyPage from "./pages/email_verified_successfully/emailVerifiedSuccessfully";
import ForgotYourPasswordWithoutLoginPage from "./pages/forgot_your_password_without_login/forgotYourPassword_without_login";
import ResetPasswordWithoutLoginPage from "./pages/reset_password_without_login/resetPasswordWithoutLoginPage";
import ResetPasswordWithLoginPage from "./pages/reset_password_with_login/resetPasswordWithLoginPage";
import PasswordChangedSuccessfullyPage from "./pages/password_changed_successfully/passwordChangedSuccessfully";
import DashboardPage from "./pages/dashboard/dashboard";
import AvailabilityPage from "./pages/availability/availability";
import AppointmentsPage from "./pages/appointments/appointments";
import ChatPage from "./pages/chat/chat";
import CreateNewAvailabilityPage from "./pages/create_new_availability/createNewAvailability";
import PrivacyPolicyPage from "./pages/privacy_policy/privacyPolicy";

// Redux
import { logout, setAccessToken } from "./features/auth/authSlice";
import { resetUserData, updateUserData } from "./features/auth/userDataSlice";
import { updateLoading } from "./features/loadingSlice";

// API
import { getUserDataApi, refreshTokenApi } from "./api/authApi";

// URLs
// /terms-of-use OK
// privacy-policy OK
// /about-us OK
// /contact OK
// /help-center OK

// /login OK

// /register OK
// /register/accept-terms-of-use OK
// /register/choose-your-avatar OK

// /forgot-your-password OK
// /forgot-your-password/reset-password OK

// /user/profile OK
// /user/edit/user-data OK
// /user/edit/email OK
// /user/edit/email/succesfully OK
// /user/edit/password OK
// /user/password-changed-succesfully-notice OK

// /user/dashboard OK
// /user/availability OK
// /user/availability/create OK
// /user/appointment OK

// chat PENDING

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
        path="terms-of-use"
        element={
          <>
            <NavBar /> <TermsOfUsePage /> <FooterBar />
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
              <LoginPage />
            </>
          }
        />
        <Route path="register">
          <Route
            index
            element={
              <>
                <RegisterPage />
              </>
            }
          />
          <Route element={<AcceptTermsOfUsePagePrivateRoute />}>
            <Route
              path="accept-terms-of-use"
              element={
                <>
                  <AcceptTermsOfUsePage />
                </>
              }
            />
            <Route
              path="choose-your-avatar"
              element={
                <>
                  <ChooseYourAvatarPage />
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
                <ForgotYourPasswordWithoutLoginPage />
              </>
            }
          />
          <Route
            path="reset-password"
            element={
              <>
                <ResetPasswordWithoutLoginPage />
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
            <Route path="email">
              <Route
                index
                element={
                  <>
                    <NavBar /> <EditEmailPage /> <FooterBar />
                  </>
                }
              />
              <Route
                path="succesfully"
                element={<EmailVerifiedSuccesfullyPage />}
              />
            </Route>
            <Route path="password">
              <Route
                index
                element={
                  <>
                    <NavBar /> <ResetPasswordWithLoginPage /> <FooterBar />
                  </>
                }
              />
              <Route
                path="succesfully"
                element={
                  <>
                    <NavBar /> <PasswordChangedSuccessfullyPage /> <FooterBar />
                  </>
                }
              />
            </Route>
          </Route>
        </Route>
        <Route
          path="dashboard"
          element={
            <>
              <NavBar /> <DashboardPage /> <FooterBar />
            </>
          }
        />
        <Route path="availability">
          <Route
            index
            element={
              <>
                <NavBar /> <AvailabilityPage /> <FooterBar />
              </>
            }
          />
          <Route
            path="create"
            element={
              <>
                <NavBar /> <CreateNewAvailabilityPage /> <FooterBar />
              </>
            }
          />
        </Route>
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
        if (error.response.status == 401) {
          dispatch(logout());
          dispatch(resetUserData());
        }
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

// user/
// element={<VerifyAuthentication />}
