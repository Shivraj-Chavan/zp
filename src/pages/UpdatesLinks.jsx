import React from 'react';
import { ChevronRight, Globe, LayoutList, Building, Signpost, ClipboardCheck, FileText } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function UpdatesLinks({ updates, links }) {
  const { t } = useTranslation();
  const icons = [<Globe />, <LayoutList />, <Building />, <Signpost />, <ClipboardCheck />, <FileText />];

  return (
    <section className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">{t("latest_updates")}</h3>
            <ul className="space-y-2">
              {updates.map((update, idx) => (
                <li key={idx} className="border-b pb-2 text-sm">
                  <a href="#" className="text-orange-700 hover:text-orange-500 flex items-center gap-2">
                    <ChevronRight size={16} /> {update}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">{t("important_links")}</h3>
            <div className="grid grid-cols-2 gap-4">
              {links.map((link, idx) => (
                <a
                  href="#"
                  key={idx}
                  className="flex items-center gap-2 bg-white shadow-sm border px-3 py-2 rounded-xl hover:bg-gray-50 transition"
                >
                  {icons[idx]} <span className="text-sm">{link.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
