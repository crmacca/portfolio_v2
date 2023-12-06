import './navbar.css';
import gsap from 'gsap';
import { useEffect } from 'react';

const Navbar = () => {

    useEffect(() => {
        const tl = gsap.timeline();
      
        // Set initial state (hidden)
        tl.set('.navbar-button', { y: '-500%', opacity: -5 });
      
        // Animate each button sequentially
        tl.to('.navbar-button', {
          y: '0%',
          opacity: 1,
          stagger: 0.2, // Adjust this for the delay between buttons
          duration: 2,
        });
      
        // Animate the border bottom line
        tl.fromTo(
          '.border-line',
          { scaleX: 0 },
          { scaleX: 1, duration: 1, transformOrigin: 'left', ease: 'sine.inOut'}
        );
      
        // You can also add more animations here if needed
      
        return () => {
          // Cleanup if needed
          tl.kill();
        };
      }, []);
      

      return (
        <div className='navbar  flex flex-col md:flex-row items-center gap-3 border-white px-5 py-3 mx-5'>
          <button className='font-skeina tracking-wider text-2xl navbar-button select-none'>
            CHRISTIAN MCNAMARA
          </button>
          <button className='hidden md:block ml-auto font-coolvetica text-2xl navbar-button'>
            about
          </button>
          <button className='hidden md:block font-coolvetica text-2xl navbar-button'>
            contact
          </button>
          <button className='hidden md:block font-coolvetica text-2xl navbar-button'>
            <a href="https://github.com/crmacca/newportfolio" target="_blank">
              github
            </a>
          </button>
          <div className='border-line w-full h-[1px] bg-white bg-opacity-50'></div>
        </div>
      );
}

export default Navbar
