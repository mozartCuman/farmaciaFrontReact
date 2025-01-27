import axios from 'axios';
import Farmacia from '../../../models/Farmacia';

const API_URL = 'http://localhost:5000/farmacias';

export const getFarmacias = () => axios.get(API_URL);
export const getFarmaciaById = (id: number) => axios.get(`${API_URL}/${id}`);
export const createFarmacia = (farmacia: Farmacia) => axios.post(API_URL, farmacia);
export const updateFarmacia = (id: number, farmacia: Farmacia) => axios.put(`${API_URL}/${id}`, farmacia);
export const deleteFarmacia = (id: number) => axios.delete(`${API_URL}/${id}`);
