import React from 'react';
import { Leaf } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-green-600 p-2 rounded-full">
              <Leaf className="size-5 text-white" />
            </div>
            <span>Green Up Gambia</span>
          </div>
          
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Green Up Gambia. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
