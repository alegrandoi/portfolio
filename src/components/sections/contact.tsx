
import SectionWrapper from '@/components/section-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import ContactForm from '@/components/contact-form';

export default function Contact() {
  return (
    <SectionWrapper id="contact" title="Contacto" className="bg-muted/50">
      <div className="flex flex-col items-center gap-8">
        <p className="max-w-2xl text-center text-lg text-muted-foreground">
          ¿Interesado en colaborar o tienes alguna pregunta? No dudes en
          contactarme. Estoy abierto a nuevas oportunidades y siempre dispuesto a
          conectar con otros profesionales.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild variant="outline" size="icon" className="h-12 w-12">
            <a href="mailto:zzalejandro3@gmail.com" aria-label="Email">
              <Mail />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon" className="h-12 w-12">
            <a
              href="https://github.com/alegrandoi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon" className="h-12 w-12">
            <a
              href="https://www.linkedin.com/in/alejandro-rodríguez-gómez-b5401029b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
          </Button>
        </div>
        <Card className="w-full max-w-2xl">
          <CardContent className="p-6">
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
