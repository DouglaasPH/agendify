// react
import { useEffect, useState } from "react";

// components
import LoginChat from "./components/loginChat";
import AppointmentChat from "./components/appointmentChat";

// api
import { LoginWithCustomerIdApi, verifyChatCodeApi } from "@/api/customer";
import { useParams } from "react-router-dom";
import NotFoundChat from "./components/notFoundChat";
import { useDispatch, useSelector } from "react-redux";
import {
  setAccessTokenCustomer,
  updateCustomerData,
  updateProfessionalData,
} from "@/features/auth/customerSlice";
import type { RootState } from "@/store";

export interface UserDataType {
  id: number;
  name: string;
  profession: string;
  profileAvatarId: number;
}

export interface CustomerDataType {
  name: string;
  email: string;
}

function ChatPage() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.customer.auth.isAuthenticated
  );
  const dispatch = useDispatch();
  const { chat_code } = useParams<string>();
  //const [isLoggedCustomer, setIsLoggedCustomer] = useState(false);
  //const [userData, setUserData] = useState<UserDataType>();
  //const [customerData, setCustomerData] = useState<CustomerDataType>();
  //const [access_token, setAccess_token] = useState("");
  const [isValidChatCode, setIsValidChatCode] = useState(false);

  useEffect(() => {
    const verifyChatCode = async () => {
      if (!chat_code) return setIsValidChatCode(false);
      const fetchAPI = await verifyChatCodeApi(chat_code);

      if (fetchAPI.data) {
        setIsValidChatCode(true);
        dispatch(updateProfessionalData(fetchAPI.data));
        //setUserData(fetchAPI.data);
      }
    };
    verifyChatCode();

    const customer_id = localStorage.getItem("customer_id");

    if (customer_id !== null) {
      const fetch = async () => {
        const fetchAPI = await LoginWithCustomerIdApi(Number(customer_id));
        //setCustomerData(fetchAPI.data.customer_data);
        //setAccess_token(fetchAPI.data.access_token);
        localStorage.setItem(
          "customer_id",
          String(fetchAPI.data.customer_data.id)
        );
        dispatch(setAccessTokenCustomer(fetchAPI.data.access_token));
        dispatch(updateCustomerData(fetchAPI.data.customer_data));
      };
      fetch();
      //setIsLoggedCustomer(true);
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
