import axios from 'axios';
// import md5 from 'md5';

// const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
// const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;

// const time = Number(new Date());

// const hash = md5(time + privateKey + publicKey);

const api = axios.create({
  baseURL: `http://gateway.marvel.com/v1/public/`
});

export default api;
