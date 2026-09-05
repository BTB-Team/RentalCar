
// import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// وارد کردن لایوت‌ها
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

// وارد کردن صفحات عمومی
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Cars } from './pages/cars/Cars';
import { CarsDetails } from './pages/cars/CarsDetails';
import { Contact } from './pages/contact/Contact';
import { Services } from './pages/services/Services';
// وارد کردن صفحات ادمین
// import AdminDashboard from './pages/Admin/AdminDashboard';


export default function App() {
  return (
    <Routes>

      {/* ۱. لایوت عمومی سایت (دارای هدر و فوتر) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cars" element={<Cars />} />
        <Route path="cars/:id" element={<CarsDetails />} />
        {/* <Route path="services" element={<Services />} /> */}
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* ۲. لایوت پرایوت ادمین (مستقل و بدون هدر/فوتر عمومی) */}
      <Route path="/admin" element={<AdminLayout />}>
        {/* <Route index element={<AdminDashboard />} /> */}
        {/* بعداً روت‌های دیگر ادمین مثل مدیریت موترها یا نظرات زیرمجموعه این بخش قرار می‌گیرند */}
      </Route>

      {/* ۳. مدیریت روت‌های اشتباه (۴۰۴) و ریدایرکت به صفحه اصلی */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}
