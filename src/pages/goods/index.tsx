import React, { useEffect, useState } from "react";
import Layout from "../../layout/layout";
import Wrapper from "../../layout/wrapper";
import SEO from "@/components/seo";
import styles from './goods.module.scss';
import http from '@/utils/http';
import { getImgURL } from '@/utils/utils';

const baseImgUrl = getImgURL();

export async function getServerSideProps(context) {

  return {
    props: {
      goodsData: await http({
        method: 'get',
        url: '/goods/get',
        data: {
          page: 1,
          size: 10
        },
      }),
      categoryList: await http({
        method: 'get',
        url: '/category/get',
      }),
      brandList: await http({
        method: 'get',
        url: '/brand/get',
      }),
    },
  };
}

const Goods = ({
  brandList,
  categoryList,
  goodsData,
}) => {
  const [goodsList, setGoodsList] = useState(() => {
    return goodsData.list;
  });
  const [total, setTotal] = useState(() => {
    return goodsData.total;
  });
  const [formData, setFormData] = useState({
    brand: '',
    category: '',
  });

  const getGoods = () => {
    http({
      method: 'get',
      url: '/goods/get',
      data: {
        ...formData,
        page: 1,
        size: 10
      },
    }).then(res => {
      setTotal(res.total);
      setGoodsList(res?.list);
    });
  }

  useEffect(() => {
    if (formData.brand || formData.category) {
      getGoods();
    }
  }, [formData]);

  const changeForm = (data, key) => {
    const temp = {
      ...formData,
      [key]: data.value,
    };
    if (data.value === formData[key]) {
      temp[key] = '';
    }
    setFormData(temp);
  }
  
  const categoryClick = (data) => {
    changeForm(data, 'category');
  }
  
  const brandClick = (data) => {
    changeForm(data, 'brand');
  }

  return (
    <>
      <SEO pageTitle="Home Main" />
      <Layout>
        <div className={styles.main}>
          <div className={`${styles.brand} ${styles.common}`}>
            <span>Brand</span>
            <ul >
              {
                brandList.map((item: any) => (
                  <li key={item.id} onClick={() => brandClick(item)} className={formData.brand === item.value ? styles['active'] : ''}>
                    <img src={baseImgUrl + item.img} alt="" />
                    <p className={`${styles.title} ${styles.slue}`}>{item.lable}</p>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className={`${styles.category} ${styles.common}`}>
            <span>Category</span>
            <ul>
              {
                categoryList.map((item: any) => (
                  <li key={item.id} onClick={() => categoryClick(item)} className={formData.category === item.value ? styles['active'] : ''}>
                    <p className={`${styles['category-title']} ${styles.slue}`}>{item.lable}</p>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className={styles.content}>
            <ul className={`services-item mb-30 ${styles.imgContent}`}>
              {
                goodsList.map((item, index) => (
                  <li key={item.id}>
                    <div>
                      <img src={baseImgUrl + item.images} alt="" />
                    </div>
                    <div className={styles.content}>
                      <div className={styles.title}>{item.title}</div>
                      <p className={styles.pText}>{item.details}</p>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Goods;
