import { AxiosRequestConfig } from 'axios';

export const getUserList = (): AxiosRequestConfig => ({
  method: 'GET',
  url: '/info/userList',
});

export const getDanmu = (id: number): AxiosRequestConfig => ({
  method: 'GET',
  url: `/danmu/list?id=${id}&page=1`,
});
