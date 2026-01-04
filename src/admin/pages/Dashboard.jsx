import React, { useState, useEffect } from 'react';
import { Users, Home, FileText, Wallet, AlertCircle, TrendingUp, MapPin, CheckCircle, Clock, XCircle, Activity, Award, Calendar, Bell, ChevronRight, Download, Eye, IndianRupee, Droplet, Building2, HardHat } from 'lucide-react';
import { useTranslation } from "react-i18next";


const AdminDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [currentTime, setCurrentTime] = useState(new Date());
  const { t } = useTranslation(); 

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Mock data
  const stats = [
    { title: 'Total Population', value: '12,450', icon: Users, color: 'from-emerald-500 to-emerald-600', change: '+2.5%', trend: 'up' },
    { title: 'Total Households', value: '2,890', icon: Home, color: 'from-orange-500 to-orange-600', change: '+1.2%', trend: 'up' },
    { title: 'Pending Applications', value: '47', icon: FileText, color: 'from-red-500 to-red-600', change: '-5.3%', trend: 'down' },
    { title: 'Budget Utilization', value: '68%', icon: Wallet, color: 'from-blue-500 to-blue-600', change: '+12%', trend: 'up' }
  ];

  const schemes = [
    { name: 'MGNREGA', beneficiaries: 450, completion: 75, budget: '₹45.2L', icon: Activity, color: 'text-emerald-600' },
    { name: 'PM Awas Yojana', beneficiaries: 120, completion: 60, budget: '₹32.5L', icon: Home, color: 'text-orange-600' },
    { name: 'Yashwantrao Panchayat Raj Abhiyan', beneficiaries: 400, completion:150, budget: '₹20.8L', icon: Home, color: 'text-orange-600' },
    { name: 'Swachh Bharat Mission', beneficiaries: 890, completion: 92, budget: '₹18.7L', icon: Award, color: 'text-green-600' },
    { name: 'Ayushman Bharat', beneficiaries: 1200, completion: 85, budget: '₹25.8L', icon: Activity, color: 'text-blue-600' }
  ];

  const applications = [
    { type: 'Birth Certificate', pending: 8, approved: 45, rejected: 2, icon: FileText, color: 'bg-blue-50 text-blue-600' },
    { type: 'Death Certificate', pending: 3, approved: 12, rejected: 1, icon: FileText, color: 'bg-purple-50 text-purple-600' },
    { type: 'Property Tax', pending: 15, approved: 78, rejected: 5, icon: Building2, color: 'bg-orange-50 text-orange-600' },
    { type: 'Caste Certificate', pending: 12, approved: 34, rejected: 3, icon: FileText, color: 'bg-green-50 text-green-600' },
    { type: 'Water Connection', pending: 9, approved: 67, rejected: 4, icon: Droplet, color: 'bg-cyan-50 text-cyan-600' }
  ];

  const recentActivities = [
    { action: 'Birth Certificate approved for Ramesh Kumar', user: 'Admin Kumar', time: '10 mins ago', type: 'success' },
    { action: 'Property tax payment received - ₹15,000', user: 'System', time: '25 mins ago', type: 'payment' },
    { action: 'New water connection request registered', user: 'Citizen Portal', time: '1 hour ago', type: 'info' },
    { action: 'MGNREGA work order issued - Road Construction', user: 'Admin Sharma', time: '2 hours ago', type: 'success' },
    { action: 'Monthly budget report generated', user: 'Finance Dept', time: '3 hours ago', type: 'info' }
  ];

  const alerts = [
    { message: 'Monthly financial report submission due in 3 days', priority: 'high', icon: Calendar },
    { message: '15 property tax payments overdue - Action required', priority: 'medium', icon: AlertCircle },
    { message: 'Gram Sabha meeting scheduled for December 28, 2025', priority: 'low', icon: Bell },
    { message: 'MGNREGA wage payment pending approval', priority: 'high', icon: IndianRupee }
  ];

  const departments = [
    { name: 'Water Supply', count: 23, icon: Droplet, color: 'bg-cyan-500' },
    { name: 'Property Tax', count: 15, icon: Building2, color: 'bg-orange-500' },
    { name: 'Construction', count: 8, icon: HardHat, color: 'bg-yellow-500' },
    { name: 'Certificates', count: 31, icon: FileText, color: 'bg-green-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
            <h1 className="text-2xl font-bold">
  {t("yashwantnagarGrampanchayat")}
</h1>

<p className="text-green-100 text-sm mt-1">
  {t("yashwantnagarMarathi")} - {t("dashboard")}
</p>

            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{currentTime.toLocaleTimeString('en-IN')}</div>
              <div className="text-green-100 text-sm">{currentTime.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8 bg-white rounded-2xl shadow-md p-6 border-l-4 border-green-600">
          <div className="flex justify-between items-center">
            <div>
            <h2 className="text-2xl font-bold text-gray-800">
  {t("welcomeBack")}
</h2>

<p className="text-gray-600 mt-1">
  {t("happeningToday")}
</p>

            </div>
            <div className="flex gap-3">
            {['week', 'month', 'quarter', 'year'].map(period => (
  <button key={period}>
    {t(period)}
  </button>
))}

            
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden">
              <div className={`bg-gradient-to-r ${stat.color} p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    stat.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-white/90 text-sm font-medium mb-2">{stat.title}</h3>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Schemes Progress */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">
  {t("govSchemesProgress")}
</h2>

              <button className="text-green-600 hover:text-green-700 font-semibold text-sm flex items-center gap-1">
                View All <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-5">
              {schemes.map((scheme, idx) => (
                <div key={idx} className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${scheme.color} bg-opacity-10`}>
                        <scheme.icon className={`w-5 h-5 ${scheme.color}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">{scheme.name}</h3>
                        <p className="text-sm text-gray-600">{scheme.beneficiaries} beneficiaries • Budget: {scheme.budget}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-gray-800">{scheme.completion}%</span>
                      <p className="text-xs text-gray-500">Complete</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500 shadow-md"
                      style={{ width: `${scheme.completion}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alerts */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">
  {t("alerts")}
</h2>

              <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full">
                {alerts.filter(a => a.priority === 'high').length} High
              </span>
            </div>
            <div className="space-y-3">
              {alerts.map((alert, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border-l-4 transition-all hover:shadow-md ${
                    alert.priority === 'high'
                      ? 'bg-red-50 border-red-500'
                      : alert.priority === 'medium'
                      ? 'bg-yellow-50 border-yellow-500'
                      : 'bg-blue-50 border-blue-500'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <alert.icon className={`w-5 h-5 mt-0.5 ${
                      alert.priority === 'high' ? 'text-red-600' : alert.priority === 'medium' ? 'text-yellow-600' : 'text-blue-600'
                    }`} />
                    <p className="text-sm text-gray-700 font-medium flex-1">{alert.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Applications & Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Applications Status */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">
  {t("applicationStatus")}
</h2>

              <button className="text-green-600 hover:text-green-700 font-semibold text-sm flex items-center gap-1">
                <Eye className="w-4 h-4" /> View All
              </button>
            </div>
            <div className="space-y-4">
              {applications.map((app, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${app.color}`}>
                      <app.icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-gray-800">{app.type}</span>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <div className="flex items-center gap-1 bg-orange-50 px-3 py-1 rounded-lg">
                      <Clock className="w-4 h-4 text-orange-600" />
                      <span className="text-orange-600 font-bold">{app.pending}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-green-50 px-3 py-1 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-green-600 font-bold">{app.approved}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-red-50 px-3 py-1 rounded-lg">
                      <XCircle className="w-4 h-4 text-red-600" />
                      <span className="text-red-600 font-bold">{app.rejected}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">
  {t("recentActivities")}
</h2>

              <button className="text-green-600 hover:text-green-700 font-semibold text-sm">
                View Timeline
              </button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity, idx) => (
                <div key={idx} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0">
                  <div className={`w-3 h-3 rounded-full mt-2 ${
                    activity.type === 'success' ? 'bg-green-500' : activity.type === 'payment' ? 'bg-blue-500' : 'bg-orange-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800">{activity.action}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      by <span className="font-medium text-green-600">{activity.user}</span> • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Department Overview & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Department Overview */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
  {t("deptPendingTasks")}
</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {departments.map((dept, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl border border-gray-100 hover:shadow-lg transition-all transform hover:-translate-y-1 cursor-pointer">
                  <div className={`${dept.color} p-3 rounded-xl mb-3 inline-block`}>
                    <dept.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-1">{dept.count}</div>
                  <div className="text-sm text-gray-600 font-medium">{dept.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-md p-6 text-white">
          <h2 className="text-xl font-bold mb-6">
  {t("quickActions")}
</h2>

            <div className="space-y-3">
              <button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-between group">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Approve Pending
                </span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-between group">
                <span className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Generate Report
                </span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-between group">
                <span className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Manage Citizens
                </span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-between group">
                <span className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Ward Details
                </span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;