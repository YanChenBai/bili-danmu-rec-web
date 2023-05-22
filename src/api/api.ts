import { message } from '@/utils/discrete';
import Axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

type Config = AxiosRequestConfig & {
  successTips?: boolean;
  failureTips?: boolean;
};

Axios.defaults.baseURL = 'http://localhost:3000';
export interface Respons<T = any> {
  code: number;
  message?: string;
  data: T;
}
function Api<T = any>(config: Config): Promise<Respons<T> | false> {
  return new Promise(async (resolve, rejects) => {
    Axios(config)
      .then((res) => {
        if (res.data.code === 200) {
          if (config.successTips)
            if (config.failureTips) message.success(res.data.message || '成功');
          resolve(res.data);
        } else {
          if (config.failureTips) message.error(res.data.message || '成功');
          rejects(res.data);
        }
      })
      .catch((res) => {
        console.log(res);
        if (config.failureTips) {
          if (res.response.data.message) {
            message.error(res.response.data.message);
          } else {
            message.error('请求错误!');
          }
        }
        rejects();
      });
  });
}

export default Api;
