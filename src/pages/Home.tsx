import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Zap, CheckCircle2, TrendingUp } from "lucide-react";
import { Navbar } from "@/components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen gradient-hero">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in-up">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 animate-glow">
                AI-Powered Scheduling
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Intelligent Timetabling,
              <br />
              Simplified
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Automate your academic scheduling with our advanced conflict resolution system. 
              Save hours of manual work and optimize resource allocation effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/login">
                <Button size="lg" className="gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 text-lg px-8 py-6">
                  Get Started
                  <Zap className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:shadow-card transition-all duration-300 hover:scale-105">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-20">
            {[
              {
                icon: Calendar,
                title: "Automated Scheduling",
                description: "Generate optimized timetables in seconds with intelligent algorithms",
                color: "text-primary"
              },
              {
                icon: Users,
                title: "Fair Load Distribution",
                description: "Ensure equitable teaching hours across all faculty members",
                color: "text-secondary"
              },
              {
                icon: Clock,
                title: "Zero Conflicts",
                description: "Eliminate faculty, classroom, and lab scheduling conflicts",
                color: "text-accent"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl glass-effect shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose TimeTable Pro?</h2>
            <p className="text-xl text-muted-foreground">
              Built for modern educational institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Supports all semesters and divisions",
              "Batch-wise and department integration",
              "Credit-wise subject assignment",
              "Real-time conflict detection",
              "Comprehensive reporting tools",
              "Easy manual adjustments"
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 gradient-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "10,000+", label: "Timetables Generated", icon: Calendar },
              { number: "99.9%", label: "Conflict-Free Rate", icon: CheckCircle2 },
              { number: "50+", label: "Institutions Trust Us", icon: TrendingUp }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-primary" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center p-12 rounded-3xl gradient-primary shadow-elegant animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Scheduling?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join leading institutions using TimeTable Pro
            </p>
            <Link to="/login">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-all duration-300">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
