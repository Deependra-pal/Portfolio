import EnterpriseServicePage from "../components/common/EnterpriseServicePage";
import { servicesData } from "../data/services";

const AppDevelopment = () => {
  const service = servicesData["app-development"];
  return <EnterpriseServicePage service={service} />;
};

export default AppDevelopment;
