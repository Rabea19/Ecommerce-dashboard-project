import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        navigate("/login");
      } else {
        setLoading(false);
      }
    };

    checkSession();

    // Optional: listen to auth changes (logout in another tab)
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!session) navigate("/login");
      },
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [navigate]);

  if (loading) return <div className="text-white p-8">Checking session...</div>;

  return children;
}
