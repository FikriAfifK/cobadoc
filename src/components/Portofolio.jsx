import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

// Simple, single-file React component for a Data Analyst portfolio.
// TailwindCSS required. Place this file in src/components/Portfolio.jsx
// Add your resume to /public/resume.pdf and replace placeholder data below.

const projects = [
  {
    title: "Multi-Store Online Menu Book Website",
    desc: 
    <p>
        A website that allows culinary business owners to create professional online menus.
        Each store can display their menu via a unique link or QR code. This system supports 
        multiple stores, menu categories, menu images, and subscription features for stores with advanced needs.
    </p>,
    tech: ["Laravel", "Filament", "MySQL", "TailwindCSS/Blade"],
    github: "https://github.com/FikriAfifK/e-menu.git",
    live: "#"
  },
  {
    title: "Superstore Sales Dashboard",
    desc: 
    <p>
        This project analyzes sales performance from the Sample Superstore dataset using Python, SQL, and Power BI.
        The goal is to extract insights from historical sales data and visualize them in an interactive dashboard that
        supports data-driven decision-making.
    </p>,
    tech: ["Power BI", "SQL", "Python"],
    github: "https://github.com/FikriAfifK/SuperstoreSalesDashboard.git",
    live: "#"
  },
  {
    title: "Sales Data Analysis",
    desc:
    <p>
        This dashboard was developed using Power BI to analyze product sales data from 2020 to 2024. Its main purpose is 
        to provide comprehensive insights into sales trends, profit, promotions, and product performance, serving as a 
        decision-support tool for business strategies.
    </p>,
    tech: ["Power BI", "DAX", "Power Query"],
    github: "https://github.com/FikriAfifK/Sales-Data-Analysis.git",
    live: "#"
  },
  {
    title: "Insurance Dashboard",
    desc:
    <p>
        This dashboard was built using Power BI Desktop to analyze insurance policy and claim data. The goal is to provide 
        insight into product performance, policy distribution, number of claims, and financial trends so that companies 
        can make more informed decisions.
    </p>,
    tech: ["Power BI", "DAX", "Power Query"],
    github: "https://github.com/FikriAfifK/Insurance-Dashboard.git",
    live: "#"
  },
  {
    title: "Transactions Data Analysis",
    desc:
    <p>
        Interactive analysis of UPI (Unified Payments Interface) transactions using dashboards. UPI is a real-time payment 
        system developed by the National Payments Corporation of India (NPCI), enabling instant bank-to-bank transfers using 
        Virtual Payment Address (VPA), mobile number, or QR Code. Popular UPI-based apps in India include Google Pay, PhonePe, Paytm, and BHIM.
    </p>,
    tech: ["Power BI", "DAX", "Power Query"],
    github: "https://github.com/FikriAfifK/UPI-Transactions-Data-Analysis.git",
    live: "#"
  }
];

