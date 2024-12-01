import React from 'react';
import { MessageSquare, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-zinc-900 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <a
            href="https://discord.gg/dollarotools"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
          >
            <MessageSquare className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Join our Discord</h3>
            <p className="text-gray-400">Get instant support and join our community</p>
          </a>
          <a
            href="mailto:support@dollarotools.com"
            className="flex flex-col items-center p-6 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
          >
            <Mail className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
            <p className="text-gray-400">support@dollarotools.com</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;