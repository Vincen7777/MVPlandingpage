// app/beranda/page.tsx
import Image from "next/image";
import Link from "next/link";
import AvatarWithFallback from "../components/AvatarWithFallback";

export default function BerandaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/beranda" className="flex items-center gap-2">
            <Image src="/images.png" alt="Logo" width={40} height={10} />
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#fitur"
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              Fitur
            </Link>
            <Link
              href="#harga"
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              Harga
            </Link>
            <Link
              href="#tentang"
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              Tentang
            </Link>
          </nav>

          {/* Avatar */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <AvatarWithFallback
                src="/profil.png"
                alt="Avatar"
                width={36}
                height={36}
                fallbackText="V"
              />
              <span className="text-sm text-gray-700 hidden md:block">
                Vincent
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main className="flex-1">
        {/* ── HERO SECTION ── */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                🚀 Platform Terbaru 2025
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Kelola Bisnis Kamu{" "}
                <span className="text-blue-600">Lebih Mudah</span> dan Efisien
              </h1>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Platform all-in-one untuk membantu kamu mengelola keuangan,
                laporan, dan tim dalam satu dashboard yang simpel dan powerful.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/signup"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md text-sm transition-colors duration-200 text-center"
                >
                  Mulai Gratis 14 Hari
                </Link>
                <Link
                  href="#fitur"
                  className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold px-8 py-3 rounded-md text-sm transition-colors duration-200 text-center"
                >
                  Lihat Fitur
                </Link>
              </div>
              {/* Stats */}
              <div className="flex gap-8 mt-10 justify-center md:justify-start">
                <div>
                  <p className="text-2xl font-bold text-gray-900">10K+</p>
                  <p className="text-sm text-gray-500">Pengguna Aktif</p>
                </div>
                <div className="border-l border-gray-200 pl-8">
                  <p className="text-2xl font-bold text-gray-900">99.9%</p>
                  <p className="text-sm text-gray-500">Uptime</p>
                </div>
                <div className="border-l border-gray-200 pl-8">
                  <p className="text-2xl font-bold text-gray-900">4.9★</p>
                  <p className="text-sm text-gray-500">Rating</p>
                </div>
              </div>
            </div>

            {/* Illustration */}
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-md bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-gray-700">
                    Dashboard Overview
                  </p>
                  <span className="text-xs text-green-500 bg-green-50 px-2 py-0.5 rounded-full">
                    ● Live
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      label: "Total Pendapatan",
                      value: "Rp 48.200.000",
                      color: "bg-blue-500",
                      width: "w-4/5",
                    },
                    {
                      label: "Pengeluaran",
                      value: "Rp 12.500.000",
                      color: "bg-purple-400",
                      width: "w-2/5",
                    },
                    {
                      label: "Keuntungan Bersih",
                      value: "Rp 35.700.000",
                      color: "bg-green-400",
                      width: "w-3/5",
                    },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>{item.label}</span>
                        <span className="font-medium text-gray-700">
                          {item.value}
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className={`${item.color} ${item.width} h-2 rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { label: "Transaksi", value: "1.240" },
                    { label: "Invoice", value: "340" },
                    { label: "Klien", value: "89" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-gray-50 rounded-xl p-3 text-center"
                    >
                      <p className="text-lg font-bold text-gray-800">
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FITUR SECTION ── */}
        <section id="fitur" className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
                Fitur Unggulan
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                Semua yang Kamu Butuhkan
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                Dirancang khusus untuk membantu bisnis kamu berkembang lebih
                cepat dengan tools yang tepat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "📊",
                  title: "Laporan Otomatis",
                  desc: "Generate laporan keuangan secara otomatis setiap bulan. Export ke PDF atau Excel dengan satu klik.",
                  color: "bg-blue-50",
                },
                {
                  icon: "🔒",
                  title: "Keamanan Data",
                  desc: "Data kamu dienkripsi end-to-end dan disimpan di server berstandar internasional ISO 27001.",
                  color: "bg-purple-50",
                },
                {
                  icon: "📱",
                  title: "Akses Kapan Saja",
                  desc: "Tersedia di web, iOS, dan Android. Pantau bisnis kamu dari mana saja dan kapan saja.",
                  color: "bg-green-50",
                },
                {
                  icon: "🤝",
                  title: "Kolaborasi Tim",
                  desc: "Undang anggota tim dan atur hak akses sesuai peran. Bekerja bersama lebih produktif.",
                  color: "bg-yellow-50",
                },
                {
                  icon: "⚡",
                  title: "Integrasi Mudah",
                  desc: "Terhubung dengan 50+ aplikasi populer seperti Tokopedia, Shopee, dan marketplace lainnya.",
                  color: "bg-pink-50",
                },
                {
                  icon: "💬",
                  title: "Dukungan 24/7",
                  desc: "Tim support kami siap membantu kamu kapan saja melalui live chat, email, atau telepon.",
                  color: "bg-blue-50",
                },
              ].map((fitur) => (
                <div
                  key={fitur.title}
                  className="p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all duration-200"
                >
                  <div
                    className={`w-12 h-12 ${fitur.color} rounded-xl flex items-center justify-center text-2xl mb-4`}
                  >
                    {fitur.icon}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {fitur.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {fitur.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-50 border-t border-gray-100 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} MVPlandingpage. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: "FAQ", href: "/faq" },
              { label: "Kontak Kami", href: "/kontak" },
              { label: "Privasi", href: "/privasi" },
              { label: "Syarat & Ketentuan", href: "/syarat" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-gray-400 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
