
import React from "react"
export default function Footer() {
  return (
    <nav>

      <footer className="footer1">
        <p>footer 2023</p>
      </footer>

      <style jsx>{`
          :global(body) {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
          }
          footer{
          
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 3.9rem;
          
          }
          `}</style>
    </nav>
  );
}