import {
  IconBuildingHospital,
  IconChartBar,
  IconCheck,
  IconChevronDown,
  IconClipboardCheck,
  IconClock,
  IconLock,
  IconMapPin,
  IconMenu2,
  IconPill,
  IconRefresh,
  IconRoute,
  IconShieldCheck,
  IconTemperature,
  IconTestPipe,
  IconTruckDelivery,
  IconUrgent
} from "@tabler/icons-react";

const stats = [
  { value: "99.6%", label: "On-time rate" },
  { value: "32 min", label: "Avg delivery time" },
  { value: "4.2 min", label: "Avg response time" },
  { value: "4.9/5", label: "Client satisfaction" }
];

const trustPills = [
  "HIPAA Compliant",
  "Florida DOH Registered",
  "Licensed & Insured",
  "Digital Chain of Custody"
];

const pillars = [
  {
    icon: IconMapPin,
    title: "Live Fleet Visibility",
    body: "Every driver. Every vehicle. Every pickup — tracked in real time with live ETAs visible to your team 24/7."
  },
  {
    icon: IconRefresh,
    title: "Intelligent Dispatch",
    body: "Delays are detected early, routes are recalculated, and pickups are reassigned before disruption reaches your team."
  },
  {
    icon: IconChartBar,
    title: "Monthly Intelligence Reports",
    body: "On-time rates, delivery times, fuel savings, and forward-looking recommendations arrive every month."
  }
];

const reportRows = [
  ["Total deliveries", "2,485"],
  ["On-time rate", "99.6%"],
  ["Average delivery time", "32 min"],
  ["Emergency deliveries", "41"],
  ["Miles optimized", "2,120"],
  ["Estimated fuel saved", "$730"],
  ["CO2 reduction", "640 lbs"]
];

const services = [
  { icon: IconTestPipe, label: "Specimen Transport" },
  { icon: IconPill, label: "Pharmacy Delivery" },
  { icon: IconUrgent, label: "STAT & Emergency Courier" },
  { icon: IconTruckDelivery, label: "Medical Supply Chain" },
  { icon: IconBuildingHospital, label: "Lab-to-Lab Transfer" },
  { icon: IconTemperature, label: "Temperature-Controlled Transport" },
  { icon: IconLock, label: "HIPAA-Compliant Documentation" },
  { icon: IconClipboardCheck, label: "Compliance Reporting" }
];

const serviceAreas = ["Orange", "Seminole", "Osceola", "Lake", "Volusia"];

const faqs = [
  {
    question: "What areas does OP Genesis serve?",
    answer:
      "OP Genesis provides medical courier services throughout the Orlando metropolitan area and central Florida, including Orange, Seminole, Osceola, Lake, and Volusia counties. Service area expansions are available for healthcare networks with multi-location needs across the state."
  },
  {
    question: "Is OP Genesis HIPAA compliant?",
    answer:
      "Yes. OP Genesis maintains full HIPAA compliance on all deliveries, including digital chain of custody documentation, secure handling protocols, and trained staff requirements. Compliance documentation is available upon request."
  },
  {
    question: "What types of medical items does OP Genesis transport?",
    answer:
      "OP Genesis transports laboratory specimens, STAT and emergency deliveries, pharmaceutical medications, medical supplies, temperature-controlled items, and lab-to-lab transfers for hospital networks, clinical laboratories, and pharmacies across Florida."
  },
  {
    question: "How does OP Genesis handle delivery delays?",
    answer:
      "Our dispatch system monitors every driver's position in real time against live traffic data. When a delay is detected, the pickup is automatically reassigned to a nearby driver and your designated contact receives an immediate text and email update — before the delay affects your operation. No phone calls required."
  },
  {
    question: "Does OP Genesis provide proof of delivery?",
    answer:
      "Yes. Every delivery includes digital chain of custody documentation with timestamped pickup and delivery confirmation, driver identification, and recipient sign-off. Records are available through your client portal."
  },
  {
    question: "How do I start service with OP Genesis?",
    answer:
      "Request a 20-minute demo call through our website. We'll review your pickup locations, delivery volume, and service requirements, then provide a tailored proposal within one business day."
  }
];

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className={`logo-wrap ${inverse ? "logo-wrap-dark" : ""}`}>
      <img
        src="./images/op-genesis-wordmark.png"
        alt="OP Genesis"
        width={1402}
        height={224}
        className="logo-wordmark"
      />
    </div>
  );
}

