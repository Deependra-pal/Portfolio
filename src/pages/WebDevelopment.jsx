import EnterpriseServicePage from "../components/common/EnterpriseServicePage";
import { servicesData } from "../data/services";

const WebDevelopment = () => {
  const service = servicesData["web-development"];
  return <EnterpriseServicePage service={service} />;
};

export default WebDevelopment;
