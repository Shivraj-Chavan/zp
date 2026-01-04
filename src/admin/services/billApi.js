import axios from "axios";

const API = axios.create({
  baseURL: "http://69.62.84.113:5001/api", // backend url
});

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