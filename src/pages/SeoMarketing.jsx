import ServicePageTemplate from "../components/common/ServicePageTemplate";
import { servicesData } from "../data/services";

const SeoMarketing = () => {
  const service = servicesData["seo-marketing"];
  return <ServicePageTemplate service={service} />;
};

export default SeoMarketing;
