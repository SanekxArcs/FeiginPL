
import { Button } from "@/components/ui/button";
import { Phone, Mail, ChevronRight, NotebookTabs } from "lucide-react";
import Link from "next/link";
import { TransitionLink } from "../components/utils/TransitionLink";
import HighlightedText from "../components/HighlightedText";

const plLang = {
  title: "Skontaktuj się z nami",
  description:
    "Masz pytania lub jesteś gotowy rozpocząć projekt? Skontaktuj się z nami, a stwórzmy razem coś niesamowitego.",
  buttons: {
    call: {
      label: "Zadzwoń",
      description: "Porozmawiaj bezpośrednio z naszym zespołem",
      href: "tel:+48607111541",
    },
    email: {
      label: "Napisz",
      description: "Jesteśmy tutaj, aby odpowiedzieć na Twoje pytania",
      href: "mailto:kontakt@feiginelectric.com",
    },
  },
  button: "Strona Kontaktów",
};

export default function CallToActionSection() {
  return (
    <section className=" text-fred-950 py-12">
      <div className="container mx-auto px-4 text-center space-y-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold">
          <HighlightedText
            title={plLang.title}
            colorLine="bg-fred-100"
            colorText="text-fred-950"
          />
        </h2>
        <p className="text-lg md:text-xl text-fred-900 max-w-2xl mx-auto select-none text-balance">
          {plLang.description}
        </p>

        {/* Contact Buttons */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ContactButton
              href={plLang.buttons.call.href}
              icon={<Phone />}
              label={plLang.buttons.call.label}
              description={plLang.buttons.call.description}
              className="justify-self-center"
            />
            <ContactButton
              href={plLang.buttons.email.href}
              icon={<Mail />}
              label={plLang.buttons.email.label}
              description={plLang.buttons.email.description}
              className="justify-self-center"
            />
          </div>
        </div>
        <div className="my-5 md:grid md:place-content-center">
          <TransitionLink href="/contact">
            <Button
              className="flex items-center p-6 rounded-lg shadow-lg space-x-4 justify-self-center w-full
      bg-fred-400 py-6 ring-fred-400 px-12 text-fred-50 font-semibold transition-all duration-300 hover:text-fred-50  hover:bg-red-500 ring-1 ring-offset-2 hover:ring-fred-600 hover:ring-2"
            >
              {plLang.button} <ChevronRight />
            </Button>
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}

// Contact Button Component with Framer Motion Animation
interface ContactButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  description: string;
  className?: string;
}

function ContactButton({ href, icon, label, description, className }: ContactButtonProps) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-center p-4 rounded-lg text-left shadow-lg space-x-4 max-w-full w-full md:w-auto bg-fred-400 py-4 ring-fred-400 px-8 text-fred-50 font-semibold transition-all duration-300 hover:text-fred-50 hover:bg-red-500 ring-1 ring-offset-2 hover:ring-fred-600 hover:ring-2 ${className}`}
    >
      <div className="text-4xl">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold">{label}</h3>
        <p className="text-fred-50 text-xs select-none">{description}</p>
      </div>
    </Link>
  );
}
