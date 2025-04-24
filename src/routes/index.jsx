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

import OnlineCertificates from '../pages/OnlineCertificates/OnlineCertificates';
import CasteCertificate from '../pages/OnlineCertificates/CasteCertificate';
import BirthCertificate from '../pages/OnlineCertificates/BirthCertificate';
import BPLCertificate from '../pages/OnlineCertificates/BPLCertificate';
import MarriageCertificate from '../pages/OnlineCertificates/MarriageCertificate';
import About from '../pages/About';

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
      { path: 'about-gram-panchayat', element: <About /> },
      { path: 'officials', element: <Officials /> },
      { path: 'gram-vibhag', element: <GramVibhag /> },

      // Online Certificates main + sub routes
      { path: 'online-certificates', element: <OnlineCertificates /> },
      { path: 'online-certificates/caste', element: <CasteCertificate /> },
      { path: 'online-certificates/birth', element: <BirthCertificate /> },
      { path: 'online-certificates/bpl', element: <BPLCertificate /> },
      { path: 'online-certificates/marriage', element: <MarriageCertificate /> },
    ],
  },
]);

export default routes;
