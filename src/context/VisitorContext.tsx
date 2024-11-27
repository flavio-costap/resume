import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface VisitorProviderProps {
  children: ReactNode;
}

interface VisitorContextType {
  visitorCount: number;
}

const VisitorContext = createContext<VisitorContextType | undefined>(undefined);

export const VisitorProvider: React.FC<VisitorProviderProps> = ({
  children,
}) => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [targetCount, setTargetCount] = useState(0);

  const handleIncrementVisitor = async () => {
    try {
      const res = await fetch("https://resume-api-1.onrender.com/increment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ page: "home" }),
      });
      const data = await res.json();
      setVisitorCount(data.count);
      setTargetCount(data.count); 
    } catch (error) {
      console.error("Error fetching visitor count:", error);
    }
  };

  const startCounting = (target: number) => {
    let currentCount = 0;
    const increment = Math.ceil(target / 100);
    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= target) {
        currentCount = target;
        clearInterval(interval);
      }
      setVisitorCount(currentCount);
    }, 20);
  };

  useEffect(() => {
    handleIncrementVisitor();
  }, []);

  useEffect(() => {
    if (targetCount > 0) {
      startCounting(targetCount);
    }
  }, [targetCount]);


  return (
    <VisitorContext.Provider value={{ visitorCount }}>
      {children}
    </VisitorContext.Provider>
  );
};

export const useVisitor = (): VisitorContextType => {
  const context = useContext(VisitorContext);
  if (!context) {
    throw new Error("useVisitor must be used within a VisitorProvider");
  }
  return context;
};
