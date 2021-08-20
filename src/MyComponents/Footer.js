import React from 'react'

export const Footer = () => {
   let footerStyle = {
      top: "auto",
      width: "100%",
      position: "absolute"
   }
   return (
      <footer className="bg-dark text-light" style={footerStyle}>
         <p className="text-center p-1">
            &copy; My Todos-List
         </p>
      </footer>
   )
}
