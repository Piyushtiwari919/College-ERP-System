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
import { FacultySection } from '../components/FacultySection';
import { AlumniSection } from '../components/AlumniSection';
import { AboutSection } from '../components/AboutSection';
import { Footer } from '../components/Footer';
import { TestimonialsSection } from '../components/TestimonialsSection';
// import  {Toaster}  from '../components/ui/sonner';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(315deg,_#003153_0%,_#1B1B1B_74%)]">
      <Header />
      <Hero />
      <AcademicsSection />
      
      <FacultySection />
      <AlumniSection />
     <TestimonialsSection />
      <AboutSection />
      
      <Footer />
      {/* <Toaster /> */}
    </div>
  );
}