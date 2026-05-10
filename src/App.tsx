export default function App() {
  const products = [
    { name: "WilmaxPOS", url: "https://systemapro.com", icon: "🏪", desc: "Sistema punto de venta multi-tienda con control de inventario, empleados, comprobantes NCF y reportes." },
    { name: "TaxiPropos", url: "https://taxipropos.com", icon: "🚕", desc: "Gestión de flota de taxis: conductores, viajes, ingresos, gastos y reportes en tiempo real." },
    { name: "ElevenPropos", url: "https://elevenpropos.com", icon: "🍺", desc: "Sistema para licorerías y colmados: inventario, ventas, cuentas por cobrar y más." },
    { name: "TaxesPropos", url: "https://taxespropos.com", icon: "📋", desc: "Gestión contable y fiscal: ITBiS, declaraciones, facturas y comprobantes NCF." },
    { name: "TallerPropos", url: "https://tallerpropos.com", icon: "🔧", desc: "Control de talleres mecánicos: órdenes de trabajo, repuestos, clientes y pagos." },
    { name: "VentaPropos", url: "https://ventapropos.com", icon: "💼", desc: "Plataforma de ventas y CRM: clientes, cotizaciones, facturas y seguimiento." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white">

      {/* NAV */}
      <nav className="border-b border-white/10 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-sm">SP</div>
          <span className="font-bold text-lg tracking-tight">SystemasPro</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm text-gray-400">
          <a href="#productos" className="hover:text-white transition">Productos</a>
          <a href="#contacto" className="hover:text-white transition">Contacto</a>
        </div>
        <a href="mailto:info@systemaspro.com" className="text-sm bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition font-medium">
          Contáctanos
        </a>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-sm text-blue-400 mb-6">
          🚀 Soluciones de gestión para negocios en RD
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-300 bg-clip-text text-transparent leading-tight">
          Sistemas Pro<br className="hidden md:block" /> para cada negocio
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Una familia de aplicaciones especializadas para gestionar tu negocio de forma inteligente, rápida y segura.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#productos" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-semibold text-lg transition shadow-lg shadow-blue-900/40">
            Ver Productos
          </a>
          <a href="mailto:info@systemaspro.com" className="border border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-xl font-semibold text-lg transition">
            Solicitar Demo
          </a>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 text-center px-6">
          {[["6+", "Sistemas especializados"], ["500+", "Negocios activos"], ["99.9%", "Uptime garantizado"]].map(([n, l]) => (
            <div key={n}>
              <div className="text-4xl font-bold text-blue-400">{n}</div>
              <div className="text-gray-400 text-sm mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="productos" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nuestros Productos</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">Cada solución está diseñada específicamente para su industria, con funcionalidades que realmente necesitas.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
              className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/40 transition-all duration-300">
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="font-bold text-xl mb-2 group-hover:text-blue-400 transition">{p.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              <div className="mt-4 text-blue-500 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                Abrir sistema <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white/5 border-y border-white/10 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              ["☁️", "100% en la nube", "Accede desde cualquier dispositivo, en cualquier lugar, sin instalaciones."],
              ["🔒", "Datos seguros", "Tus datos están protegidos con cifrado y backups automáticos en Supabase."],
              ["📊", "Reportes en tiempo real", "Visualiza el desempeño de tu negocio con dashboards actualizados al instante."],
              ["🇩🇴", "Hecho para RD", "Comprobantes NCF, ITBIS, y cumplimiento fiscal de la República Dominicana."],
              ["📱", "Responsive", "Funciona perfecto en computadora, tablet y celular."],
              ["🎯", "Soporte local", "Equipo de soporte en español, listo para ayudarte."],
            ].map(([ic, t, d]) => (
              <div key={t} className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="text-3xl mb-3">{ic}</div>
                <h3 className="font-semibold mb-2">{t}</h3>
                <p className="text-gray-400 text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="max-w-3xl mx-auto text-center py-24 px-6">
        <h2 className="text-4xl font-bold mb-4">¿Listo para empezar?</h2>
        <p className="text-gray-400 text-lg mb-8">Contáctanos hoy y te ayudamos a elegir el sistema ideal para tu negocio.</p>
        <a href="mailto:info@systemaspro.com"
          className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-900/40 transition">
          📧 info@systemaspro.com
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} SystemasPro — Todos los derechos reservados</p>
        <p className="mt-1">República Dominicana</p>
      </footer>
    </div>
  );
}
