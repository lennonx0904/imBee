import axios from 'axios';

const APIs = {
  fetchTags: () => axios.get('https://api.stackexchange.com/2.3/tags?pagesize=10&order=desc&sort=popular&site=stackoverflow'),
  fetchQuestions: (params) => axios.get('https://api.stackexchange.com/2.3/questions?pagesize=20&order=desc&sort=activity&site=stackoverflow', { params })
};

export default APIs;
