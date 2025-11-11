import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

export default function Center({ className, children }) {
  const { pathname } = useLocation();
  useEffect(() => {
    const title = document.querySelector('title')
    const routePath = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);
    const centerDot = routePath ? ' • ' : '';

    title.textContent = 'Five Star' + centerDot + routePath
  }, [pathname])
  return <div className={className}>{children}</div>;
}