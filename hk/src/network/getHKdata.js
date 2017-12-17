import axios from 'axios';

export function getData() {
  return axios.get('http://ec2-52-78-202-182.ap-northeast-2.compute.amazonaws.com/data/')
}