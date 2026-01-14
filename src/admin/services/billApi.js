import axios from "axios";

const API = axios.create({
  // baseURL: "http://69.62.84.113:5001/api", // backend url
    baseURL: "https://api.yashwantnagargram.co.in/api",
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // or sessionStorage

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/* ================= RESPONSE INTERCEPTOR ================= */
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Token expired / unauthorized
      if (error.response.status === 401) {
        console.log("Unauthorized! Logging out...");

        localStorage.removeItem("token");

        // Optional redirect
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);


export const googleLogin = (data) =>
  API.post("/users/google-login", data);

export const addBill = (data) =>
  API.post("/bills", data);

export const updateBill = (id, data) =>
  API.put(`/bills/${id}`, data);

export const deleteBill = (id) =>
  API.delete(`/bills/${id}`);

export const getAllBills = (params) =>
  API.get("/bills", { params });

export const getBillById = (id) =>
  API.get(`/bills/${id}`);


export const uploadBillsExcel = (formData) =>
  API.post("/bills/upload-excel", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });