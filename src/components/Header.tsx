const Header = () => {
  return (
    <header className=" fixed top-0 left-0 bg-white shadow-md w-screen z-10"> {/* Fixed positioning */}
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6"> {/* Padding added */}
        {/* Logo */}
        <img
          className="h-16 w-auto"
          src="https://www.austriajuice.com/hubfs/Austria-Juice-Logo.svg"
          alt="Austria Juice Logo"
        />

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <a href="#" className="text-black hover:text-green-500">About Us</a>
          <a href="#" className="text-black hover:text-green-500">Blog & Media</a>
          <a href="#" className="text-black hover:text-green-500">Careers</a>
          <a href="#" className="text-black hover:text-green-500">Markets We Serve</a>
          <a href="#" className="text-black hover:text-green-500">Product Portfolio</a>
          <a href="#" className="text-black hover:text-green-500">Product Applications</a>
        </nav>

        {/* Call-to-Action Button */}
        <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          Get in Touch
        </button>
      </div>
    </header>
  );
};

export default Header;