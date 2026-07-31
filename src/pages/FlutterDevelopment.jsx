import ServicePageTemplate from "../components/common/ServicePageTemplate";
import { servicesData } from "../data/services";

const FlutterDevelopment = () => {
  const service = servicesData["flutter-development"];
  return <ServicePageTemplate service={service} />;
};

export default FlutterDevelopment;
