import { AlertTriangle, TrendingDown, ShieldX, Clock, Users, UserMinus, Zap, Brain, Shield, ShoppingCart, Truck, Package, Layers, Store, Headphones, Star, CalendarCheck, PartyPopper, Megaphone, HardHat, Tent } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface PainCard {
  icon: LucideIcon;
  number: string;
  title: string;
  body: string;
  stat: string;
  statLabel: string;
}

export interface Capability {
  icon: LucideIcon;
  bold: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Role {
  icon: LucideIcon;
  title: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface IndustryConfig {
  slug: string;
  label: string;
  badge: string;
  heroHeadline: string;
  heroSubtitle: string;
  heroImages: { src: string; alt: string }[];
  problemHeadline: string;
  painCards: PainCard[];
  solutionHeadline: string;
  capabilities: Capability[];
  stats: Stat[];
  rolesHeadline: string;
  rolesSubtitle: string;
  roles: Role[];
  ctaHeadline: string;
  ctaSubtitle: string;
  faqs: FaqItem[];
}

export const warehouse: IndustryConfig = {
  slug: "",
  label: "Warehousing",
  badge: "Available now in Sydney.",
  heroHeadline: "The smarter way to staff your warehouse",
  heroSubtitle: "MyGig is your Workforce-as-a-Service partner — scaling casual headcount on demand, optimising your labour mix, and handling all Fair Work compliance as your Employer of Record.",
  heroImages: [
    { src: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600&h=1400&fit=crop", alt: "Forklift driver operating machinery in warehouse" },
    { src: "https://images.pexels.com/photos/6170088/pexels-photo-6170088.jpeg?auto=compress&cs=tinysrgb&w=600&h=1400&fit=crop", alt: "Female warehouse supervisor with clipboard" },
    { src: "https://images.pexels.com/photos/4484074/pexels-photo-4484074.jpeg?auto=compress&cs=tinysrgb&w=600&h=1400&fit=crop", alt: "Warehouse team walking through storage aisle" },
    { src: "https://images.pexels.com/photos/4487385/pexels-photo-4487385.jpeg?auto=compress&cs=tinysrgb&w=600&h=1400&fit=crop", alt: "Worker leaning on pallet jack in warehouse" },
    { src: "https://images.pexels.com/photos/4480797/pexels-photo-4480797.jpeg?auto=compress&cs=tinysrgb&w=600&h=1400&fit=crop", alt: "Pick packers carrying boxes in warehouse" },
  ],
  problemHeadline: "Inflexible workforces put key contracts at risk",
  painCards: [
    {
      icon: AlertTriangle,
      number: "01",
      title: "Unpredictable volumes put DIFOT at risk",
      body: "When a spike hits, your current casual workforce can\u2019t scale fast enough. Shifts go unfilled, picks get missed, DIFOT drops.",
      stat: "37%",
      statLabel: "of warehouses miss DIFOT during peaks",
    },
    {
      icon: TrendingDown,
      number: "02",
      title: "Overtime is the only lever \u2014 and it\u2019s bleeding margin",
      body: "When you can\u2019t flex headcount, overtime becomes the default. Penalty rates compound, cost-per-unit blows out.",
      stat: "2.5\u00d7",
      statLabel: "penalty rate multiplier on overtime",
    },
    {
      icon: ShieldX,
      number: "03",
      title: "One bad peak puts a key account on notice",
      body: "Clients review performance at peaks. Repeated SLA breaches trigger reviews and put key accounts at risk.",
      stat: "68%",
      statLabel: "of contract reviews triggered at peak",
    },
  ],
  solutionHeadline: "MyGig is the operational backbone for warehouse fulfilment",
  capabilities: [
    { icon: Zap, bold: "Scale casual headcount on demand" },
    { icon: Brain, bold: "Optimise cost-per-unit in real time" },
    { icon: Clock, bold: "Fill shifts within hours" },
    { icon: Shield, bold: "Outsource all Fair Work compliance" },
  ],
  stats: [
    { value: 70, suffix: "%", label: "Cost reduction" },
    { value: 24, suffix: "hr", label: "Shift fill time" },
    { value: 100, suffix: "%", label: "Fair Work compliant" },
  ],
  rolesHeadline: "From a single pick packer for one shift to staffing your entire 24/7 distribution centre, we\u2019ve got your roster covered.",
  rolesSubtitle: "Our network includes experienced, RF scanner-proficient warehouse staff and licensed high-reach operators to ensure your operations run at maximum efficiency.",
  roles: [
    { icon: ShoppingCart, title: "Warehouse Assistant", image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=2&fit=crop" },
    { icon: Truck, title: "Forklift Operator", image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=2&fit=crop" },
    { icon: Package, title: "Pick Packers", image: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=2&fit=crop" },
    { icon: Layers, title: "Sorter", image: "https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=2&fit=crop" },
  ],
  ctaHeadline: "Ready to transform how you staff your warehouse?",
  ctaSubtitle: "See how MyGig can reduce your workforce costs, eliminate compliance risk, and give you the flexibility to scale on demand.",
  faqs: [
    { question: "What is Workforce-as-a-Service?", answer: "Workforce-as-a-Service means MyGig handles everything \u2014 recruitment, onboarding, payroll, compliance, rostering, and time & attendance \u2014 for your casual workforce. We\u2019re the Employer of Record, so all Fair Work liability sits with us, not you." },
    { question: "How quickly can you fill shifts?", answer: "Most shifts are filled within 24 hours, including specialist roles like forklift drivers. For urgent last-minute cover, we can often respond within hours." },
    { question: "What does it cost?", answer: "For new workers supplied by MyGig, we charge a transparent service fee on gross wages. For transitioning your existing casuals onto our platform, our EOR model is designed to reduce your total non-wage OPEX by 20\u201325% or more." },
    { question: "Do workers have to use the MyGig app?", answer: "Yes \u2014 the app handles shift acceptance, GPS-verified clock-in/out, timesheets, and pay. It\u2019s designed to be simple and intuitive." },
    { question: "What awards do you cover?", answer: "Our AI-powered compliance engine covers all major awards relevant to warehousing and logistics, including the Storage Services Award, the General Retail Industry Award, and the Road Transport Award." },
    { question: "How does the Employer of Record model work?", answer: "When you engage workers through MyGig, we become their legal employer. That means payroll, tax, superannuation, workers\u2019 comp, and Fair Work compliance are all our responsibility. You direct the work \u2014 we handle everything else." },
  ],
};

export const retail: IndustryConfig = {
  slug: "retail",
  label: "Retail",
  badge: "Available now in Sydney.",
  heroHeadline: "The smarter way to staff your stores",
  heroSubtitle: "MyGig is your Workforce-as-a-Service partner \u2014 scaling retail staff on demand for peak trading, seasonal surges, and new store openings, with full Fair Work compliance as your Employer of Record.",
  heroImages: [
    { src: "https://images.pexels.com/photos/5418891/pexels-photo-5418891.jpeg?auto=compress&cs=tinysrgb&w=600&h=1400&fit=crop", alt: "Shop assistant helping customer try on clothes" },
    { src: "https://images.pexels.com/photos/6140093/pexels-photo-6140093.jpeg?auto=compress&cs=tinysrgb&w=600&h=1400&fit=crop", alt: "Retail worker steaming clothes in store" },
    { src: "https://images.pexels.com/photos/6062221/pexels-photo-6062221.jpeg?auto=compress&cs=tinysrgb&w=600&h=1400&fit=crop", alt: "Store associate in retail aisle" },
    { src: "https://images.pexels.com/photos/4349750/pexels-photo-4349750.jpeg?auto=compress&cs=tinysrgb&w=600&h=1400&fit=crop", alt: "Retail team member at shop counter" },
    { src: "https://images.pexels.com/photos/7679860/pexels-photo-7679860.jpeg?auto=compress&cs=tinysrgb&w=600&h=1400&fit=crop", alt: "Customer service at retail checkout" },
  ],
  problemHeadline: "Unpredictable foot traffic makes retail staffing a constant gamble",
  painCards: [
    {
      icon: AlertTriangle,
      number: "01",
      title: "Trading peaks leave you understaffed or overstaffed",
      body: "Weekends, public holidays, and seasonal sales create massive demand swings. Fixed rosters can\u2019t flex \u2014 so you either miss sales or burn cash on idle staff.",
      stat: "42%",
      statLabel: "of retailers report lost sales from understaffing",
    },
    {
      icon: TrendingDown,
      number: "02",
      title: "High turnover makes training a sunk cost",
      body: "Retail casual turnover exceeds 60% annually. Every leaver takes their training investment with them, leaving you in a constant hiring loop.",
      stat: "60%",
      statLabel: "annual casual turnover in Australian retail",
    },
    {
      icon: ShieldX,
      number: "03",
      title: "Award complexity creates hidden compliance risk",
      body: "The General Retail Industry Award has complex penalty structures across weekends, public holidays, and evening work. Getting it wrong means backpay claims and Fair Work scrutiny.",
      stat: "$4.7B",
      statLabel: "in wage underpayments identified since 2019",
    },
  ],
  solutionHeadline: "MyGig keeps your stores staffed and compliant \u2014 without the overhead",
  capabilities: [
    { icon: Zap, bold: "Scale staff up for peak trading instantly" },
    { icon: Brain, bold: "Match skilled retail workers to your brand" },
    { icon: Clock, bold: "Fill last-minute gaps within hours" },
    { icon: Shield, bold: "Full Retail Award compliance, handled" },
  ],
  stats: [
    { value: 60, suffix: "%", label: "Faster to fill" },
    { value: 24, suffix: "hr", label: "Shift fill time" },
    { value: 100, suffix: "%", label: "Award compliant" },
  ],
  rolesHeadline: "From a single sales assistant for a Saturday surge to staffing your entire holiday roster, we\u2019ve got you covered.",
  rolesSubtitle: "Our network includes experienced retail professionals with POS skills, visual merchandising experience, and customer service expertise across fashion, grocery, electronics, and more.",
  roles: [
    { icon: Store, title: "Sales Assistant", image: "https://images.pexels.com/photos/5418891/pexels-photo-5418891.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop" },
    { icon: Headphones, title: "Customer Service", image: "https://images.pexels.com/photos/7679860/pexels-photo-7679860.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop" },
    { icon: Package, title: "Stock & Inventory", image: "https://images.pexels.com/photos/6062221/pexels-photo-6062221.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop" },
    { icon: Star, title: "Visual Merchandiser", image: "https://images.pexels.com/photos/6140093/pexels-photo-6140093.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop" },
  ],
  ctaHeadline: "Ready to transform how you staff your stores?",
  ctaSubtitle: "See how MyGig can reduce your staffing costs, eliminate compliance risk, and give you the flexibility to scale for every trading peak.",
  faqs: [
    { question: "What is Workforce-as-a-Service?", answer: "Workforce-as-a-Service means MyGig handles everything \u2014 recruitment, onboarding, payroll, compliance, rostering, and time & attendance \u2014 for your casual retail workforce. We\u2019re the Employer of Record, so all Fair Work liability sits with us, not you." },
    { question: "Can workers match our brand experience?", answer: "Yes. We vet workers for retail experience, customer service skills, and presentation standards. You can set brand-specific requirements and we\u2019ll match accordingly." },
    { question: "How quickly can you fill retail shifts?", answer: "Most shifts are filled within 24 hours. For urgent last-minute cover during trading peaks, we can often respond within hours." },
    { question: "What does it cost?", answer: "We charge a transparent service fee on gross wages. No hidden markups. Our EOR model is designed to reduce your total non-wage OPEX by 20\u201325% or more." },
    { question: "Which retail awards do you cover?", answer: "Our AI-powered compliance engine covers the General Retail Industry Award, including all penalty rates for weekends, public holidays, and evening work. Every shift is calculated with the correct rates automatically." },
    { question: "How does the Employer of Record model work?", answer: "When you engage workers through MyGig, we become their legal employer. Payroll, tax, superannuation, workers\u2019 comp, and Fair Work compliance are all our responsibility." },
  ],
};

export const events: IndustryConfig = {
  slug: "events",
  label: "Events",
  badge: "Available now in Sydney.",
  heroHeadline: "The smarter way to staff your events",
  heroSubtitle: "MyGig is your Workforce-as-a-Service partner \u2014 scaling event crews on demand for festivals, conferences, exhibitions, and sporting events, with full Fair Work compliance as your Employer of Record.",
  heroImages: [
    { src: "https://images.pexels.com/photos/4485351/pexels-photo-4485351.jpeg?auto=compress&cs=tinysrgb&w=600&h=1400&fit=crop", alt: "Bartender mixing cocktails at event bar" },
    { src: "https://images.pexels.com/photos/6817133/pexels-photo-6817133.jpeg?auto=compress&cs=tinysrgb&w=600&h=1400&fit=crop", alt: "Waiter in vest smiling at event venue" },
    { src: "https://images.pexels.com/photos/6816375/pexels-photo-6816375.jpeg?auto=compress&cs=tinysrgb&w=600&h=1400&fit=crop", alt: "Waiter serving wine at corporate event" },
    { src: "https://images.pexels.com/photos/4485380/pexels-photo-4485380.jpeg?auto=compress&cs=tinysrgb&w=600&h=1400&fit=crop", alt: "Bartender serving customer at event bar" },
    { src: "https://images.pexels.com/photos/5668876/pexels-photo-5668876.jpeg?auto=compress&cs=tinysrgb&w=600&h=1400&fit=crop", alt: "Event staff with service cloche" },
  ],
  problemHeadline: "Event staffing is a logistical nightmare with razor-thin margins for error",
  painCards: [
    {
      icon: AlertTriangle,
      number: "01",
      title: "No-shows on event day are catastrophic",
      body: "One no-show can cascade into missed deadlines, angry clients, and reputational damage. Traditional agencies can\u2019t guarantee reliability at scale.",
      stat: "23%",
      statLabel: "average no-show rate for event casuals",
    },
    {
      icon: TrendingDown,
      number: "02",
      title: "Scaling from 10 to 200 staff overnight is impossible with agencies",
      body: "Large events need massive crews assembled fast. Labour hire agencies take weeks, charge premium rates, and still can\u2019t guarantee headcount.",
      stat: "3\u20134wk",
      statLabel: "average lead time with traditional agencies",
    },
    {
      icon: ShieldX,
      number: "03",
      title: "Compliance across multiple awards and shift patterns is a minefield",
      body: "Events span weekends, public holidays, and overnight shifts. Award interpretation across these patterns is complex and errors mean backpay liability.",
      stat: "78%",
      statLabel: "of event businesses worried about compliance",
    },
  ],
  solutionHeadline: "MyGig gives you reliable event crews \u2014 on demand, fully compliant",
  capabilities: [
    { icon: Zap, bold: "Assemble large crews in days, not weeks" },
    { icon: Brain, bold: "Match skilled event staff to your brief" },
    { icon: Clock, bold: "Replace no-shows in real time" },
    { icon: Shield, bold: "Full compliance across all shift patterns" },
  ],
  stats: [
    { value: 95, suffix: "%", label: "Show-up rate" },
    { value: 48, suffix: "hr", label: "Crew assembly time" },
    { value: 100, suffix: "%", label: "Award compliant" },
  ],
  rolesHeadline: "From a single bartender for a corporate function to crewing an entire festival, we\u2019ve got your event covered.",
  rolesSubtitle: "Our network includes experienced event professionals with RSA/RSG certifications, crowd management training, and industry-specific skills across festivals, conferences, exhibitions, and sporting events.",
  roles: [
    { icon: CalendarCheck, title: "Event Crew", image: "https://images.pexels.com/photos/6817133/pexels-photo-6817133.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop" },
    { icon: PartyPopper, title: "Hospitality Staff", image: "https://images.pexels.com/photos/6816375/pexels-photo-6816375.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop" },
    { icon: Megaphone, title: "Brand Ambassador", image: "https://images.pexels.com/photos/4485380/pexels-photo-4485380.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop" },
    { icon: HardHat, title: "Bump In / Out", image: "https://images.pexels.com/photos/4485351/pexels-photo-4485351.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop" },
  ],
  ctaHeadline: "Ready to transform how you staff your events?",
  ctaSubtitle: "See how MyGig can reduce your crew costs, eliminate no-shows, and give you the flexibility to scale for any event size.",
  faqs: [
    { question: "What is Workforce-as-a-Service?", answer: "Workforce-as-a-Service means MyGig handles everything \u2014 recruitment, onboarding, payroll, compliance, rostering, and time & attendance \u2014 for your casual event workforce. We\u2019re the Employer of Record, so all Fair Work liability sits with us." },
    { question: "How do you handle no-shows?", answer: "Our platform tracks reliability scores for all workers. We over-confirm for large events and have standby pools ready to deploy. Our average show-up rate is over 95%." },
    { question: "Can you staff a 200+ person event?", answer: "Yes. Our platform is built for scale. We regularly assemble large crews for festivals, exhibitions, and sporting events within 48\u201372 hours." },
    { question: "What does it cost?", answer: "We charge a transparent service fee on gross wages. No hidden markups, no last-minute surcharges. Our pricing is consistent regardless of event size." },
    { question: "Do your workers have RSA/RSG?", answer: "Yes. We verify all certifications including RSA, RSG, crowd management, and first aid as part of our onboarding process. You can filter by certification when requesting staff." },
    { question: "How does the Employer of Record model work?", answer: "When you engage workers through MyGig, we become their legal employer. Payroll, tax, superannuation, workers\u2019 comp, and Fair Work compliance are all our responsibility." },
  ],
};

export const industries: Record<string, IndustryConfig> = {
  warehouse,
  retail,
  events,
};
