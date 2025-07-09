import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ChefitaLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 font-['Poppins',sans-serif] overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-amber-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-rose-200/25 to-pink-200/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-16 lg:py-24 mt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10 relative z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-orange-200/50 shadow-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">✨ AI-Powered Kitchen Assistant</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-orange-600 to-amber-600 leading-tight">
                👩‍🍳 Chefita
              </h1>

              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
                  Asisten Dapur Cerdas untuk Usaha Kuliner Anda
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                  Kirim nota belanja via WhatsApp, dan Chefita bantu hitung harga jual & jaga margin —
                  <span className="font-semibold text-orange-600"> otomatis, tanpa ribet Excel.</span>
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-10 py-6 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 transform hover:scale-105 border-0"
              >
                <span className="relative z-10 flex items-center gap-3">
                  📲 Coba Gratis via WhatsApp
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group relative bg-white/80 backdrop-blur-sm border-2 border-orange-300 text-orange-600 hover:bg-orange-50 px-10 py-6 rounded-2xl text-lg font-bold transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <span className="flex items-center gap-3">
                  🎥 Lihat Demo Chefita
                  <div className="w-0 h-0 border-l-4 border-l-orange-500 border-y-2 border-y-transparent group-hover:animate-pulse"></div>
                </span>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full shadow-lg">
                <span className="text-green-500 text-lg">✅</span>
                <span className="text-sm font-semibold text-gray-700">100% Gratis</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full shadow-lg">
                <span className="text-blue-500 text-lg">🚀</span>
                <span className="text-sm font-semibold text-gray-700">Tanpa Install</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full shadow-lg">
                <span className="text-purple-500 text-lg">⚡</span>
                <span className="text-sm font-semibold text-gray-700">Langsung Pakai</span>
              </div>
            </div>
          </div>

          {/* Right Mockup */}
          <div className="relative lg:pl-8">
            <div className="relative group">
              {/* Main mockup */}
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 transform rotate-2 group-hover:rotate-0 transition-all duration-700 border border-white/50">
                <img
                  src="/placeholder.svg?height=500&width=700&text=Chefita+Dashboard+Preview"
                  alt="Chefita WhatsApp Interface & Dashboard"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />

                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-3xl"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-2xl animate-bounce">
                ✅ Gratis Trial!
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-orange-400 to-amber-500 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-2xl animate-pulse">
                🚀 No Download
              </div>

              {/* Background decoration */}
              <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-orange-200/50 to-amber-200/50 rounded-3xl blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-orange-200/50 shadow-lg mb-8">
              <span className="text-2xl">🤖</span>
              <span className="font-semibold text-gray-700">Powered by AI</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-orange-600 mb-8 leading-tight">
              Chefita = Bot WhatsApp + Dashboard Dapur Cerdas
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Kelola usaha kuliner Anda dengan teknologi AI terdepan yang mudah digunakan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: "📦",
                title: "Kirim nota → update harga bahan otomatis",
                desc: "AI membaca foto nota belanja dan update harga secara real-time",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: "📋",
                title: "Input resep → HPP & margin langsung dihitung",
                desc: "Sistem cerdas menghitung HPP dan margin profit secara otomatis",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: "💰",
                title: "Simulasi harga jual ideal",
                desc: "AI merekomendasikan harga jual optimal untuk maksimalkan profit",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: "🧠",
                title: "Pantau margin dengan indikator warna",
                desc: "Dashboard visual dengan sistem warna untuk monitoring kesehatan bisnis",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: "📈",
                title: "Hitung kapan balik modal & simulasi usaha",
                desc: "Proyeksi ROI dan analisis pertumbuhan bisnis yang akurat",
                color: "from-indigo-500 to-purple-500",
              },
              {
                icon: "📊",
                title: "Dashboard untung-rugi menyala otomatis",
                desc: "Real-time analytics dan reporting untuk decision making",
                color: "from-teal-500 to-cyan-500",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="group relative bg-white/80 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl rounded-3xl overflow-hidden transition-all duration-700 hover:scale-105 hover:-translate-y-2"
              >
                <CardContent className="p-8 relative z-10">
                  <div className="space-y-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-3xl flex items-center justify-center mx-auto text-3xl shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                    >
                      {benefit.icon}
                    </div>
                    <div className="space-y-4 text-center">
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                </CardContent>

                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-200/50 to-amber-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA After Benefits */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/80 via-emerald-50/80 to-teal-100/80"></div>
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23059669' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-green-200/50 shadow-xl mb-8">
                <span className="text-2xl animate-bounce">🔥</span>
                <span className="font-bold text-gray-700">Ready to Transform Your Business?</span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-green-600 leading-tight">
                Gak perlu ribet, langsung coba Chefita sekarang!
              </h2>
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Cukup kirim foto nota belanja via WhatsApp — tanpa install aplikasi, tanpa training.
                <span className="font-bold text-green-600">
                  {" "}
                  Chefita akan bantu hitung otomatis harga bahan & untung Anda.
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-green-500/25 transition-all duration-500 transform hover:scale-110"
              >
                <span className="relative z-10 flex items-center gap-3">
                  📲 Coba Gratis via WhatsApp
                  <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group bg-white/90 backdrop-blur-sm border-2 border-green-300 text-green-600 hover:bg-green-50 px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-500 transform hover:scale-110 shadow-xl"
              >
                🎥 Lihat Demo Chefita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* UI Preview Section */}
      <section id="demo" className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-xl mb-8">
              <span className="text-2xl">✨</span>
              <span className="font-semibold text-gray-700">User Interface</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-slate-600 mb-8 leading-tight">
              Tampilan yang sederhana, tapi powerful
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lihat bagaimana Chefita bekerja untuk usaha kuliner Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              {
                title: "Chat WhatsApp parsing nota",
                desc: "Kirim foto nota, AI langsung baca dan update harga",
                img: "WhatsApp+Chat+Interface",
              },
              {
                title: "Kalkulator resep & margin",
                desc: "Input resep sekali, HPP dan margin langsung terhitung",
                img: "Recipe+Calculator+Dashboard",
              },
              {
                title: "Dashboard margin warna",
                desc: "Hijau = untung, kuning = hati-hati, merah = rugi",
                img: "Colorful+Margin+Dashboard",
              },
            ].map((item, index) => (
              <div key={index} className="group mx-auto">
                <Card className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden w-80 transition-all duration-700 hover:scale-105 hover:-translate-y-4 border-0">
                  <CardContent className="p-0 relative">
                    <div className="relative overflow-hidden">
                      <img
                        src={`/placeholder.svg?height=320&width=320&text=${item.img}`}
                        alt={item.title}
                        className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    <div className="p-8 space-y-4">
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>

                    {/* Glassmorphism overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  </CardContent>

                  {/* Animated glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-200/50 to-amber-200/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 to-amber-50/80"></div>

        <div className="relative container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-orange-200/50 shadow-xl mb-8">
              <span className="text-2xl">💬</span>
              <span className="font-semibold text-gray-700">Customer Stories</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-orange-600 mb-8 leading-tight">
              Apa kata mereka yang sudah pakai Chefita?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                name: "Rika",
                business: "Pemilik Resto Sambal Ijo",
                quote: "Sekarang nggak perlu tebak harga. Chefita bantu untung jalan terus.",
                initial: "R",
                color: "from-pink-500 to-rose-500",
              },
              {
                name: "Budi",
                business: "Owner Warung Nasi Gudeg",
                quote: "Dulu ribet hitung manual, sekarang tinggal foto nota. Margin langsung keliatan!",
                initial: "B",
                color: "from-blue-500 to-indigo-500",
              },
              {
                name: "Sari",
                business: "Katering Rumahan",
                quote: "Bisnis katering jadi lebih teratur. Tau persis mana menu yang paling menguntungkan.",
                initial: "S",
                color: "from-green-500 to-emerald-500",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="group relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border-0 transition-all duration-700 hover:scale-105 hover:-translate-y-2"
              >
                <CardContent className="p-8 space-y-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-xl group-hover:scale-110 transition-transform duration-500`}
                    >
                      {testimonial.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 font-medium">{testimonial.business}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>

                  {/* Star rating */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ⭐
                      </span>
                    ))}
                  </div>
                </CardContent>

                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 to-gray-900">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-xl mb-8">
              <span className="text-2xl">💎</span>
              <span className="font-semibold text-white">Pricing Plans</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Coba Gratis, Bayar Saat Butuh
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Pilih paket yang sesuai dengan skala usaha Anda</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto pt-8">
            {[
              {
                name: "Starter",
                price: "Gratis",
                tokens: "100 Token",
                desc: "Coba & uji coba",
                popular: false,
                color: "from-green-500 to-emerald-500",
              },
              {
                name: "Pro",
                price: "Rp49rb/bln",
                tokens: "1.000 Token",
                desc: "UMKM harian",
                popular: true,
                color: "from-orange-500 to-amber-500",
              },
              {
                name: "Bisnis",
                price: "Rp99rb/bln",
                tokens: "3.000 Token",
                desc: "Resto sibuk",
                popular: false,
                color: "from-purple-500 to-pink-500",
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden transition-all duration-700 hover:scale-105 ${plan.popular ? "transform scale-110 bg-white/15" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <span className="text-white text-xl py-3 font-bold my-1">
                      🔥 Paling Populer
                    </span>
                  </div>
                )}

                <CardContent className="p-8 space-y-8 relative z-10 mt-4">
                  <div className="text-center space-y-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto shadow-2xl`}
                    >
                      <span className="text-2xl font-bold text-white">{plan.name[0]}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <div className="space-y-2">
                      <div
                        className={`text-4xl font-black ${plan.name === "Starter" ? "text-green-400" : "text-orange-400"}`}
                      >
                        {plan.price}
                      </div>
                      <p className="text-gray-300">{plan.tokens}</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-center">
                    <p className="text-white font-semibold">Cocok Untuk:</p>
                    <p className="text-gray-300">{plan.desc}</p>
                  </div>
                </CardContent>

                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 space-y-6">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-10 py-6 rounded-2xl text-lg font-bold transition-all duration-500 transform hover:scale-110"
              >
                📦 Lihat Detail Paket
              </Button>
              <Button
                size="lg"
                className="group bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-10 py-6 rounded-2xl text-lg font-bold shadow-2xl transition-all duration-500 transform hover:scale-110"
              >
                📤 Mulai Kirim Nota Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-xl mb-8">
              <span className="text-2xl">❓</span>
              <span className="font-semibold text-gray-700">FAQ</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-slate-600 mb-8 leading-tight">
              Pertanyaan Umum
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "Apakah perlu install aplikasi?",
                a: "✅ Tidak, cukup WhatsApp. Chefita bekerja langsung melalui chat WhatsApp tanpa perlu install aplikasi apapun.",
              },
              {
                q: "Apakah data aman?",
                a: "✅ Ya, disimpan terenkripsi. Semua data Anda dienkripsi dan disimpan dengan standar keamanan tinggi.",
              },
              {
                q: "Bisa untuk katering & usaha rumahan?",
                a: "✅ Bisa semua skala F&B. Dari warung kecil hingga resto besar, Chefita cocok untuk semua jenis usaha kuliner.",
              },
              {
                q: "Apa bisa dipakai tanpa teknikal skill?",
                a: "✅ Dirancang untuk awam. Interface sederhana, cukup kirim foto nota dan ikuti panduan chat.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="group bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border-0 transition-all duration-500 hover:shadow-2xl"
              >
                <CardContent className="p-8">
                  <details className="group/details">
                    <summary className="flex justify-between items-center cursor-pointer text-xl font-bold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                      {faq.q}
                      <span className="transform group-open/details:rotate-180 transition-transform duration-300 text-2xl">
                        ▼
                      </span>
                    </summary>
                    <div className="mt-6 text-gray-600 text-lg leading-relaxed">{faq.a}</div>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Footer */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-500 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-xl">
                <span className="text-3xl animate-bounce">📈</span>
                <span className="font-bold text-white text-lg">Transform Your Business Today</span>
              </div>

              <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight">
                Mulai gunakan Chefita hari ini
              </h2>
              <p className="text-xl lg:text-2xl text-orange-100 leading-relaxed max-w-4xl mx-auto">
                Catat, hitung, dan jaga untung usaha kuliner Anda —
                <span className="font-bold text-white"> cukup lewat WhatsApp.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="group relative bg-white text-orange-600 hover:bg-gray-100 px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl transition-all duration-500 transform hover:scale-110"
              >
                <span className="relative z-10 flex items-center gap-3">
                  📲 Kirim Nota Pertamamu Sekarang
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-orange-600 px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-500 transform hover:scale-110"
              >
                📘 Panduan Pengguna
              </Button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 pt-8">
              {[
                { icon: "✅", text: "100% Gratis Mulai" },
                { icon: "🚀", text: "Tanpa Install" },
                { icon: "⚡", text: "Langsung Pakai" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full shadow-lg"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-bold text-white">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
