import axios from 'axios';

const BASE_URL = 'https://portfolio-js.b.goit.study/api';

export async function getReviews() {
  const END_POINT = '/reviews';
  const url = BASE_URL + END_POINT;
  const res = await axios.get(url);
  return res.data;
}

export async function sendInfo(clientInfo) {
  const END_POINT = '/requests';
  const url = BASE_URL + END_POINT;
  const res = await axios.post(url, clientInfo);
  return res.data;
}

