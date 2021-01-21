import { deflate } from 'zlib';
import HttpClient from './HttpClient';

export default Object.freeze({
  getSubwayLines() {
    return HttpClient.get('/subway');
  },

  getSubwayLine(lineId: string) {
    return HttpClient.get(`/subway/${lineId}`);
  }
});
