import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Support from '../pages/Support';
import GetStarted from '../pages/GetStarted';
import WaterSupply from '../pages/WaterSupply';
import PropertyTax from '../pages/PropertyTax';
import Construction from '../pages/Construction';
import TaxPayment from '../pages/TaxPayment';
import Officials from '../pages/Officials';
import GramVibhag from '../pages/GramVibhag';

import CasteCertificate from '../pages/OnlineCertificates/CasteCertificate';
import BirthCertificate from '../pages/OnlineCertificates/BirthCertificate';
import MarriageCertificate from '../pages/OnlineCertificates/MarriageCertificate';
import AboutUsPage from '../pages/aboutus/AboutUsPage';
import BplCertificate from '../pages/OnlineCertificates/BplCertificate';
import Form8Certificate from '../pages/OnlineCertificates/Form8Extract';
import NoDuesCertificate from '../pages/OnlineCertificates/NoDuesCertificate';
import AdminApp from "../admin/AdminApp";
import Dashboard from "../admin/pages/Dashboard";
import AdminBillPayment from "../admin/pages/BillPayment";
import AdminPropertyTax from "../admin/pages/PropertyTax";
import AdminTaxPayment from "../admin/pages/TaxPayment";
import AdminLogin from "../admin/pages/AdminLogin";
import AdminRegister from '../admin/pages/AdminRegister';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'contact', element: <Contact /> },
      { path: 'support', element: <Support /> },
      { path: 'get-started', element: <GetStarted /> },
      { path: 'water-supply', element: <WaterSupply /> },
      { path: 'property-tax', element: <PropertyTax /> },
      { path: 'construction', element: <Construction /> },
      { path: 'tax-payment', element: <TaxPayment /> },
      { path: 'about-gram-panchayat', element: <AboutUsPage /> },
      { path: 'officials', element: <Officials /> },
      { path: 'gram-vibhag', element: <GramVibhag /> },
      { path: "bpl-certificate", element: <BplCertificate /> },
      { path: "birth-certificate", element: <BirthCertificate /> },
      { path: "caste-certificate", element: <CasteCertificate /> },
      { path: "marriage-certificate", element: <MarriageCertificate /> },
      { path: "form8extract", element: <Form8Certificate/>},
      { path: "no-dues-certificate", element: <NoDuesCertificate/>},
    ],
  },
  {
    path: "/admin",
    element: <AdminApp />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "bill-payment", element: <AdminBillPayment/>},    
      { path: "property-tax", element: <AdminPropertyTax /> },
      { path: "tax-payment", element: <AdminTaxPayment /> },
      {path: "/admin/register", element: <AdminRegister />},
    ],
  },
  {path: "/login", element: <AdminLogin /> },
]);

export default routes;
