import React from "react";
import { ReactChildren, Pages } from "@types";
import { AppContext as AppContextService } from "./service";

export const AppContext: React.FC<ReactChildren> = ({ children }) => {
  const [currentPage, setCurrentPage] = React.useState<Pages>("Home")
  return (
    <AppContextService.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </AppContextService.Provider>
  );
}