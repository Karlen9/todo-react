const importEnv = require('import-env');
 
const config = importEnv(
  {
    REACT_APP_GET_URL: 'https://todo-api-learning.herokuapp.com/v1/tasks/3/',
    REACT_APP_POST_URL: 'https://todo-api-learning.herokuapp.com/v1/task/3',
    REACT_APP_PATCH_URL: 'https://todo-api-learning.herokuapp.com/v1/task/3/',
    REACT_APP_DELETE_URL: 'https://todo-api-learning.herokuapp.com/v1/task/3/'
  }
);