import React from "react";

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return <h2 className={`font-semibold ${className}`}>Leads CRM</h2>;
};

export default Logo;
