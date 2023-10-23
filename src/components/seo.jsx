import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle}`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="CHENGYI is a premier supplier in China specializing in PLC, CPU, HMI, touch screen, inverter, frequency converter, servo motor + drive + encoder, circuit breaker, contactor, relay, sensor, limit switch, and pneumatic components products. Discover our high-quality industrial automation solutions today." />
      <meta name="robots" content="index,follow" />
      <meta name="keywords" content="PLC, CPU, HMI, touch screen, Inverter, Frequency converter, Servo motor + drive + encoder, circuit breaker, contactor, relay, sensor, limit switch, pneumatic components products, CHENGYI, Industrial Automation, China" />
      <link rel="canonical" href="https://yourwebsite.com" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);

export default SEO;
