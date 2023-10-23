import { WhatsAppOutlined, WechatOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

const team_data = [
  {
    id: 1,
    img: "/assets/img/chengyi/team1.jpg",
    name: "Alissa Ding",
    title: "Semiconductor Sales Specialist",
    des: "A Semiconductor Sales Specialist possesses extensive knowledge in semiconductor technology, ensuring clients receive optimal solutions for their needs.",
    social_links: [
      {
        link: "https://www.whatsapp.com/",
        target: "_blank",
        icon: <a href="https://api.whatsapp.com/send?phone=+8613610307032&text=Hello"><WhatsAppOutlined /></a>,
        name: "whatsapp",
        color: "tp-youtube",
      },
      {
        link: "http://wechat.com",
        target: "_blank",
        icon: <WechatOutlined />,
        name: "wechat",
        color: "tp-twitter",
      },
      {
        link: "http://phone.com",
        target: "_blank",
        icon: <a href="tel:+8613610307032"><PhoneOutlined /></a>,
        name: "phone",
        color: "tp-fb",
      },
      {
        link: "https://www.email.com/",
        target: "_blank",
        icon: <MailOutlined />,
        name: "email",
        color: "tp-skype",
        value: 'alissa@chengyiauto.cn'
      },
    ],
  },
  {
    id: 2,
    img: "/assets/img/chengyi/team2.jpg",
    name: "Anna Ding",
    title: "Motor and Frequency Inverter Sales Specialist",
    des: "A seasoned Motor and Frequency Inverter Sales Specialist, excels in customer-centric solutions for diverse industrial applications",
    social_links: [
      {
        link: "https://www.youtube.com/",
        target: "_blank",
        icon: <a href="https://api.whatsapp.com/send?phone=+8613725293855&text=Hello"><WhatsAppOutlined /></a>,
        name: "whatsapp",
        color: "tp-youtube",
      },
      {
        link: "http://twitter.com",
        target: "_blank",
        icon: <WechatOutlined />,
        name: "wechat",
        color: "tp-twitter",
      },
      {
        link: "http://facebook.com",
        target: "_blank",
        icon:  <a href="tel:+8613725293855"><PhoneOutlined /></a>,
        name: "phone",
        color: "tp-fb",
      },
      {
        link: "https://www.skype.com/",
        target: "_blank",
        icon: <MailOutlined />,
        name: "email",
        color: "tp-skype",
        value: 'anna@chengyiauto.cn',
      },
    ],
  },
];

export default team_data;
