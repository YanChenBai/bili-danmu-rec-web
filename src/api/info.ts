import { AxiosRequestConfig } from 'axios';

export const getUserList = (): AxiosRequestConfig => ({
  method: 'GET',
  url: '/room/get',
});

export interface QueryDanmuParams {
  roomId: number;
  page: number;
  pageSize?: number;
  uname?: string;
  msg?: string;
  endTime?: number;
  startTime?: number;
}
export const queryDanmu = (params: QueryDanmuParams): AxiosRequestConfig => ({
  method: 'GET',
  url: `/danmu/list`,
  params,
});
