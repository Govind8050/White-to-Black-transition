import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0); // Track scroll position (percentage)
  const [searchQuery, setSearchQuery] = useState(""); // Search query for books
  const [books, setBooks] = useState([ // List of books with images and titles
    { title: "The Great Gatsby", image: "https://m.media-amazon.com/images/I/71X7HnBk6VL._UF1000,1000_QL80_.jpg" },
    { title: "1984", image: "https://m.media-amazon.com/images/I/91PmsgqIcOL._AC_UF1000,1000_QL80_.jpg" },
    { title: "To Kill a Mockingbird", image: "https://images.blinkist.io/images/books/63fc4bfa0ec20100080b21fb/1_1/470.jpg" },
    { title: "Moby Dick", image: "https://m.media-amazon.com/images/I/51j7zrSt+VL._SL500_.jpg" },
    { title: "Ramayan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRngftk_RyAZba2lnrt-oxsHVC72utTPYs3DA&s" },
    { title: "War and Peace", image: "https://m.media-amazon.com/images/I/61snARQi7FL._AC_UF1000,1000_QL80_.jpg" },
    { title: "Ring ved", image: "https://m.media-amazon.com/images/I/81AbS6P63mL._UF1000,1000_QL80_.jpg" },
    { title: "Athar ved", image: "https://m.media-amazon.com/images/I/81sIL+TK-2L._UF1000,1000_QL80_.jpg" },
    { title: "Sam ved", image: "https://rukminim2.flixcart.com/image/850/1000/l12h1u80/regionalbooks/i/c/c/samveda-book-hindi-book-size-22-15-cm-original-imagcpnpgsgvvgmn.jpeg?q=90&crop=false" },
    { title: "Yajur ved", image: "https://m.media-amazon.com/images/I/81qYzpSdRqL._UF1000,1000_QL80_.jpg" },
  ]);

  // Update scroll position on scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / windowHeight) * 100;
      setScrollPosition(scrollPercentage);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Filter books based on search query
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="App"
      style={{
        backgroundColor: `rgb(${255 - (scrollPosition * 2.55)}, ${
          255 - (scrollPosition * 2.55)
        }, ${255 - (scrollPosition * 2.55)})`, // Background color transition based on scroll
        color: scrollPosition > 50 ? "white" : "black", // Change text color based on scroll position
      }}
    >
      {/* Scroll Indicator: Shows the progress of the page scroll */}
      <div className="scroll-indicator">
        <div
          className="progress-bar"
          style={{ width: `${scrollPosition}%` }} // Progress bar width based on scroll position
        ></div>
      </div>

      {/* Sidebar: Static sidebar with navigation links */}
      <div className="sidebar">
        <ul>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#books">Books</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="content">
        <h1>Welcome to the Library</h1>

        {/* Search Box for Books */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search Books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
          />
        </div>

        {/* Book List with images and titles */}
        <div className="book-list" id="books">
          {filteredBooks.map((book, index) => (
            <div key={index} className="book-item">
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
            </div>
          ))}
        </div>

        {/* About Me Section */}
        <div className="section" id="about-me">
          <h2>About Me</h2>
          <p>
            Hello! I'm an avid reader and writer with a deep passion for literature. 
            Over the years, I've spent countless hours exploring various genres, 
            from classic literature to contemporary fiction. My love for books has 
            influenced my life in many ways, allowing me to develop a rich vocabulary 
            and a critical eye for storytelling. When I'm not reading or writing, 
            I enjoy visiting libraries, attending book events, and sharing my thoughts 
            with fellow bibliophiles.
          </p>
        </div>

        {/* Services Section */}
        <div className="section" id="services">
          <h2>Services</h2>
          <ul>
            <li>Book Recommendations</li>
            <li>Writing and Editing Services</li>
            <li>Book Review Blogs</li>
            <li>Literary Workshops</li>
          </ul>
        </div>
          {/* Books Section */}
        <div className="section" id="books">
          <h2>All Books Are Available</h2>
          <ul>
            <li>Lajja - Tasleem Nasreen</li>
            <li>My experiments with truth - Gandhiji</li>
            <li>Pinjar - Amrita Pritam</li>
            <li>Tamas - Bhishma Sahni</li>
            <li>How many Pakistan - Kamleshwar</li>
            <li>God of Sins - Dharamveer Bharti</li>
            <li>Ramayana - Valmiki</li>
            <li>Mahabharata - Veda Vyasa</li>
          </ul>
        </div>



        {/* Contact Section */}
        <div className="section" id="contact">
          <h2>Contact</h2>
          <p>
            Feel free to reach out if you want to discuss books, share recommendations, 
            or collaborate on any literary projects. You can contact me at: 
            <br />
            Email: <a href="mailto:gm085913@gmail.com">gm085913@gmail.com</a>
          </p>
        </div>

        
      </div>
    </div>
  );
}

export default App;










