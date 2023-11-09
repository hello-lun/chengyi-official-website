import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

const router = createRouter<NextApiRequest, NextApiResponse>();

const baseURL = process.env.REACT_APP_API_URL;

router.get((req, res, next) => {
  const { params } = req.query; // params 是一个数组，包含所有路径段
  // 基于第一个参数判断是哪个API
  if (params[0] === 'category') {
    return goodsCategory(req, res);
  } else if (params[0] === 'get') {
    return goodsGet(req, res);
  }

  res.status(404).json({
    error: "Not found",
  });
});

// this will run if none of the above matches
router.all((req, res) => {
  res.status(405).json({
    error: "Method not allowed",
  });
});

export default router.handler({
  onNoMatch(req, res) {
    console.log('onNoMatch: ', 666);
    res.status(404).json({ error: 'Not Found' });
  },
  onError(err, req, res) {
    res.status(500).json({
      error: (err as Error).message,
    });
  },
});

function goodsCategory(req, res) {
  res.json({ message: 'Response from example1' });
}

async function goodsGet(req, res) {
  // 假设这是你要请求的外部服务的URL
  const externalServiceUrl =  baseURL + '/goods/get';
  // 请求外部服务
  const response = await axios.get(externalServiceUrl);
  // 返回外部服务的响应数据
  res.status(200).json(response.data);
}
