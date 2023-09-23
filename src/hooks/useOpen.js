import { useEffect, useRef, useState } from 'preact/hooks';

export default function useOpen() {
    const [open, setOpen] = useState(false)
    const containerRef = useRef(null);
    
    useEffect(() => {
      function handleClickOutside(event) {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
    
          setOpen(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);


    return [open, setOpen, containerRef]
}
