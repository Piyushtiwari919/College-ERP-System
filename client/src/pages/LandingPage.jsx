// import { Link } from "react-router-dom";

// const LandingPage = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
//       <h1 className="text-4xl font-bold text-orange-500 mb-10">
//         🎓 College ERP Portal
//       </h1>
//       <div className="flex gap-6">
//         <Link to="/login?role=student" className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500">Student Login</Link>
//         <Link to="/login?role=faculty" className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-500">Faculty Login</Link>
//         <Link to="/login?role=admin" className="px-6 py-3 bg-red-600 rounded-lg hover:bg-red-500">Admin Login</Link>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;


import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { AcademicsSection } from '../components/AcademicsSection';
import { FacilitiesSection } from '../components/FacilitiesSection';
import { FacultySection } from '../components/FacultySection';
import { AlumniSection } from '../components/AlumniSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { EventsSection } from '../components/EventsSection';
import { NewsSection } from '../components/NewsSection';
import { AboutSection } from '../components/AboutSection';
import { NewsletterSection } from '../components/NewsletterSection';
import { Footer } from '../components/Footer';
// import  {Toaster}  from '../components/ui/sonner';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AcademicsSection />
      <FacilitiesSection />
      <FacultySection />
      <AlumniSection />
      <TestimonialsSection />
      <EventsSection />
      <NewsSection />
      <AboutSection />
      <NewsletterSection />
      <Footer />
      {/* <Toaster /> */}
    </div>
  );
}