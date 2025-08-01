"use client";

import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OpenGraphTags, { privacidadPageOG } from '@/components/OpenGraphTags';

export default function PrivacidadPage() {
  return (
    <>
      <NextSeo
        title="Política de Privacidad - SportMeet"
        description="Política de privacidad de SportMeet. Conoce cómo protegemos tus datos personales y tus derechos como usuario de nuestra aplicación deportiva en Chile."
        canonical="https://sportmeet.cl/legales/privacidad"
        openGraph={{
          title: "Política de Privacidad - SportMeet",
          description: "Política de privacidad de SportMeet. Conoce cómo protegemos tus datos personales y tus derechos como usuario de nuestra aplicación deportiva en Chile.",
          url: "https://sportmeet.cl/legales/privacidad",
          siteName: "SportMeet",
          images: [
            {
              url: "https://sportmeet.cl/images/sportmeetlogooficial1.png",
              width: 1200,
              height: 630,
              alt: "Política de Privacidad - SportMeet",
            },
          ],
          locale: "es_CL",
          type: "website",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: "política de privacidad, protección de datos, sportmeet, derechos de usuario, datos personales, Chile, aplicación deportiva, Ley 19.628",
          },
          {
            name: "robots",
            content: "noindex, nofollow",
          },
        ]}
      />
      
      {/* Open Graph Tags */}
      <OpenGraphTags {...privacidadPageOG} />
      
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
                Política de Privacidad
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                SportMeet - Protección de Datos Personales
              </p>
            </motion.div>

            {/* Contenido de privacidad */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 md:p-12"
            >
              <div className="prose prose-lg dark:prose-invert max-w-none">
                
                {/* 1. Identificación del prestador del servicio */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Identificación del prestador del servicio</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    SportMeet es una aplicación digital creada para facilitar la conexión entre personas interesadas en practicar deportes, mediante encuentros gestionados por los usuarios a través de la aplicación. Funcionamos de manera independiente, sin una persona jurídica, siendo administrada por sus creadores.
                  </p>
                </section>

                {/* 2. Principios que orientan la política */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Principios que orientan la política</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Las presentes políticas de privacidad se fundamentan en los siguientes principios:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li><strong>Transparencia:</strong> los usuarios conocerán qué datos se recopilan y con qué finalidad.</li>
                    <li><strong>Seguridad:</strong> se protege la información personal mediante medidas técnicas y organizativas.</li>
                    <li><strong>Consentimiento informado:</strong> toda recopilación de datos se basa en el consentimiento del usuario.</li>
                    <li><strong>Acceso y control:</strong> el usuario puede revisar, modificar o eliminar su información en cualquier momento.</li>
                    <li><strong>Proporcionalidad:</strong> solo se solicitará los datos estrictamente necesarios para el funcionamiento de la aplicación.</li>
                  </ul>
                </section>

                {/* 3. Aceptación de los términos */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Aceptación de los términos</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    El registro de uso de SportMeet implica la aceptación total de estas políticas de privacidad. Si el usuario no está de acuerdo, debe abstenerse de utilizar el servicio o eliminar su cuenta.
                  </p>
                </section>

                {/* 4. Requisitos de registro */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Requisitos de registro</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Para crear una cuenta en SportMeet, el usuario debe ser mayor de 14 años y proporcionar información veraz, actualizada y completa. El incumplimiento podrá derivar en la suspensión o eliminación de la cuenta.
                  </p>
                </section>

                {/* 5. Los datos personales que recopilamos */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Los datos personales que recopilamos y políticas de privacidad</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    SportMeet recopila y almacena los siguientes datos personales:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                    <li>Nombre y apellido</li>
                    <li>Dirección de correo electrónico</li>
                    <li>Edad y género</li>
                    <li>Foto de perfil</li>
                    <li>Información deportiva opcional (nivel, intereses)</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Estos datos se utilizan exclusivamente para permitir el funcionamiento de la aplicación y conectar usuarios compatibles para encuentros deportivos.
                  </p>
                </section>

                {/* 6. Comunicación interna y conducta */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Comunicación interna y conducta</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    SportMeet incluye funciones de mensajería privada. Se prohíbe el uso de este canal para acoso, amenazas, lenguaje ofensivo, promociones no autorizadas o actividades ilícitas. La aplicación se reserva el derecho a suspender usuarios que incumplan estas reglas.
                  </p>
                </section>

                {/* 7. Uso de los datos personales */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Uso de los datos personales de los usuarios</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Los datos personales se utilizan para:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                    <li>Crear un perfil de usuario visible para otros</li>
                    <li>Sugerir coincidencias deportivas cercanas</li>
                    <li>Enviar notificaciones o alertas</li>
                    <li>Mejorar la experiencia del usuario</li>
                    <li>Resolver problemas de seguridad o conducta</li>
                    <li>Cumplir con obligaciones legales</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    SportMeet no vende, alquila ni transfiere datos personales a terceros.
                  </p>
                </section>

                {/* 8. Actualización de la información */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Actualización de la información</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    El usuario es responsable de mantener su información actualizada. Puede editar sus datos desde el perfil o solicitar cambios por correo electrónico.
                  </p>
                </section>

                {/* 9. Derechos del usuario */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Derechos del usuario titular de datos</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    El usuario puede ejercer los siguientes derechos:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                    <li><strong>Acceso:</strong> saber qué datos posee la aplicación sobre él.</li>
                    <li><strong>Rectificación:</strong> modificar datos incorrectos o desactualizados.</li>
                    <li><strong>Cancelación:</strong> Eliminar su cuenta y datos personales.</li>
                    <li><strong>Oposición:</strong> rechazar el tratamiento de ciertos datos, cuando proceda.</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Para ejercer estos derechos, debe escribir al correo de SportMeet.
                  </p>
                </section>

                {/* 10. Responsabilidad y exoneración */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Responsabilidad y exoneración</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    SportMeet adopta medidas razonables para proteger los datos personales, pero no garantiza la seguridad absoluta frente a ataques informáticos o accesos ilegales. El usuario acepta que el uso de la aplicación implica cierto nivel de riesgo, exonerando de responsabilidad por incidentes fuera del control del prestador del servicio.
                  </p>
                </section>

                {/* 11. Modificación de políticas */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Modificación de políticas</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    SportMeet se reserva el derecho de modificar estas políticas de privacidad. Los cambios serán notificados por correo electrónico o dentro de la aplicación. El uso continuo después de dichas modificaciones implica aceptación de los nuevos términos.
                  </p>
                </section>

                {/* 12. Cierre de cuenta */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Cierre de cuenta</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    El usuario puede cerrar su cuenta en cualquier momento desde la configuración de la aplicación o solicitándolo por correo electrónico. Al cerrar la cuenta, se eliminarán todos los datos personales asociados en un plazo de hasta 15 días hábiles.
                  </p>
                </section>

                {/* 13. Legislación aplicable */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">13. Legislación aplicable y jurisdicción</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Estas políticas se rigen por las leyes de la República de Chile, en particular por la Ley N° 19.628 sobre la protección de la vida privada. Cualquier controversia será resuelta por los tribunales ordinarios de justicia con competencia en la ciudad de Santiago.
                  </p>
                </section>

                {/* 14. Contacto */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">14. Contacto</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Para consultas relacionadas con privacidad, derechos de usuario o denuncias, escribir a: <a href="mailto:contacto@sportmeet.cl" className="text-red-600 dark:text-red-400 hover:underline">contacto@sportmeet.cl</a>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Tiempo de respuesta: dentro de 15 días hábiles.
                  </p>
                </section>

                {/* 15. Reglas de seguridad */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">15. Reglas de seguridad</h2>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>No compartas tu contraseña.</li>
                    <li>Usa un correo electrónico seguro.</li>
                    <li>Reporta cualquier actividad sospechosa.</li>
                    <li>No proporciones datos sensibles dentro del chat.</li>
                  </ul>
                </section>

                {/* 16. Información sobre cookies */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">16. Información sobre cookies</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    SportMeet no utiliza cookies en su versión móvil actual. En caso de implementar, se notificará el uso de cookies para mejorar la experiencia del usuario.
                  </p>
                </section>

                {/* 17. Advertencia sobre menores */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">17. Advertencia sobre el uso de esta aplicación por parte de menores de 15 años</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    El uso de SportMeet está prohibido a menores de 15 años. Al registrarse, el usuario declara tener al menos dicha edad. Si se detecta una cuenta con datos falsos, será eliminada inmediatamente.
                  </p>
                </section>

                {/* 18. Mensajería interna */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">18. Mensajería interna</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    La aplicación cuenta con un sistema de chat interno. Aunque no monitoreamos las conversaciones de forma activa, podemos revisarlas en caso de denuncia o reportes, únicamente con fines de moderación.
                  </p>
                </section>

                {/* 19. Reglas de seguridad */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">19. Reglas de seguridad</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Los usuarios de SportMeet se obligan a utilizar la plataforma en estricto respeto de las normas legales vigentes en Chile y las condiciones establecidas en el presente instrumento. Queda expresamente prohibido cualquier uso que comprometa la seguridad, integridad o buen funcionamiento de la aplicación.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    <strong>Conductas prohibidas:</strong> Ningún usuario podrá:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Acceder, intentar acceder o interferir en cuentas, perfiles, sistemas, bases de datos o servidores a los que no esté autorizado.</li>
                    <li>Probar vulnerabilidades de la aplicación, sistemas informáticos o redes de SportMeet sin autorización expresa, ni vulnerar medidas de seguridad o autenticación.</li>
                    <li>Interferir, interrumpir o intentar afectar la disponibilidad del servicio mediante virus, ataques de denegación de servicio (DoS), sobrecarga de tráfico o software malicioso.</li>
                    <li>Enviar comunicaciones no solicitadas (spam), incluyendo contenido promocional, publicidad u ofertas de bienes o servicios no autorizadas.</li>
                    <li>Suplantar la identidad de otra persona o usuario, ya sea natural o jurídica.</li>
                    <li>Entregar datos falsos, incompletos, inexactos o engañosos durante el registro o uso de la aplicación.</li>
                    <li>Crear cuentas múltiples con fines fraudulentos o realizar solicitudes o reservas falsas dentro de la plataforma.</li>
                  </ul>
                </section>

                {/* 20. Consecuencias legales */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">20. Consecuencias legales</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Toda conducta que vulnere lo aquí establecido podrá ser denunciada y sancionada conforme a las leyes chilenas, incluidas las leyes sobre delitos informáticos, protección de datos personales y fraudes electrónicos. SportMeet se reserva el derecho de suspender o eliminar cuentas sin previo aviso, cuando se verifique o sospeche razonablemente de una infracción a estas normas. Asimismo, se podrá colaborar con las autoridades competentes para el esclarecimiento de hechos delictuales o la protección de los derechos de otros usuarios.
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