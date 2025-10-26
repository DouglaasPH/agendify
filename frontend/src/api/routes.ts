export const ROUTES = {
  auth: {
    login: "/auth/",
    register: "/auth/register",
    refresh: "/auth/refresh",
    logout: "/auth/logout",
    delete: "/auth/delete",
    checkEmail: (email: string) => `/auth/check-email/${email}`,
    getUserData: "/auth/",
    modifyUserData: "/auth/modify-user-data",
    modifyUserEmail: "/auth/modify-user-email",
    modifyUserPassword: "/auth/modify-user-password",
    getUserDataForCustomer: (chat_code: string) => `/auth/${chat_code}`,
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
  customer: {
    registerOrLoginWithoutCustomerId: "/customer/",
    loginWithCustomerId: (id: number) => `/customer/${id}`,
    allAppointments: "/customer/appointment",
    createAppointment: "/customer/appointment/create",
    cancelAppointment: (appointmend_id: number) =>
      `/customer/appointment/${appointmend_id}`,
    allAvailabilities: (professional_id: number) =>
      `/customer/availability/${professional_id}`,
  },
};
