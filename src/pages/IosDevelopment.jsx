import ServicePageTemplate from "../components/common/ServicePageTemplate";
import { servicesData } from "../data/services";

const IosDevelopment = () => {
  const service = servicesData["ios-development"];
  return <ServicePageTemplate service={service} />;
};

export default IosDevelopment;
