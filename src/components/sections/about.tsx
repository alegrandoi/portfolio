import SectionWrapper from '@/components/section-wrapper';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <SectionWrapper id="about" title="Sobre Mí">
      <div className="mx-auto max-w-3xl text-center md:text-left">
        <Card>
          <CardContent className="p-8 text-lg leading-relaxed text-foreground/80">
            <p className="mb-4">
              Soy un desarrollador de software y estudiante de último año de
              Ingeniería Informática en la Universidad de Sevilla. Mi pasión por
              la tecnología me impulsa a estar en un proceso de aprendizaje
              continuo, siempre buscando nuevos retos que me permitan crecer
              profesionalmente. Actualmente, como desarrollador Java en Tier 1
              Technology, me especializo en el desarrollo de aplicaciones
              backend utilizando tecnologías como Spring Boot para crear APIs
              REST eficientes y robustas.
            </p>
            <p>
              Poseo una sólida experiencia con bases de datos SQL y herramientas
              de control de versiones como Git, y me desenvuelvo con comodidad
              en entornos que aplican metodologías ágiles. Mi objetivo es no
              solo consolidar mi perfil como ingeniero informático backend, sino
              también explorar y dominar nuevas áreas como el cloud computing,
              la inteligencia artificial y la arquitectura de software. Valoro
              enormemente el trabajo en equipo y la comunicación efectiva como
              pilares para el éxito de cualquier proyecto.
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
