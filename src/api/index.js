import Fetch from '@/utils/fetch';
const api = {
    // 用户相关
    user: {
        login: (data) => Fetch.post('/api/login', data), // 登陆
    },
    list: {
        list: ({ page = 1, pageSize = 5 }) => Fetch.get('/api/list', { page, pageSize }),
        delect: (data) => Fetch.get("/api/delect", data),
        update: ({ id, status }) => Fetch.post("/api/update", { id, status })

    }
}
export default api;