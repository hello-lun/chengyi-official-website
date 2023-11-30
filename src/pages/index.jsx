import React from "react";
import Layout from "../layout/layout";
import HomeOne from "../components/home/home/home";
import SEO from "@/components/seo";
import Wrapper from "../layout/wrapper";
import http, { requestInternal } from '@/utils/http';
import { useCommonState } from "@/store/commom";
import { useEffect } from "react";
import { isMobile } from "@/utils/utils";
import { chunk } from 'lodash';

// 在您的页面组件文件中
export async function getServerSideProps(context) {
  const userAgent = context.req.headers['user-agent'];
  // 获取数据
  const bannerList = await http({
    method: 'get',
    url: '/banners/get',
    data: {},
  });
  // 获取数据
  const goodsList = await http({
    method: 'get',
    url: '/goods/get',
    data: {
      page: 1,
      size: 30
    },
  });

  // 获取数据
  const teamList = await http({
    method: 'get',
    url: '/staff/get',
    data: {},
  });

  // 替换为实际数据获取逻辑
  // 将数据作为 props 传递给页面组件
  return {
    props: {
      bannerList,
      teamList,
      goodsList: chunk(goodsList.list, isMobile(userAgent) ? 4 : 8)
    }
  };
}

const Index = ({
  bannerList,
  teamList,
  goodsList
}) => {
  const changeCommonState = useCommonState().changeCommonState;
  useEffect(() => {
    requestInternal({
      url: '/hello'
    });
    changeCommonState({
      bannerList,
      teamList,
      goodsList
    });
  }, [bannerList, teamList, goodsList]);

  return (
    <Wrapper>
      <SEO pageTitle="Home Main" />
      <Layout>
        <HomeOne />
      </Layout>
    </Wrapper>
  );
};

export default Index;
