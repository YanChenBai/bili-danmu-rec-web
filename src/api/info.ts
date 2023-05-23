import { AxiosRequestConfig } from 'axios';

export const getUserList = (): AxiosRequestConfig => ({
  method: 'GET',
  url: '/info/userList',
});

interface GetDanmuParams {
  id: number;
  page: number;
  uname?: string;
  msg?: string;
}
export const getDanmu = (params: GetDanmuParams): AxiosRequestConfig => ({
  method: 'GET',
  url: `/danmu/list`,
  params,
});