function Emblem({ className = "" }: { className?: string }) {
  return (
    <img
      src="./images/op-genesis-emblem.png"
      alt=""
      width={904}
      height={661}
      className={`select-none ${className}`}
      aria-hidden="true"
    />
  );
}

function Navigation() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-[var(--op-gray-border)] bg-white/95 px-6 backdrop-blur">
      <nav className="mx-auto flex h-full max-w-[1100px] items-center justify-between">
        <a href="#top" aria-label="OP Genesis home">
          <Logo />
        </a>
        <div className="hidden items-center gap-6 md:flex">
          <a className="nav-link" href="#solutions">
            Solutions
          </a>
          <a className="nav-link" href="#about">
            About
          </a>
          <a className="nav-link" href="#contact">
            Contact
          </a>
          <a className="btn-primary px-[18px] py-2 text-[13px]" href="#contact">
            Request a Demo
          </a>
        </div>
        <details className="group relative md:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-[var(--op-gray-border)] text-[var(--op-navy)] [&::-webkit-details-marker]:hidden">
            <IconMenu2 size={20} />
          </summary>
          <div className="absolute right-0 top-12 w-56 rounded-lg border border-[var(--op-gray-border)] bg-white p-3 shadow-lg">
            {["Solutions", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Solutions" ? "#solutions" : item === "About" ? "#about" : "#contact"}
                className="block rounded-md px-3 py-2 text-[13px] text-[var(--op-gray-text)] hover:bg-[var(--op-navy-light)] hover:text-[var(--op-navy)]"
              >
                {item}
              </a>
            ))}
            <a className="btn-primary mt-2 w-full px-4 py-2 text-[13px]" href="#contact">
              Request a Demo
            </a>
          </div>
        </details>
      </nav>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual hero-photo-card">
      <img
        src="./images/hero-image.png"
        alt="Medical courier collecting a secure specimen package outside a healthcare facility"
        width={1680}
        height={900}
        className="section-photo"
      />
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-section bg-white px-6 py-20 max-md:py-16">
      <div className="hero-shell mx-auto grid max-w-[1100px] grid-cols-[minmax(0,1fr)_420px] items-center gap-16 max-lg:grid-cols-1">
        <div className="hero-copy">
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.1em] text-[var(--op-teal)]">
            Medical Courier Services — Orlando, FL
          </p>
          <h1 className="mb-2 max-w-[580px] text-[34px] font-medium leading-tight text-[var(--op-navy)] max-md:text-[27px]">
            Zero disruptions. Zero phone calls. Zero surprises.
          </h1>
          <h2 className="mb-5 text-xl font-medium text-[var(--op-navy)] opacity-75">
            Orlando&apos;s most reliable medical courier service.
          </h2>
          <p className="mb-7 max-w-[560px] text-base leading-[1.7] text-[var(--op-gray-text)]">
            OP Genesis provides GPS-tracked, HIPAA-compliant medical courier services to hospital networks, clinical
            labs, and pharmacies across Orlando and central Florida — with monthly operational analytics that prove
            every delivery.
          </p>
          <div className="hero-actions mb-8 flex flex-wrap gap-3">
            <a className="btn-primary px-6 py-3 text-[15px]" href="#contact">
              Request a Demo
            </a>
            <a className="btn-secondary px-6 py-3 text-[15px]" href="#how-it-works">
              See How It Works
            </a>
          </div>
          <div className="trust-list flex flex-wrap gap-[10px] border-t border-[var(--op-gray-border)] pt-8">
            {trustPills.map((pill) => (
              <span key={pill} className="trust-pill">
                <span className="trust-check">
                  <IconCheck size={11} />
                </span>
                {pill}
              </span>
            ))}
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section className="border-y border-[var(--op-gray-border)] bg-white">
      <div className="mx-auto grid max-w-[1100px] grid-cols-4 max-md:grid-cols-2">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`px-6 py-7 text-center ${
              index !== stats.length - 1 ? "border-r border-[var(--op-gray-border)]" : ""
            } ${index === 1 ? "max-md:border-r-0" : ""} ${
              index < 2 ? "max-md:border-b max-md:border-[var(--op-gray-border)]" : ""
            }`}
          >
            <p className="mb-1 text-[26px] font-medium leading-tight text-[var(--op-navy)]">{stat.value}</p>
            <p className="m-0 text-xs text-[var(--op-gray-text)]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ChainOfCustodyCard() {
  const steps = ["Pickup scanned", "Driver verified", "Recipient sign-off"];

  return (
    <div className="visual-card">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="micro-label">Chain of custody</p>
          <p className="mt-1 text-[15px] font-medium text-[var(--op-navy)]">Specimen #A1742</p>
        </div>
        <IconShieldCheck size={22} className="text-[var(--op-green-text)]" />
      </div>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step} className="timeline-row">
            <span className="timeline-dot">
              <IconCheck size={12} />
            </span>
            <div>
              <p className="m-0 text-[13px] font-medium text-[var(--op-navy)]">{step}</p>
              <p className="m-0 text-xs text-[var(--op-gray-text)]">
                {index === 0 ? "1:42 PM" : index === 1 ? "1:46 PM" : "2:16 PM"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Problem() {
  return (
    <section className="section-shell bg-[var(--op-gray-bg)]">
      <div className="content-shell grid grid-cols-[minmax(0,0.95fr)_360px] items-center gap-14 max-lg:grid-cols-1">
        <div>
          <p className="section-label">How traditional medical couriers fail</p>
          <h2 className="section-title max-w-[620px]">Your specimen is somewhere on I-4. Nobody knows exactly where.</h2>
          <div className="body-copy mt-6 max-w-[680px] space-y-4">
            <p>
              Traditional medical courier services in Florida run on radio calls and gut instinct. When a driver hits
              traffic, a lab tech calls dispatch, dispatch calls the driver, and everyone waits.
            </p>
            <p>
              For time-sensitive specimens, STAT medications, and critical medical supplies — that&apos;s not a logistics
              problem. That&apos;s a patient care problem.
            </p>
            <p>There&apos;s a better way to run healthcare logistics in Orlando.</p>
          </div>
        </div>
        <ChainOfCustodyCard />
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section id="how-it-works" className="section-shell bg-white">
      <div className="content-shell grid grid-cols-2 items-start gap-12 max-md:flex max-md:flex-col-reverse">
        <div>
          <p className="section-label">The OP Genesis way</p>
          <h2 className="section-title">The problem is resolved before your team knows it happened.</h2>
          <div className="body-copy mt-6 max-w-[560px] space-y-4">
            <p>
              Our dispatch system monitors every driver&apos;s position against live traffic data in real time. When a
              delay is detected anywhere across our Orlando-area fleet, the pickup is reassigned automatically and your
              designated contact receives an instant update.
            </p>
            <p>No phone trees. No manual dispatch. No specimens left waiting.</p>
          </div>
        </div>
        <div>
          <div className="solution-photo-card">
            <img
              src="./images/section2-the-solution.png"
              alt="Courier using route tracking inside a delivery vehicle"
              width={1480}
              height={1100}
              className="section-photo"
            />
          </div>
          <div className="visual-card solution-overlay-card">
            <div className="mb-3.5 flex items-center justify-between gap-4">
              <p className="m-0 text-[13px] font-medium text-[var(--op-navy)]">OP Genesis Logistics</p>
              <span className="status-pill">Resolved automatically</span>
            </div>
            <p className="mb-2.5 text-[13px] leading-[1.6] text-[var(--op-gray-text)]">
              Your specimen pickup from Orlando Health Clinic #7 has been reassigned due to traffic on I-4. Driver #7 is
              en route.
            </p>
            <p className="mb-3.5 text-sm font-medium text-[var(--op-navy)]">New ETA: 2:16 PM</p>
            <div className="flex items-center gap-1.5 border-t border-[var(--op-gray-border)] pt-3 text-xs text-[var(--op-gray-text)]">
              <IconClock size={13} />
              No action required.
            </div>
          </div>
          <p className="mt-3 text-[13px] italic text-[var(--op-gray-text)]">
            Nobody called. Nobody panicked. Resolved before anyone noticed.
          </p>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section id="solutions" className="section-shell bg-[var(--op-gray-bg)]">
      <div className="content-shell">
        <div className="section-heading-row">
          <div>
            <p className="section-label">What sets us apart</p>
            <h2 className="section-title">Built differently from the ground up.</h2>
          </div>
          <p className="heading-sidecopy">
            A logistics partner built around visibility, automatic recovery, and monthly operational accountability.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-4 max-md:grid-cols-1">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="feature-card">
                {pillar.title === "Intelligent Dispatch" ? (
                  <img
                    src="./images/pillarcard2-intelligent-dispatch.png"
                    alt="Dispatcher monitoring live fleet routing screens"
                    width={1536}
                    height={1024}
                    className="pillar-photo"
                  />
                ) : null}
                <Icon className="mb-3.5 text-[var(--op-navy)]" size={20} />
                <h3 className="mb-2 text-[15px] font-medium leading-snug text-[var(--op-navy)]">{pillar.title}</h3>
                <p className="m-0 text-[13px] leading-[1.6] text-[var(--op-gray-text)]">{pillar.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MonthlyReport() {
  return (
    <section className="section-shell bg-white">
      <div className="content-shell grid grid-cols-2 items-start gap-12 max-md:grid-cols-1">
        <div>
          <p className="section-label">Operational analytics</p>
          <h2 className="section-title">We don&apos;t send invoices. We send intelligence.</h2>
          <div className="body-copy mt-6 max-w-[560px] space-y-4">
            <p>Every month, OP Genesis clients receive a complete operational report — not just a bill.</p>
            <p>
              Delivery volumes, route efficiency, fuel savings, emissions reduction, and data-driven recommendations for
              the quarter ahead.
            </p>
            <p>
              We don&apos;t just move your specimens. We help you understand and improve your entire medical supply
              chain.
            </p>
            <p>Most couriers tell you what they did. We tell you what to do next.</p>
          </div>
          <p className="mt-5 max-w-[560px] border-t border-[var(--op-gray-border)] pt-5 text-sm leading-[1.7] text-[var(--op-gray-text)]">
            OP Genesis maintains a 99.6% on-time delivery rate across all active client accounts, with an average
            delivery time of 32 minutes and an average dispatch response time of 4.2 minutes across our central Florida
            service area. Client satisfaction is rated 4.9 out of 5.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl border border-[var(--op-gray-border)] bg-white shadow-[0_18px_50px_rgba(10,42,110,0.07)]">
          <div className="bg-[var(--op-navy)] px-5 py-3.5">
            <p className="mb-[3px] text-[11px] uppercase tracking-[0.06em] text-white/50">Monthly Report · May 2026</p>
            <p className="m-0 text-sm font-medium text-white">Orlando Health Network</p>
          </div>
          <div>
            {reportRows.map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between gap-4 border-b border-[rgba(0,0,0,0.06)] px-5 py-2.5 last:border-b-0"
              >
                <span className="text-[13px] text-[var(--op-gray-text)]">{label}</span>
                <span
                  className={`text-[13px] font-medium ${
                    label === "On-time rate" ? "text-[var(--op-green-text)]" : "text-[var(--op-navy)]"
                  }`}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
          <div className="bg-[var(--op-navy-light)] px-5 py-3.5">
            <p className="mb-1.5 text-[11px] font-medium uppercase tracking-[0.06em] text-[var(--op-navy)]">
              Recommendation
            </p>
            <p className="m-0 text-[13px] leading-[1.6] text-[#185fa5]">
              Move Tuesday afternoon pickup windows 30 minutes earlier — projected 8% improvement in on-time
              performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section-shell bg-[var(--op-gray-bg)]">
      <div className="content-shell">
        <div className="section-heading-row">
          <div>
            <p className="section-label">What we deliver</p>
            <h2 className="section-title max-w-[620px]">
              Specialized medical courier services across Orlando and central Florida.
            </h2>
          </div>
          <div className="service-area-card">
            <p className="micro-label">Service area</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span key={area} className="area-chip">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="services-photo-card">
          <img
            src="./images/services-section.png"
            alt="Clinical laboratory with temperature-controlled medical storage"
            width={1680}
            height={900}
            className="section-photo"
          />
        </div>
        <p className="mt-5 max-w-[720px] text-sm leading-[1.7] text-[var(--op-gray-text)]">
          OP Genesis serves healthcare organizations throughout Orange, Seminole, Osceola, Lake, and Volusia counties.
          Same-day and scheduled courier routes are available for hospital systems, independent clinics, reference
          laboratories, and pharmacy networks.
        </p>
        <div className="mt-10 grid grid-cols-4 gap-3 max-md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.label} className="service-tile">
                <Icon className="mx-auto mb-2.5 text-[var(--op-navy)]" size={22} />
                <h3 className="m-0 text-[13px] font-medium leading-[1.4] text-[var(--op-navy)]">{service.label}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="section-shell bg-white">
      <div className="content-shell grid grid-cols-[minmax(0,0.95fr)_360px] items-center gap-14 max-lg:grid-cols-1">
        <div>
          <p className="section-label">Why OP Genesis</p>
          <h2 className="section-title">We don&apos;t compete on price. We compete on reliability.</h2>
          <div className="body-copy mt-6 max-w-[650px] space-y-5">
            <p>Any courier can pick up a package.</p>
            <p>
              OP Genesis provides a complete medical logistics infrastructure — GPS tracking on every vehicle, digital
              chain of custody on every delivery, automatic rerouting on every disruption, and operational analytics
              delivered to every client every month.
            </p>
            <p>
              We move medical supplies. We also help you predict when you&apos;ll need more of them, where your
              bottlenecks are forming, and how to run your supply chain more efficiently.
            </p>
            <p className="text-[17px] font-medium leading-[1.4] text-[var(--op-navy)]">
              That&apos;s not a courier service.
              <br />
              That&apos;s a logistics partner.
            </p>
          </div>
        </div>
        <div className="visual-card overflow-hidden">
          <p className="micro-label">Network health</p>
          <div className="mt-4 space-y-3">
            {[
              ["Digital chain of custody", "100% documented"],
              ["Automatic rerouting", "Live"],
              ["Monthly reporting", "Included"]
            ].map(([label, value]) => (
              <div key={label} className="score-row">
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <div className="image-slot mt-5">
            <Emblem className="h-24 w-auto opacity-90" />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-[var(--op-gray-bg)] px-6 py-12">
      <div className="mx-auto max-w-[760px] rounded-2xl border border-[var(--op-gray-border)] bg-white px-8 py-7 text-center shadow-[0_14px_40px_rgba(10,42,110,0.04)] max-md:px-5">
        <p className="m-0 text-sm leading-[1.8] text-[var(--op-gray-text)]">
          OP Genesis is a HIPAA-compliant healthcare logistics company based in Orlando, Florida. Founded to serve the
          operational needs of hospital networks, clinical laboratories, and pharmacies across central Florida, OP
          Genesis provides GPS-tracked specimen transport, STAT courier services, pharmaceutical delivery, and monthly
          operational analytics to healthcare organizations that require reliability at scale. OP Genesis is licensed,
          insured, and registered with the Florida Department of Health.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section-shell bg-white">
      <div className="content-shell max-w-[760px]">
        <div className="faq-heading">
          <p className="section-label">Common questions</p>
          <h2 className="section-title">Everything you need to know before you call.</h2>
          <p>
            Quick answers for healthcare teams evaluating OP Genesis for courier coverage, compliance, and delivery
            documentation.
          </p>
        </div>
        <div className="mt-10 rounded-2xl border border-[var(--op-gray-border)] bg-white">
          {faqs.map((faq, index) => (
            <details key={faq.question} className={`faq-item ${index !== faqs.length - 1 ? "border-b border-[var(--op-gray-border)]" : ""}`}>
              <summary>
                <span>{faq.question}</span>
                <span className="faq-icon">
                  <IconChevronDown size={18} />
                </span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--op-navy)] px-6 py-20 text-center">
      <Emblem className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-auto -translate-x-1/2 -translate-y-1/2 opacity-[0.06]" />
      <div className="relative mx-auto max-w-[520px]">
        <h2 className="mx-auto mb-4 max-w-[480px] text-[26px] font-medium leading-[1.3] text-white">
          Built for healthcare networks that demand more than a driver.
        </h2>
        <p className="mx-auto mb-7 max-w-[440px] text-[15px] leading-[1.7] text-white/65">
          Schedule a 20-minute call and we&apos;ll show you exactly what reliable medical logistics looks like for your
          operation. No commitment. Just the platform.
        </p>
        <a className="btn-teal px-8 py-3.5 text-[15px]" href="mailto:contact@opgenesis.com?subject=OP%20Genesis%20Demo%20Request">
          Book a Demo
        </a>
        <p className="mt-3.5 text-[13px] text-white/45">We typically respond within one business day.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--op-navy-dark)] px-6 pb-8 pt-16">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-4 gap-10 max-md:grid-cols-1">
          <div>
            <Logo inverse />
            <p className="mt-3 text-[13px] text-white/55">Delivering Care. Every Time.</p>
          </div>
          <FooterColumn
            title="Services"
            links={["Specimen Transport", "Pharmacy Delivery", "STAT & Emergency", "Lab-to-Lab Transfer"]}
          />
          <div>
            <h3 className="footer-heading">Company</h3>
            <a className="footer-link" href="#about">
              About Us
            </a>
            <a className="footer-link" href="#how-it-works">
              Our Approach
            </a>
            <a className="footer-link" href="mailto:contact@opgenesis.com">
              Careers
            </a>
            <a className="btn-teal mt-2 px-4 py-2 text-[13px]" href="#contact">
              Request a Demo
            </a>
          </div>
          <div>
            <h3 className="footer-heading">Contact</h3>
            <a className="footer-link" href="tel:+14078747361">
              407-874-7361
            </a>
            <a className="footer-link" href="mailto:contact@opgenesis.com">
              contact@opgenesis.com
            </a>
            <p className="m-0 text-[13px] leading-8 text-white/65">Orlando, FL 32856</p>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between gap-6 border-t border-white/10 pt-6 max-md:flex-col max-md:items-start">
          <p className="m-0 flex flex-wrap gap-3 text-xs text-white/45">
            <span>HIPAA Compliant</span>
            <span>·</span>
            <span>Florida DOH Registered</span>
            <span>·</span>
            <span>Licensed & Insured</span>
          </p>
          <p className="m-0 max-w-[520px] text-xs text-white/35">
            OP Genesis Healthcare Logistics Solutions Serving Orlando, Orange County, Seminole County, Osceola County,
            and central Florida.
          </p>
        </div>
        <p className="mt-4 text-xs text-white/35">
          © 2026 OP Genesis Healthcare Logistics Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="footer-heading">{title}</h3>
      {links.map((link) => (
        <a key={link} className="footer-link" href="#solutions">
          {link}
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <StatsBar />
        <Problem />
        <Solution />
        <Pillars />
        <MonthlyReport />
        <Services />
        <Why />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
