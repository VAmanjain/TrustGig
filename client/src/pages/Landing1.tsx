import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, MessageCircle, Shield, Star, Users } from "lucide-react"
import { Link } from "react-router-dom"
import img1 from '../assets/img1.png';


const LandingPage1=()=> {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-6 w-6" />
              <span className="inline-block font-bold">Trust GIG</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                to="#"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                How It Works
              </Link>
              <Link
                to="/explore"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Browse Jobs
              </Link>
              <Link
                to="#"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Find Freelancers
              </Link>
              <Link
                to="#"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Community
              </Link>
              <Link
                to="#"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Support
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Button variant="ghost" size="sm">
                <Link to="/login">
                Log in
                </Link>
              </Button>
              <Button size="sm">Sign up</Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <img src={img1} alt="Hero" className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last" height="550" width="550" />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Connect with Top Freelancers and Find Your Perfect Project
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join thousands of freelancers and clients in a trusted marketplace for short-term and project-based work.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="inline-flex items-center justify-center" size="lg">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Post a Job
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Shield className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">AI-Powered Dispute Resolution</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Our advanced AI system ensures fair and quick resolution of any disputes.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <CheckCircle className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Skill Verification Process</h3>
                <p className="text-sm text-muted-foreground text-center">
                  We verify freelancer skills to ensure you get top-quality talent.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Star className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Dynamic Pricing Models</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Flexible pricing options to suit various project needs and budgets.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Users className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Community Support Forums</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Connect with peers, share experiences, and get advice from our vibrant community.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <ArrowRight className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Bidirectional Feedback System</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Fair and transparent feedback system for both freelancers and clients.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <MessageCircle className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Integrated Communication Tools</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Seamless communication between clients and freelancers within the platform.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-6 lg:grid-cols-6">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mb-2">
                  1
                </div>
                <h3 className="text-xl font-bold">Sign Up</h3>
                <p className="text-sm text-muted-foreground text-center">Create your account in minutes</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mb-2">
                  2
                </div>
                <h3 className="text-xl font-bold">Create a Profile</h3>
                <p className="text-sm text-muted-foreground text-center">Showcase your skills and experience</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mb-2">
                  3
                </div>
                <h3 className="text-xl font-bold">Browse Jobs</h3>
                <p className="text-sm text-muted-foreground text-center">Find projects that match your skills</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mb-2">
                  4
                </div>
                <h3 className="text-xl font-bold">Connect</h3>
                <p className="text-sm text-muted-foreground text-center">Collaborate with clients and teams</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mb-2">
                  5
                </div>
                <h3 className="text-xl font-bold">Complete Work</h3>
                <p className="text-sm text-muted-foreground text-center">Deliver high-quality results</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mb-2">
                  6
                </div>
                <h3 className="text-xl font-bold">Get Paid</h3>
                <p className="text-sm text-muted-foreground text-center">Receive secure and timely payments</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Success Stories</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <img
                  alt="Testimonial"
                  className="rounded-full"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <h3 className="text-xl font-bold">John Doe</h3>
                <p className="text-sm text-muted-foreground text-center">
                  "Trust GIG helped me find amazing clients and grow my freelance business!"
                </p>
                <div className="flex space-x-1">
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <img
                  alt="Testimonial"
                  className="rounded-full"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <h3 className="text-xl font-bold">Jane Smith</h3>
                <p className="text-sm text-muted-foreground text-center">
                  "As a client, I've found top-notch talent for all my projects on Trust GIG."
                </p>
                <div className="flex space-x-1">
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <img
                  alt="Testimonial"
                  className="rounded-full"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <h3 className="text-xl font-bold">Alex Johnson</h3>
                <p className="text-sm text-muted-foreground text-center">
                  "The community support on Trust GIG is unmatched. It's more than just a job platform!"
                </p>
                <div className="flex space-x-1">
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-muted" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Community Today</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connect with fellow freelancers, share experiences, and grow your network. Start your journey with Trust GIG
                  now!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Join Now</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" to="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 Trust GIG. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

export default LandingPage1