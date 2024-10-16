import React from "react";

interface TemplateProps {
  children: React.ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }) => {
  return (
    <div className="p-8">
      {children}
    </div>
  );
};

export default Template;
