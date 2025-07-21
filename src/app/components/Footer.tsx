import Link from "next/link";
import { Shield, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold">SecureLife Insurance</span>
            </div>
            <p className="text-gray-300 text-sm">
              Protecting families and securing futures with comprehensive
              insurance solutions. Your trusted partner in life and health
              coverage.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/health-insurance"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  Health Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/life-insurance"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  Life Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Health Insurance</li>
              <li className="text-gray-300 text-sm">Life Insurance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">
                  info@securelife.com
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  123 Insurance Ave
                  <br />
                  Suite 100
                  <br />
                  New York, NY 10001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2024 SecureLife Insurance. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
