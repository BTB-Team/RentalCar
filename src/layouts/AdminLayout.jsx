import { Outlet } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* پِلیس‌هولدر سایدبار ادمین */}
      <aside className="w-64 bg-slate-900 text-white p-6 font-sans font-extrabold hidden md:block">
        Admin Sidebar
      </aside>
      
      {/* بخش محتوای متغیر پنل مدیریت */}
      <div className="flex-grow p-8">
        <header className="mb-6 pb-4 border-b border-gray-200 font-sans font-blackfont text-xl">
          Admin Panel Dashboard
        </header>
        
        <Outlet />
      </div>
    </div>
  );
}
