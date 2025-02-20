import { HttpClient, HEADER_USER_AGENT } from './HttpClient';
import { RequestOptions, RequestURL } from './Request';

let httpclient: HttpClient;
export async function request(url: RequestURL, options?: RequestOptions) {
  if (!httpclient) {
    if (options?.socketPath) {
      httpclient = new HttpClient({
        connect: { socketPath: options.socketPath },
      });
    } else {
      httpclient = new HttpClient({});
    }
  }
  return await httpclient.request(url, options);
}

export { HttpClient, HEADER_USER_AGENT as USER_AGENT } from './HttpClient';
export {
  MockAgent, ProxyAgent, Agent, Dispatcher,
  setGlobalDispatcher, getGlobalDispatcher,
} from 'undici';

export default {
  request,
  USER_AGENT: HEADER_USER_AGENT,
};