const skills = [
  { name: "SQL", level: 85 },
  { name: "Python", level: 85 },
  { name: "PHP", level: 80 },
  { name: "Excel", level: 80 },
  { name: "Power BI", level: 80 },
  { name: "Statistics", level: 75 }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-200 text-slate-900 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Bagian kiri: Foto */}
        <div className="flex items-center gap-6">
            <img
            src="/profile.jpg"
            alt="Fikri Afif Khairudin"
            className="w-32 h-32 rounded-full shadow-lg border-4 border-white"
            />

            {/* Bagian kanan: Nama + deskripsi + tombol */}
            <div>
            <h1 className="text-3xl md:text-4xl font-extrabold">
                Fikri Afif Khairudin
            </h1>
            <p className="mt-2 text-slate-600">
                Fresh Graduate in Informatics
            </p>
            <div className="mt-4 flex gap-3 items-center">
                <a
                href="/CV_Fikri Afif Khairudin2.pdf"
                className="inline-block rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md"
                download
                >
                Download Resume
                </a>
                <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=fikriafifk@gmail.com&su=Job%20Opportunity"
                className="inline-block rounded-xl bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700"
                >
                Contact Me
                </a>
            </div>
            </div>
        </div>

        {/* Navigasi */}
        <nav className="flex gap-3">
            <a href="#projects" className="text-sm text-slate-700 hover:text-slate-900">
            Projects
            </a>
            <a href="#skills" className="text-sm text-slate-700 hover:text-slate-900">
            Skills
            </a>
            <a href="#contact" className="text-sm text-slate-700 hover:text-slate-900">
            Contact
            </a>
        </nav>
        </header>

        <main className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
          <section className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow"
            >
              <h2 className="text-xl font-semibold">About Me</h2>
              <p className="mt-3 text-slate-600 leading-relaxed text-justify">
                Hello — I'm Fikri Afif, a fresh graduate in Informatics with a strong interest in data, analytics, and web development. 
                Experienced in data preprocessing, machine learning, and model evaluation through academic projects and internships. 
                Skilled in Python, SQL, and Excel, with additional experience using data visualization tools such as Power BI. 
                Alongside my data-focused background, I also enjoy building web-based solutions using technologies like HTML, 
                CSS, and PHP. This combination of data analytics and web development enables me to create interactive dashboards 
                and data-driven applications that bridge insights with user experience.
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-slate-700">Top tools</h3>
                  <ul className="mt-2 text-sm text-slate-600 space-y-1">
                    <li>Python Programming Language</li>
                    <li>SQL</li>
                    <li>PHP</li>
                    <li>Microsoft Office</li>
                    <li>Power BI (Power Query, DAX)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-slate-700">Work style</h3>
                  <ul className="mt-2 text-sm text-slate-600 space-y-1">
                    <li>Detail oriented</li>
                    <li>Analytical Thinking</li>
                    <li>Communicative — explain results in non-technical terms</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <section id="projects" className="mt-6">
              <h2 className="text-lg font-semibold mb-4">Selected Projects</h2>
              <div className="grid gap-4">
                {projects.map((p, i) => (
                  <motion.article
                    key={p.title}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="bg-white rounded-2xl p-5 shadow"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-slate-900">{p.title}</h3>
                        <p className="mt-1 text-sm text-slate-600 text-justify">{p.desc}</p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {p.tech.map((t) => (
                            <span key={t} className="text-xs rounded-full border px-2 py-1">{t}</span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 items-end self-center">
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-sky-700 transition"
                        >
                          GitHub
                        </a>
                        {/* <a href={p.live} target="_blank" rel="noreferrer" className="text-sm text-slate-500">
                          Live
                        </a> */}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          </section>

          <aside className="md:col-span-1">
            <div className="bg-white rounded-2xl p-5 shadow sticky top-6">
              <h2 className="text-lg font-semibold">Skills</h2>
              <div id="skills" className="mt-4 space-y-4">
                {skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{s.name}</span>
                      <span className="text-slate-600">{s.level}%</span>
                    </div>
                    <div className="mt-2 w-full rounded-full bg-slate-100 h-2 overflow-hidden">
                      <div
                        style={{ width: `${s.level}%` }}
                        className="h-2 rounded-full bg-sky-600"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-slate-700">Contact</h3>
                <p className="mt-2 text-sm text-slate-600">Prefer email — I'll usually reply within 24 hours.</p>

                <div className="mt-3 flex flex-col gap-2">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=fikriafifk@gmail.com&su=Job%20Opportunity" className="inline-block text-sm underline">
                    Contact Me
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
            <a 
                href="https://ude.my/UC-d5c88110-aa55-476f-8684-a8e5f30a5aac" 
                target="_blank" 
                className="flex items-center gap-3 p-3 bg-white rounded-xl shadow hover:bg-slate-50 transition"
            >
                <span className="text-2xl">🏆</span>
                <div>
                <p className="font-semibold text-slate-800">Complete Data Analyst Bootcamp</p>
                <p className="text-xs text-slate-600">Udemy • 2025</p>
                </div>
            </a>

            <a 
                href="https://dev.id/certificate/verify/ZEV6K7DVYL" 
                target="_blank" 
                className="flex items-center gap-3 p-3 bg-white rounded-xl shadow hover:bg-slate-50 transition"
            >
                <span className="text-2xl">🏆</span>
                <div>
                <p className="font-semibold text-slate-800">Machine Learning with TensorFlow</p>
                <p className="text-xs text-slate-600">dev.cert by dev.id • 2025</p>
                </div>
            </a>
            </div>

          </aside>
        </main>

        <footer id="contact" className="mt-12 text-center text-slate-600">
          <div className="mt-3 flex justify-center space-x-6 text-2xl">
            <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=fikriafifk@gmail.com&su=Job%20Opportunity" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-600"
            >
            <FaEnvelope />
            </a>
            <a 
            href="https://www.linkedin.com/in/fikri-afif-khairudin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-600"
            >
            <FaLinkedin />
            </a>
            <a 
            href="https://github.com/FikriAfifK" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-600"
            >
            <FaGithub />
            </a>
          </div>
          <p className="mt-2 text-xs">© {new Date().getFullYear()} Fikri Afif Khairudin — Portfolio</p>
        </footer>
      </div>
    </div>
  );
}
