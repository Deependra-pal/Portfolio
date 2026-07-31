import ServicePageTemplate from "../components/common/ServicePageTemplate";
import { servicesData } from "../data/services";

const CreativeDesign = () => {
  const service = servicesData["creative-design"];
  return <ServicePageTemplate service={service} />;
};

export default CreativeDesign;
