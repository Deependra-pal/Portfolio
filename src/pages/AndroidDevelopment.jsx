import ServicePageTemplate from "../components/common/ServicePageTemplate";
import { servicesData } from "../data/services";

const AndroidDevelopment = () => {
  const service = servicesData["android-development"];
  return <ServicePageTemplate service={service} />;
};

export default AndroidDevelopment;
