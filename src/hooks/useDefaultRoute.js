import { useLocation } from 'react-router-dom';

// get the default route, at first render the default route is '/'
export default function useDefaultRoute() {
  const location = useLocation();
  const defaultRoute = location.pathname === "/";
  
  return defaultRoute;
}