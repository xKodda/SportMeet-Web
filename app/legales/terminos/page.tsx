"use client";

import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OpenGraphTags, { terminosPageOG } from '@/components/OpenGraphTags';

export default function TerminosPage() {
  return (
    <>
      <NextSeo
        title="Términos y Condiciones - SportMeet"
        description="Términos y condiciones de uso de SportMeet. Conoce las reglas, derechos y obligaciones para el uso de nuestra aplicación deportiva en Chile."
        canonical="https://sportmeet.cl/legales/terminos"
        openGraph={{
          title: "Términos y Condiciones - SportMeet",
          description: "Términos y condiciones de uso de SportMeet. Conoce las reglas, derechos y obligaciones para el uso de nuestra aplicación deportiva en Chile.",
          url: "https://sportmeet.cl/legales/terminos",
          siteName: "SportMeet",
          images: [
            {
              url: "https://sportmeet.cl/images/sportmeetlogooficial1.png",
              width: 1200,
              height: 630,
              alt: "Términos y Condiciones - SportMeet",
            },
          ],
          locale: "es_CL",
          type: "website",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: "términos y condiciones, sportmeet, reglas de uso, política de privacidad, derechos de usuario, Chile, aplicación deportiva",
          },
          {
            name: "robots",
            content: "noindex, nofollow",
          },
        ]}
      />
      
      {/* Open Graph Tags */}
      <OpenGraphTags {...terminosPageOG} />
      
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-white dark:from-black dark:via-gray-900 dark:to-gray-800">
        {/* Header */}
        <Navbar />
        
        {/* Contenido principal */}
        <main className="flex-1 relative z-10 pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-6">
            {/* Título */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Términos y Condiciones
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                SportMeet - Aplicación Chilena
              </p>
            </motion.div>

            {/* Contenido de términos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 md:p-12"
            >
              <div className="prose prose-lg dark:prose-invert max-w-none">
                
                {/* 1. Antecedentes generales */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Antecedentes generales</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    SportMeet es una aplicación chilena que facilita encuentros deportivos entre los usuarios de esta, permitiéndoles encontrar rivales o compañeros para distintos deportes (fútbol, pádel, básquetbol, etc.). Al acceder y utilizar esta aplicación, el usuario acepta los presentes términos y condiciones de uso que rigen la relación entre la plataforma y sus usuarios.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong>Importante:</strong> SportMeet opera de forma independiente bajo una gestión individual, lo que quiere decir que no está constituida como sociedad.
                  </p>
                </section>

                {/* 2. Derechos de autor */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Derechos de autor</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Todo el contenido disponible de SportMeet (textos, logotipos, diseño gráfico, base de datos, código fuente, funcionalidades) está protegido por la normativa vigente sobre propiedad intelectual. Queda prohibido reproducir, distribuir, modificar, copiar o utilizar cualquier parte del contenido sin la autorización expresa del responsable de la plataforma.
                  </p>
                </section>

                {/* 3. Protección de datos personales */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Protección de datos personales</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    SportMeet recolecta los siguientes datos personales: nombre, edad, correo electrónico y sexo. Estos datos son utilizados para ofrecer la funcionalidad dentro de la aplicación.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    El usuario tiene derecho a solicitar la eliminación, modificación o revisión de sus datos conforme la Ley N° 19.628 sobre protección de la vida privada.
                  </p>
                </section>

                {/* 4. Uso del portal */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Uso del portal</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    El uso de SportMeet debe ser responsable y en conformidad con la Ley chilena. El objetivo exclusivo de la plataforma es coordinar encuentros deportivos entre personas.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Está estrictamente prohibido usar SportMeet para actividades ilícitas, violentas, discriminatorias, sexuales, comerciales no autorizadas u otros fines que no guarden relación con el espíritu deportivo y social de la aplicación.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    La aplicación puede ser utilizada para los mayores de 15 años, con datos reales.
                  </p>
                </section>

                {/* 5. Creación de cuenta */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Creación de cuenta</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Para acceder a las funcionalidades de SportMeet el usuario debe crear una cuenta proporcionando información veraz, actualizada y completa. El usuario es responsable de mantener la confidencialidad de sus credenciales y se compromete a no compartirlas con terceros.
                  </p>
                </section>

                {/* 6. Aceptación de los términos */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Aceptación de los términos</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Al registrarse, navegar o utilizar SportMeet, el usuario declara haber leído, comprendido y aceptado íntegramente estos términos y condiciones. El uso continuo del servicio implica su aceptación tácita.
                  </p>
                </section>

                {/* 7. Normas de la comunidad */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Normas de la comunidad</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Los usuarios de SportMeet deben cumplir con los siguientes principios:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                    <li>Respetar a otros usuarios sin discriminación por género, edad, religión, nacionalidad u orientación sexual.</li>
                    <li>Coordinar y asistir a los encuentros deportivos pactados.</li>
                    <li>No acosar, amenazar o dañar a otros usuarios.</li>
                    <li>No usar lenguaje ofensivo o incitar a la violencia.</li>
                    <li>No compartir contenido inapropiado, ofensivo o ilegal.</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    El incumplimiento de estas normas podrá derivar en la suspensión o eliminación de la cuenta sin previo aviso.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong>Importante:</strong> En casos graves se le facilitará información a las autoridades correspondientes en caso de denuncias, etc.
                  </p>
                </section>

                {/* 8. Garantía legal */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Garantía legal</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    SportMeet no garantiza el comportamiento, puntualidad, ni seguridad física de los participantes en los encuentros que ellos gestionan. La responsabilidad recae exclusivamente en los usuarios que aceptan participar.
                  </p>
                </section>

                {/* 9. Reglas generales */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Reglas generales</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Está prohibido:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Crear múltiples cuentas con una misma identidad.</li>
                    <li>Usar la aplicación para realizar actividades comerciales sin autorización.</li>
                    <li>Crear cuentas falsas o con identidades de terceros.</li>
                    <li>Falsear información personal.</li>
                  </ul>
                </section>

                {/* 10. Reglas de seguridad */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Reglas de seguridad</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Se prohíbe a los usuarios:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Acceder sin autorización a datos, cuentas o sistemas internos.</li>
                    <li>Probar vulnerabilidades o romper medidas de seguridad de SportMeet.</li>
                    <li>Interferir con el funcionamiento de la aplicación (por ejemplo, con virus o ataques de denegación de servicio).</li>
                  </ul>
                </section>

                {/* 11. Suspensión o eliminación de cuenta */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Suspensión o eliminación de cuenta</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    SportMeet se reserva el derecho de suspender o eliminar, de manera temporal o permanente, cuentas que incumplan estos términos, afecten a otros usuarios, realicen acciones fraudulentas o generen conflictos dentro de la comunidad. El usuario podrá apelar mediante el sistema habilitado para ello.
                  </p>
                </section>

                {/* 12. Reporte y moderación */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Reporte y moderación</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    SportMeet cuenta con un sistema de reporte de comportamiento inapropiado. Los reportes serán evaluados por el equipo de moderación. La decisión de suspender o eliminar una cuenta podrá ser apelada por el usuario dentro de los 30 días hábiles posteriores.
                  </p>
                </section>

                {/* 13. Disponibilidad del servicio */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">13. Disponibilidad del servicio</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    SportMeet funciona en Chile y puede experimentar interrupciones por mantenimiento o actualizaciones. No se garantiza disponibilidad continua o libre de errores. El equipo se compromete a solucionar cualquier inconveniente en el menor tiempo posible.
                  </p>
                </section>

                {/* 14. Prohibición de uso comercial no autorizado */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">14. Prohibición de uso comercial no autorizado</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    SportMeet no puede ser usada como plataforma de promoción o venta de productos o servicios, ni para reclutar clientes, revender acceso ni realizar encuestas comerciales sin consentimiento explícito. Toda actividad de este tipo será sancionada con la eliminación de la cuenta.
                  </p>
                </section>

                {/* 15. Consultas y reclamos */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">15. Consultas y reclamos</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Para consultas, sugerencias, reportes o reclamos, el usuario puede escribir a: <a href="mailto:soporte@gmail.com" className="text-red-600 dark:text-red-400 hover:underline">soporte@gmail.com</a>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Se responderá dentro de un plazo máximo de 14 días hábiles.
                  </p>
                </section>

                {/* 16. Responsabilidad por estafas o engaños */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">16. Responsabilidad por estafas o engaños</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    SportMeet no se hace responsable por devoluciones de dinero, pérdidas económicas ni indemnizaciones derivadas de estafas, engaños o conflictos entre usuarios. Cada usuario es responsable de verificar la autenticidad de las interacciones.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    En caso de requerimiento legal, SportMeet facilitará los antecedentes disponibles y colaborará con las autoridades competentes.
                  </p>
                </section>

                {/* 17. Actualización de los términos y condiciones */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">17. Actualización de los términos y condiciones</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Estos términos y condiciones podrán ser modificados en cualquier momento y se notificará a los usuarios para su aceptación.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    En caso de no aceptar los cambios no podrá utilizar la aplicación.
                  </p>
                </section>

              </div>
            </motion.div>
          </div>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
} 