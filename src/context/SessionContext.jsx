import { useState, useEffect, createContext, useMemo, useContext } from 'react';
import Router from 'next/router';

const SessionContext = createContext();
export function SessionProvider(props) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    try {
      setSession(
        JSON.parse(
          document.cookie.replace(
            /(?:(?:^|.*;\s*)session\s*\=\s*([^;]*).*$)|^.*$/,
            '$1',
          ),
        ),
      );
    } catch (error) {
      Router.push('/');
    }
  }, []);

  const value = useMemo(
    () => ({
      session,
    }),
    [session],
  );

  return <SessionContext.Provider value={value} {...props} />;
}

export function useSession() {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('No Session Context Provider');
  }
  return context;
}
