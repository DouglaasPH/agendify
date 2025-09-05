export const ROUTES = {
  auth: {
    login: "/auth/",
    register: "/auth/register",
    refresh: "/auth/refresh",
    logout: "/auth/logout",
    delete: "/auth/delete",
    checkEmail: "/auth/check-email",
    getUserData: "/auth/",
    modifyUserData: "/auth/modify-user-data",
    modifyUserEmail: "/auth/modify-user-email",
    modifyUserPassword: "/auth/modify-user-password",
  },
  appointment: {
    create: "/appointment",
    list: "/appointment/",
    get: (id: number) => `/appointment/${id}`,
    cancel: (id: number) => `/appointment/${id}`,
  },
  availability: {
    create: "/availability",
    list: "/availability",
    get: (id: number) => `/availability/${id}`,
    delete: (id: number) => `/availability/${id}`,
  },
};
