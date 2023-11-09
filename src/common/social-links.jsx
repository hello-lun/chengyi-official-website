import { WhatsAppOutlined, WechatOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

const social_links = [
  {
    link: (value) => `https://wa.me/${value || "+8613725293855"}?text=Hello`,
    target: "_blank",
    icon: <WhatsAppOutlined className="footer-widget_linkIcon" />,
    color: "tp-f-youtube",
    type: 'whatsapp'
  },
  {
    link: () => '',
    target: "_blank",
    icon: <WechatOutlined className="footer-widget_linkIcon" />,
    color: "tp-f-twitter",
    type: 'wechat'
  },
  {
    link: (value) => `tel: ${value || "+8613610307032"}`,
    target: "_blank",
    icon: <PhoneOutlined className="footer-widget_linkIcon" />,
    color: "tp-f-fb",
    type: 'phone'
  },
  {
    link: (value) => `mailto:${value || "anna@chengyiauto.cn"}?subject=Subject%20of%20the%20email&body=Body%20of%20the%20email`,
    target: "_blank",
    icon: <MailOutlined className="footer-widget_linkIcon" />,
    color: "tp-f-skype",
    type: 'email'
  },
];

const SocialLinks = (data) => {
  return (
    <>
      {social_links.map((l, i) => {
        return <a
          key={i}
          href={l.link(data[l.type])}
          className={l.color}
          target={l.target ? l.target : ""}
        >
          {l.icon}
        </a>
      })}
    </>
  );
};

export default SocialLinks;
