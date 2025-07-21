import Link from "next/link";
import {
  Shield,
  Heart,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  DollarSign,
  Clock,
  FileText,
  Home,
  GraduationCap,
} from "lucide-react";

export default function LifeInsurance() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Secure Your Family's{" "}
              <span className="text-purple-300">Financial Future</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Life insurance that provides peace of mind and financial security
              for your loved ones. Protect what matters most with our
              comprehensive life insurance solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Life Insurance Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Life Insurance Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Life insurance provides financial protection for your family when
              they need it most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Mortgage Protection
              </h3>
              <p className="text-gray-600">
                Ensure your family can keep their home even if you're no longer
                there to provide.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Education Funding
              </h3>
              <p className="text-gray-600">
                Secure your children's educational future with funds for college
                and beyond.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Income Replacement
              </h3>
              <p className="text-gray-600">
                Replace lost income to maintain your family's standard of
                living.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Final Expenses
              </h3>
              <p className="text-gray-600">
                Cover funeral costs and final expenses without burdening your
                family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Life Insurance */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Life Insurance
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right type of coverage for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div
                className="h-48 bg-cover bg-center rounded-lg mb-6"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
                }}
              ></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Term Life Insurance
              </h3>
              <p className="text-gray-600 mb-6">
                Affordable coverage for a specific period (10, 20, or 30 years).
                Perfect for young families and those with temporary financial
                obligations.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Lower premiums</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Temporary coverage</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Convertible options</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Level premiums</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

          
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div
                className="h-48 bg-cover bg-center rounded-lg mb-6"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
                }}
              ></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Whole Life Insurance
              </h3>
              <p className="text-gray-600 mb-6">
                Permanent coverage with cash value accumulation. Provides
                lifelong protection and builds wealth over time.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Lifetime coverage</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Cash value growth</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Loan options</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Guaranteed premiums</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* Family Stories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Families, Real Protection
            </h2>
            <p className="text-xl text-gray-600">
              See how life insurance has helped families during difficult times
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div
                className="h-64 bg-cover bg-center rounded-lg mb-6"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
                }}
              ></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                The Johnson Family
              </h3>
              <p className="text-gray-600 mb-4">
                "When my husband passed away unexpectedly, our life insurance
                policy allowed me to pay off our mortgage and focus on raising
                our three children without financial stress. SecureLife was
                there for us every step of the way."
              </p>
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  - Sarah Johnson
                </span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div
                className="h-64 bg-cover bg-center rounded-lg mb-6"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
                }}
              ></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                The Rodriguez Family
              </h3>
              <p className="text-gray-600 mb-4">
                "Our term life insurance policy gave us peace of mind while our
                children were young. Now that they're grown, we've converted to
                a whole life policy for retirement planning. The flexibility has
                been amazing."
              </p>
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  - Carlos Rodriguez
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Protect Your Family's Future Today
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Don't leave your family's financial security to chance. Get a free
            life insurance quote and secure their future today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
