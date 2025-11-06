// react
import { useEffect, useState } from "react";

// components
import LoginChat from "./components/loginChat";
import AppointmentChat from "./components/appointmentChat";
import NotFoundChat from "./components/notFoundChat";

//  API
import { LoginWithCustomerIdApi, verifyChatCodeApi } from "@/services/customer";
import { useParams } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  setAccessTokenCustomer,
  updateCustomerData,
  updateProfessionalData,
} from "@/features/auth/customerSlice";
import type { RootState } from "@/store";

function ChatPage() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.customer.auth.isAuthenticated
  );
  const dispatch = useDispatch();
  const { chat_code } = useParams<string>();
  const [isValidChatCode, setIsValidChatCode] = useState(false);

  useEffect(() => {
    const verifyChatCode = async () => {
      if (!chat_code) return setIsValidChatCode(false);
      const fetchAPI = await verifyChatCodeApi(chat_code);

      if (fetchAPI.data) {
        setIsValidChatCode(true);
        dispatch(updateProfessionalData(fetchAPI.data));
      }
    };
    verifyChatCode();

    const customer_id = localStorage.getItem("customer_id");

    if (customer_id !== null) {
      const fetch = async () => {
        const fetchAPI = await LoginWithCustomerIdApi(Number(customer_id));
        localStorage.setItem(
          "customer_id",
          String(fetchAPI.data.customer_data.id)
        );
        dispatch(setAccessTokenCustomer(fetchAPI.data.access_token));
        dispatch(updateCustomerData(fetchAPI.data.customer_data));
      };
      fetch();
    }
  });

  return (
    <main className="h-screen w-full px-5 lg:px-0">
      {isValidChatCode && isAuthenticated ? (
        <AppointmentChat />
      ) : isValidChatCode && !isAuthenticated ? (
        <LoginChat />
      ) : (
        <NotFoundChat />
      )}
    </main>
  );
}

export default ChatPage;

/*
 */
