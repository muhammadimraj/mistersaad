"use client";
import { allBlogs } from "@/data/blogs";
import { allPortfolios } from "@/data/portfolio";
import React, { createContext, useContext, useState } from "react";

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [currentBlog, setCurrentBlog] = useState(allBlogs[0]);
  const [currentPortfolio, setCurrentPortfolio] = useState(allPortfolios[0]);

  return (
    <ContentContext.Provider
      value={{
        currentBlog,
        setCurrentBlog,
        currentPortfolio,
        setCurrentPortfolio,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};
