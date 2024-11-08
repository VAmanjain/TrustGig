'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"

import { ArrowRight, CheckCircle, MessageCircle, Shield, Star, Users, Search, Menu } from "lucide-react"
import { Link } from "react-router-dom"

export default function LandingPage() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    })
  }, [controls])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Shield className="h-8 w-8 text-indigo-600 mr-2" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">TrustGIG</span>
            </motion.div>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Find Work</Link>
              <Link to="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Hire Talent</Link>
              <Link to="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Why TrustGIG</Link>
              <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">Log In</Button>
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700">Sign Up</Button>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Empower Your Career</span>
              <br />
              <span className="text-gray-900">Connect, Create, Succeed</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Join TrustGIG and unlock a world of opportunities. Whether you're a skilled freelancer or a business seeking top talent, we've got you covered.
            </p>
            <div className="mt-10 flex justify-center space-x-4">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-150 ease-in-out transform hover:scale-105">
                Get Started
              </Button>
              <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-full text-lg font-semibold transition duration-150 ease-in-out">
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <div className="flex items-center bg-white rounded-full shadow-lg p-2">
              <Search className="h-6 w-6 text-gray-400 ml-3" />
              <Input className="flex-grow border-none focus:ring-0 text-lg" placeholder="Search for skills or projects..." />
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full">
                Search
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose TrustGIG</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experience the future of freelancing with our cutting-edge platform designed to make your journey smooth and successful.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Secure Transactions", description: "Our advanced payment protection system ensures your funds are safe throughout the project lifecycle." },
              { icon: Users, title: "Global Talent Pool", description: "Access a diverse network of skilled professionals from around the world, perfect for any project." },
              { icon: Star, title: "Quality Assurance", description: "Our rigorous vetting process and rating system maintain high standards for both freelancers and clients." },
              { icon: MessageCircle, title: "Seamless Communication", description: "Stay connected with real-time messaging and collaboration tools built right into the platform." },
              { icon: CheckCircle, title: "Milestone Tracking", description: "Break projects into manageable milestones for better organization and timely payments." },
              { icon: ArrowRight, title: "Career Growth", description: "Gain experience, build your portfolio, and advance your freelancing career with TrustGIG." },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <feature.icon className="h-12 w-12 text-indigo-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How TrustGIG Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get started in just a few simple steps and begin your journey to freelancing success.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Create Your Profile", description: "Sign up and showcase your skills, experience, and portfolio to stand out." },
              { step: 2, title: "Explore Opportunities", description: "Browse through a wide range of projects or post your job requirements." },
              { step: 3, title: "Connect and Collaborate", description: "Engage with clients or freelancers, discuss project details, and agree on terms." },
              { step: 4, title: "Work and Earn", description: "Complete projects, receive payments securely, and build your reputation." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Hear from freelancers and clients who have found success on TrustGIG.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Alex Chen", role: "UX Designer", quote: "TrustGIG has been a game-changer for my freelance career. The platform's user-friendly interface and robust project management tools have helped me land high-quality clients and grow my business." },
              { name: "Sarah Johnson", role: "Marketing Director", quote: "As a business owner, finding reliable freelancers was always a challenge until I discovered TrustGIG. The talent pool is exceptional, and the platform's features make collaboration seamless." },
              { name: "Miguel Rodriguez", role: "Web Developer", quote: "The support from the TrustGIG team is outstanding. They truly care about the success of both freelancers and clients. I've been able to take on exciting projects and expand my skill set." },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl mr-4">
                        {testimonial.name[0]}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">Join TrustGIG today and take your freelancing career or business to new heights. Your next opportunity awaits!</p>
            <Button className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-full text-lg font-semibold transition duration-150 ease-in-out transform hover:scale-105">
              Sign Up Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 text-gray-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">For Freelancers</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="hover:text-indigo-600 transition duration-150 ease-in-out">Find Work</Link></li>
                <li><Link to="#" className="hover:text-indigo-600 transition duration-150 ease-in-out">Create Profile</Link></li>
                <li><Link to="#" className="hover:text-indigo-600 transition duration-150 ease-in-out">Resources</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Clients</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="hover:text-indigo-600 transition duration-150 ease-in-out">Post a Job</Link></li>
                <li><Link to="#" className="hover:text-indigo-600 transition duration-150 ease-in-out">How to Hire</Link></li>
                <li><Link to="#" className="hover:text-indigo-600 transition duration-150 ease-in-out">Success Stories</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="hover:text-indigo-600 transition duration-150 ease-in-out">About Us</Link></li>
                <li><Link to="#" className="hover:text-indigo-600 transition duration-150 ease-in-out">Press</Link></li>
                <li><Link to="#" className="hover:text-indigo-600 transition duration-150 ease-in-out">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="hover:text-indigo-600 transition duration-150 ease-in-out">Help Center</Link></li>
                <li><Link to="#" className="hover:text-indigo-600 transition duration-150 ease-in-out">Trust & Safety</Link></li>
                <li><Link to="#" className="hover:text-indigo-600 transition duration-150 ease-in-out">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-indigo-600 mr-2" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">TrustGIG</span>
            </div>
            <div className="flex space-x-6">
              <Link to="#" className="text-gray-400 hover:text-indigo-600 transition duration-150 ease-in-out">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-indigo-600 transition duration-150 ease-in-out">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-indigo-600 transition duration-150 ease-in-out">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2024 TrustGIG. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}