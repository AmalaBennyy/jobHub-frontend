// CompanyContext.js
import React, { createContext, useContext, useState } from 'react';

const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [totalCompanies, setTotalCompanies] = useState(0);

  const updateTotalCompanies = (count) => {
    setTotalCompanies(count);
  };

  return (
    <CompanyContext.Provider value={{ totalCompanies, updateTotalCompanies }}>
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompanyContext = () => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error('useCompanyContext must be used within a CompanyProvider');
  }
  return context;
};
