import React from "react";

const Footer = () => {
  return (
    <footer className="mt-16 pt-8 border-t text-sm text-gray-600">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">About</h3>
          <ul className="space-y-2">
            <li>TechCrunch</li>
            <li>Staff</li>
            <li>Contact Us</li>
            <li>Advertise</li>
            <li>Crunchboard Jobs</li>
            <li>Site Map</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>TechCrunch+ Terms</li>
            <li>RSS Terms of Use</li>
            <li>Privacy Dashboard</li>
            <li>Code of Conduct</li>
            <li>About Our Ads</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Trending Tech Topics</h3>
          <ul className="space-y-2">
            <li>Okta Layoffs</li>
            <li>Apple Vision Pro</li>
            <li>Tesla Lawsuit</li>
            <li>Social Media Senate Hearing</li>
            <li>Shopify AI Image Generator</li>
            <li>Tech Layoffs</li>
            <li>ChatGPT</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li>Facebook</li>
            <li>X</li>
            <li>YouTube</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Mastodon</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t text-center">
        <p>&copy; 2024 Yahoo. All rights reserved. Powered by WordPress VIP.</p>
      </div>
    </footer>
  );
};

export default Footer;
