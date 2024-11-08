import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, MessageCircle, Shield, Star, Users } from "lucide-react"
import { Link } from "react-router-dom"


export default function LandingPage2() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="inline-block font-bold text-xl">Trust GIG</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link to="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Browse Jobs
            </Link>
            <Link to="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Find Freelancers
            </Link>
            <Link to="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Community
            </Link>
            <Link to="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Support
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-3xl mx-auto">
                  Connect with Top Freelancers, Find Your Perfect Project
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto">
                  Join thousands of freelancers and clients in a trusted marketplace for short-term and project-based work.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
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
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">Key Features</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Shield className="h-10 w-10 text-primary mb-2" />
                  <h3 className="text-xl font-bold text-center">AI-Powered Dispute Resolution</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Our advanced AI system ensures fair and quick resolution of any disputes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <h3 className="text-xl font-bold text-center">Skill Verification Process</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    We verify freelancer skills to ensure you get top-quality talent.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Star className="h-10 w-10 text-primary mb-2" />
                  <h3 className="text-xl font-bold text-center">Dynamic Pricing Models</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Flexible pricing options to suit various project needs and budgets.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <h3 className="text-xl font-bold text-center">Community Support Forums</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Connect with peers, share experiences, and get advice from our vibrant community.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <ArrowRight className="h-10 w-10 text-primary mb-2" />
                  <h3 className="text-xl font-bold text-center">Bidirectional Feedback System</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Fair and transparent feedback system for both freelancers and clients.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <MessageCircle className="h-10 w-10 text-primary mb-2" />
                  <h3 className="text-xl font-bold text-center">Integrated Communication Tools</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Seamless communication between clients and freelancers within the platform.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">How It Works</h2>
            <div className="grid gap-6 lg:grid-cols-6">
              {[
                { step: 1, title: "Sign Up", description: "Create your account in minutes" },
                { step: 2, title: "Create a Profile", description: "Showcase your skills and experience" },
                { step: 3, title: "Browse Jobs", description: "Find projects that match your skills" },
                { step: 4, title: "Connect", description: "Collaborate with clients and teams" },
                { step: 5, title: "Complete Work", description: "Deliver high-quality results" },
                { step: 6, title: "Get Paid", description: "Receive secure and timely payments" },
              ].map((item) => (
                <Card key={item.step}>
                  <CardContent className="flex flex-col items-center space-y-2 p-6">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mb-2">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-center">{item.title}</h3>
                    <p className="text-sm text-muted-foreground text-center">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">Success Stories</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "John Doe",
                  testimonial: "Trust GIG helped me find amazing clients and grow my freelance business!",
                  rating: 5,
                },
                {
                  name: "Jane Smith",
                  testimonial: "As a client, I've found top-notch talent for all my projects on Trust GIG.",
                  rating: 5,
                },
                {
                  name: "Alex Johnson",
                  testimonial: "The community support on Trust GIG is unmatched. It's more than just a job platform!",
                  rating: 4,
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="flex flex-col items-center space-y-4 p-6">
                    <img
                      alt={`${testimonial.name}'s profile`}
                      className="rounded-full"
                      height="100"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "100/100",
                        objectFit: "cover",
                      }}
                      width="100"
                    />
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground text-center">"{testimonial.testimonial}"</p>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? "text-primary" : "text-muted"}`} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Community Today</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connect with fellow freelancers, share experiences, and grow your network. Start your journey with Trust GIG
                  now!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Join Now</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2 hover:text-primary" to="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">About Us</h3>
              <ul className="space-y-1">
                <li>
                  <Link className="text-sm hover:underline" to="#">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline" to="#">
                    Team
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline" to="#">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul className="space-y-1">
                <li>
                  <Link className="text-sm hover:underline" to="#">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline" to="#">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline" to="#">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="space-y-1">
                <li>
                  <Link className="text-sm hover:underline" to="#">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline" to="#">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline" to="#">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Connect</h3>
              <ul className="space-y-1">
                <li>
                  <Link className="text-sm hover:underline" to="#">
                Twitter
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline" to="#">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline" to="#">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">© 2024 Trust GIG. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link className="text-xs text-muted-foreground hover:underline" to="#">
                Terms of Service
              </Link>
              <Link className="text-xs text-muted-foreground hover:underline" to="#">
                Privacy
              </Link>
              <Link className="text-xs text-muted-foreground hover:underline" to="#">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}