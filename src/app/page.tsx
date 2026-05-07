"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Award, CheckCircle, Star, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSmall"
        background="circleGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Start",
          id: "hero",
        },
        {
          name: "Dlaczego my",
          id: "about",
        },
        {
          name: "Usługi",
          id: "services",
        },
        {
          name: "Opinie",
          id: "testimonials",
        },
        {
          name: "Kontakt",
          id: "contact",
        },
      ]}
      brandName="LUK-POL"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "gradient-bars",
      }}
      title="Komfort. Precyzja. Profesjonalizm."
      description="Nowoczesne instalacje klimatyzacji i profesjonalny serwis wykonany z najwyższą starannością — dla domów, mieszkań i firm."
      buttons={[
        {
          text: "Bezpłatna wycena",
          href: "#contact",
        },
        {
          text: "Zadzwoń teraz",
          href: "tel:+48123456789",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cozy-lively-home-interior-design_23-2151119025.jpg",
          imageAlt: "Luxury home air conditioning",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/foreman-using-desktop-pc-writing-notes-while-working-auto-repair-office_637285-9304.jpg",
          imageAlt: "Precision technical installation",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/manufacturing-plant-employee-reviews-data-green-screen-pc_482257-125767.jpg",
          imageAlt: "Professional maintenance service",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/female-working-environment-projects_23-2148829292.jpg",
          imageAlt: "Technical planning consultation",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/small-house-entrance-japan-building_23-2149301082.jpg",
          imageAlt: "Luxury bedroom unit",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-heat-pump-outside-home_23-2149250252.jpg",
          imageAlt: "Multi-room climate solution",
        },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Fachowcy, którym można zaufać"
      description="Zapewniamy profesjonalizm, na którym możesz polegać. Nasze podejście łączy wiedzę techniczną z dbałością o każdy szczegół."
      buttons={[
        {
          text: "Poznaj nasze wartości",
          href: "#services",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-man-working-with-tool_23-2148921405.jpg"
      imageAlt="Luk-Pol team professional service"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      features={[
        {
          title: "Klimatyzacja",
          description: "Montaż nowoczesnych systemów dla domów i firm.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-black-white-background_23-2150498646.jpg",
          imageAlt: "Klimatyzacja montaż",
        },
        {
          title: "Serwis i konserwacja",
          description: "Regularne przeglądy oraz szybkie usuwanie usterek.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-guys-posing-together_23-2149241592.jpg",
          imageAlt: "Serwis klimatyzacji",
        },
        {
          title: "Doradztwo techniczne",
          description: "Pomoc w wyborze optymalnych rozwiązań.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-using-tablet-eco-friendly-wind-power-project-layout_23-2148847803.jpg",
          imageAlt: "Doradztwo techniczne",
        },
      ]}
      title="Kompleksowe usługi instalacyjne i serwisowe"
      description="Od małych mieszkań po duże obiekty komercyjne — oferujemy wsparcie techniczne najwyższej jakości."
    />
  </div>

  <div id="product" data-section="product">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "Luk-Pol",
          name: "Systemy Ścienne Premium",
          price: "od 2900 PLN",
          rating: 5,
          reviewCount: "24",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-breast-feeding-her-child_23-2149402320.jpg",
        },
        {
          id: "p2",
          brand: "Luk-Pol",
          name: "Klimatyzacja Multi-Split",
          price: "od 5500 PLN",
          rating: 5,
          reviewCount: "18",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-heat-pump-outside-home_23-2149250253.jpg",
        },
        {
          id: "p3",
          brand: "Luk-Pol",
          name: "Systemy Kompaktowe",
          price: "od 2100 PLN",
          rating: 4,
          reviewCount: "12",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-spending-time-with-her-pet_23-2149284083.jpg",
        },
        {
          id: "p4",
          brand: "Luk-Pol",
          name: "Jednostki Sufitowe",
          price: "od 6200 PLN",
          rating: 5,
          reviewCount: "30",
          imageSrc: "http://img.b2bpic.net/free-photo/analog-city-landscape-with-buildings-daylight_23-2149661427.jpg",
        },
        {
          id: "p5",
          brand: "Luk-Pol",
          name: "Rozwiązania Biurowe",
          price: "od 4800 PLN",
          rating: 5,
          reviewCount: "41",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-conference-room-within-corporation-designed-productivity_482257-124018.jpg",
        },
        {
          id: "p6",
          brand: "Luk-Pol",
          name: "Serwis i Diagnostyka",
          price: "od 300 PLN",
          rating: 5,
          reviewCount: "89",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-ventilation-system_23-2149388988.jpg",
        },
      ]}
      title="Nasze realizacje"
      description="Przegląd nowoczesnych rozwiązań, które instalujemy."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "100+",
          title: "Realizacje",
          description: "Ukończonych projektów w regionie.",
          icon: Award,
        },
        {
          id: "m2",
          value: "5★",
          title: "Ocena",
          description: "Średnia zadowolenia klientów.",
          icon: Star,
        },
        {
          id: "m3",
          value: "24h",
          title: "Szybkość",
          description: "Czas reakcji na zgłoszenie.",
          icon: Zap,
        },
        {
          id: "m4",
          value: "100%",
          title: "Satysfakcja",
          description: "Zgodność z ustaleniami.",
          icon: CheckCircle,
        },
      ]}
      title="Liczby mówią same za siebie"
      description="Profesjonalizm potwierdzony przez setki udanych realizacji."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Patryk Łosik",
          handle: "@patrykl",
          testimonial: "Pełen profesjonalizm i porządek w trakcie i po realizacji klimatyzacji.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-cute-female-posing-indoor_344912-969.jpg",
        },
        {
          id: "2",
          name: "Łukasz Holka",
          handle: "@lukaszho",
          testimonial: "Na każdym etapie mogłem liczyć na pełne doradztwo.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-albino-woman-holding-smartphone_23-2150171882.jpg",
        },
        {
          id: "3",
          name: "Maciej Rychlik",
          handle: "@maciejry",
          testimonial: "Szybko, starannie i czysto. Polecam każdemu.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/elearning-remote-workplace-concept-young-woman-glasses-student-studying-home-kitchen_1258-202047.jpg",
        },
        {
          id: "4",
          name: "D B",
          handle: "@dbclient",
          testimonial: "Nigdy nie zawodzą w sytuacjach awaryjnych.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-reading-tarot_23-2150273205.jpg",
        },
        {
          id: "5",
          name: "Anna Kowalska",
          handle: "@annakow",
          testimonial: "Najlepsi fachowcy w regionie. Bardzo dziękuję za pomoc.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/children-play-house-homely-atmosphere-siblings-spend-time-together_72229-625.jpg",
        },
      ]}
      showRating={true}
      title="Opinie naszych klientów"
      description="Zaufanie to podstawa naszych relacji z klientami."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Jak szybko mogę liczyć na montaż?",
          content: "Terminy ustalamy indywidualnie, zazwyczaj jest to kwestia kilku dni od finalizacji wyceny.",
        },
        {
          id: "q2",
          title: "Czy oferujecie serwis klimatyzacji?",
          content: "Tak, oferujemy regularne przeglądy, konserwację oraz serwis awaryjny.",
        },
        {
          id: "q3",
          title: "Czy wycena jest darmowa?",
          content: "Tak, oferujemy darmową konsultację i wycenę dostosowaną do Twoich potrzeb.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/interior-design-neoclassical-style-with-furnishings-decor_23-2151199321.jpg"
      mediaAnimation="slide-up"
      title="Często zadawane pytania"
      description="Znajdź odpowiedzi na najważniejsze pytania dotyczące naszych usług."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      tag="Kontakt"
      title="Zadbaj o komfort swojego domu"
      description="Skontaktuj się z nami, aby otrzymać profesjonalne doradztwo oraz indywidualną wycenę."
      buttonText="Umów bezpłatną konsultację"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="LUK-POL"
      columns={[
        {
          title: "Kontakt",
          items: [
            {
              label: "+48 123 456 789",
              href: "tel:+48123456789",
            },
            {
              label: "biuro@luk-pol.pl",
              href: "mailto:biuro@luk-pol.pl",
            },
          ],
        },
        {
          title: "Usługi",
          items: [
            {
              label: "Klimatyzacja",
              href: "#services",
            },
            {
              label: "Serwis",
              href: "#services",
            },
          ],
        },
        {
          title: "O firmie",
          items: [
            {
              label: "Opinie",
              href: "#testimonials",
            },
            {
              label: "Kontakt",
              href: "#contact",
            },
          ],
        },
      ]}
      copyrightText="© 2025 LUK-POL. Wszelkie prawa zastrzeżone."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
