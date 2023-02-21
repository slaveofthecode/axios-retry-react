import React from 'react'

export const Footer = () => {
  return (
    <footer>
        <hr />
        <div className='d-flex justify-content-between'>
            <p className="d-flex gap-2" >
                <a href="https://www.linkedin.com/in/gustavoml/" target="__blank" className="link-secondary text-decoration-none font-monospace letter-spacing-5" ><i className="bi bi-linkedin"></i></a>
                <a href="https://github.com/slaveofthecode" target="__blank" className="link-secondary text-decoration-none font-monospace letter-spacing-5" ><i className="bi bi-github"></i></a>
            </p>       
            <p>
                <span className="link-secondary text-decoration-none font-monospace letter-spacing-5" >slaveofthecode</span>
            </p> 
            <p>
                <span className='link-secondary' > &copy; { new Date().getFullYear() }</span>
            </p>
        </div>
      </footer>
  )
}
