import api from "./api";
import { ROUTES } from "./routes";

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  data: {
    access_token: string;
    token_type: string;
  };
}

interface RefreshResponse {
  data: {
    access_token: string;
    token_type: string;
  };
}

interface MessageResponse {
  data: {
    msg: string;
  };
}

interface UserData {
  data: {
    name: string;
    email: string;
    phoneNumber: string;
    profession: string;
    profileAvatarId: number;
  };
}

interface PutUserData {
  name?: string;
  phoneNumber?: string;
  profession?: string;
  profileAvatarId?: number;
}

interface PutUserEmail {
  email: string;
}

interface PutUserEmailResponse {
  data: {
    email: string;
  };
}

interface PutUserPassword {
  currentPassword: string;
  newPassword: string;
}

export const loginApi = async (
  user_data: LoginData
): Promise<LoginResponse> => {
  const formData = new FormData();
  formData.append("username", user_data.email);
  formData.append("password", user_data.password);

  return await api.post(ROUTES.auth.login, formData, {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  });
};

export const getUserDataApi = async (
  access_token: string | null
): Promise<UserData> => {
  return await api.get(ROUTES.auth.getUserData, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
};

interface RegisterData {
  name: string;
  email: string;
  phoneNumber: string;
  profession: string;
  password: string;
  profileAvatarId: number;
}

export const registerApi = async (
  user_data: RegisterData
): Promise<LoginResponse> => {
  return await api.post(ROUTES.auth.register, user_data, {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};

interface checkEmailResponse {
  exists: boolean;
}

export const checkEmailApi = async (
  email: string
): Promise<checkEmailResponse> => {
  return await api.get(ROUTES.auth.checkEmail, {
    params: { email },
    withCredentials: true,
  });
};

export const refreshTokenApi = async (): Promise<RefreshResponse> => {
  return await api.post(ROUTES.auth.refresh, {
    withCredentials: true,
  });
};

export const logoutApi = async (
  access_token: string | null
): Promise<MessageResponse> => {
  return await api.post(
    ROUTES.auth.logout,
    {},
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      withCredentials: true,
    }
  );
};

export const deleteApi = async (
  access_token: string | null
): Promise<MessageResponse> => {
  return await api.delete(ROUTES.auth.delete, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
};

export const modifyUserData = async (
  access_token: string | null,
  user_data: PutUserData
): Promise<UserData> => {
  return await api.put(ROUTES.auth.modifyUserData, user_data, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export const modifyUserEmail = async (
  access_token: string | null,
  user_data: PutUserEmail
): Promise<PutUserEmailResponse> => {
  return await api.put(ROUTES.auth.modifyUserEmail, user_data, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export const modifyUserPassword = async (
  access_token: string | null,
  user_data: PutUserPassword
): Promise<MessageResponse> => {
  return await api.put(ROUTES.auth.modifyUserPassword, user_data, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};
