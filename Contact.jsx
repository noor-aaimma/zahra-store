import React from "react";
import { Mail, Phone, Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 text-gray-800 p-4">
      <h1 className="text-4xl font-bold mb-6 text-pink-600">Contact Us</h1>

      <form className="w-full max-w-md bg-white p-6 rounded shadow-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border border-gray-300 rounded h-32"
        ></textarea>
        <button className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition duration-300">
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-10 text-center space-y-4">
        <p className="flex justify-center items-center gap-2 text-lg">
          <Phone className="text-pink-600" /> 0326 5647678
        </p>
        <p className="flex justify-center items-center gap-2 text-lg">
          <Mail className="text-pink-600" /> nooraaimma@gmail.com
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-4 text-pink-600">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook size={28} className="hover:scale-110 transition-transform duration-200" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram size={28} className="hover:scale-110 transition-transform duration-200" />
          </a>
          <a href="https://wa.me/923265647678" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={28} className="hover:scale-110 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </div>
  );
}
