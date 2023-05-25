import { Config } from '@/api/api';

export interface UserListRes {
  id: number;
  roomId: string;
  shortId: string;
  name: string;
  face: string;
  createTime: string;
}
export const getUserList = (): Config => ({
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

export const queryDanmu = (params: QueryDanmuParams): Config => ({
  method: 'GET',
  url: `/danmu/list`,
  params,
  failureTips: true,
});

export const addRoom = (id: string): Config => ({
  method: 'POST',
  url: '/room/add',
  data: { id },
  failureTips: true,
  successTips: true,
});

export interface TodayDanmuCountRes {
  id: number;
  roomId: string;
  count: number;
  createTime: string;
}
export const todayDanmuCount = (): Config => ({
  method: 'GET',
  url: `/room/todayDanmuCount`,
});
