// pages/api/someRoute.ts
import { createRouter } from 'next-connect';

const router = createRouter()
  .get((req, res) => {
    console.log('req: ', 1111);
    // 假设这里有一些逻辑来处理 GET 请求
    const data = { message: 'This is a response from GET request.' };
    res.json(data);
  })
  // ...其他路由处理器，例如 POST...
  .post((req, res) => {
    console.log('res: ', 2222);
    // 处理 POST 请求的逻辑
    res.json({ message: 'This is a response from POST request.' });
  });

export default router.handler({
  onNoMatch(req, res) {
    // 没有匹配到路由时返回404
    res.status(404).json({ error: 'Not Found' });
  },
  onError(err, req, res) {
    // 发生错误时返回500
    res.status(500).json({ error: 'Internal Server Error' });
  },
});
