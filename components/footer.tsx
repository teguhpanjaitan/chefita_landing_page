import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">👩‍🍳</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                  Chefita
                </h3>
                <p className="text-sm text-gray-400">AI Kitchen Assistant</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Asisten dapur cerdas yang membantu usaha kuliner mengelola harga bahan, menghitung margin, dan
              mengoptimalkan keuntungan melalui WhatsApp.
            </p>
            <div className="flex gap-4">
              <Button
                size="sm"
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl font-semibold shadow-lg"
              >
                📲 Mulai Chat
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">Produk</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-sm">🤖</span> AI Bot WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-sm">📊</span> Dashboard Analytics
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-sm">💰</span> Kalkulator Margin
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-sm">📈</span> Analisis ROI
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-sm">💎</span> Paket Berlangganan
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">Dukungan</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#faq"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-sm">❓</span> FAQ
                </a>
              </li>
              <li>
                <a
                  href="#demo"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-sm">🎥</span> Tutorial & Demo
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6281234567890"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-sm">💬</span> WhatsApp Support
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@chefita.id"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-sm">📧</span> Email Support
                </a>
              </li>
              <li>
                <a
                  href="/panduan"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-sm">📘</span> Panduan Pengguna
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">Kontak</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">📍</span>
                <div>
                  <p className="text-gray-300 text-sm">Jakarta, Indonesia</p>
                  <p className="text-gray-400 text-xs">Melayani seluruh Indonesia</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400">📱</span>
                <a
                  href="https://wa.me/6281234567890"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm"
                >
                  +62 812-3456-7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400">📧</span>
                <a
                  href="mailto:hello@chefita.id"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm"
                >
                  hello@chefita.id
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <h5 className="text-sm font-semibold text-white">Ikuti Kami</h5>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/chefita.id"
                  className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  📷
                </a>
                <a
                  href="https://tiktok.com/@chefita.id"
                  className="w-10 h-10 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  🎵
                </a>
                <a
                  href="https://youtube.com/@chefita"
                  className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  📺
                </a>
                <a
                  href="https://linkedin.com/company/chefita"
                  className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  💼
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white">📬 Dapatkan Tips Bisnis Kuliner</h3>
              <p className="text-gray-300">
                Berlangganan newsletter kami untuk mendapatkan tips mengelola usaha kuliner, update fitur terbaru, dan
                strategi meningkatkan keuntungan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-xl font-semibold shadow-lg px-8">
                Berlangganan
              </Button>
            </div>

            <p className="text-xs text-gray-400">
              Dengan berlangganan, Anda menyetujui{" "}
              <a href="/privacy" className="text-orange-400 hover:underline">
                Kebijakan Privasi
              </a>{" "}
              kami.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
              <p>&copy; 2024 Chefita. Semua hak dilindungi.</p>
              <div className="flex gap-4">
                <a href="/privacy" className="hover:text-orange-400 transition-colors duration-300">
                  Kebijakan Privasi
                </a>
                <a href="/terms" className="hover:text-orange-400 transition-colors duration-300">
                  Syarat & Ketentuan
                </a>
                <a href="/cookies" className="hover:text-orange-400 transition-colors duration-300">
                  Kebijakan Cookie
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <span className="text-red-400 animate-pulse">❤️</span>
              <span>for Indonesian F&B</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
