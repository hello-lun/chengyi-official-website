import http from '@/utils/http';

const {
  NEXT_PUBLIC_PROXY_API_HOST,
  NEXT_PUBLIC_PROXY_API_PORT,
  NEXT_PUBLIC_PROXY_API_PRE,
  NODE_ENV
} = process.env;

export const animationCreate = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW({ live: false }).init();
};

export function isMobile(ua) {
  const userAgent = ua || navigator.userAgent;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
}

export const getImgURL = () => {
  return '//' + (NODE_ENV === 'production' ? '/' : `${process.env.NEXT_PUBLIC_PROXY_API_HOST}:${process.env.NEXT_PUBLIC_PROXY_API_PORT}${process.env.NEXT_PUBLIC_PROXY_API_PRE}/`);
}
