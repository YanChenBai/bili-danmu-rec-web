import { GuardLevel } from 'blive-message-listener';

export interface IdentityInfo {
  /** 直播榜单排名 */
  rank: 0 | 1 | 2 | 3;
  /** 大航海信息 */
  guard_level: GuardLevel;
  /** 房管 */
  room_admin: boolean;
}

export interface Badge {
  active: boolean;
  name: string;
  level: number;
  color: string;
  anchor: {
    room_id: number;
    uid: number;
  };
}

export interface Msg {
  id: number;
  msg: string;
  roomId: string;
  uid: string;
  uname: string;
  createTime: string;
  receiveTime: string;
  messageId: string;
  badge: Badge | null;
  identityInfo: IdentityInfo | null;
}
