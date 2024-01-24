import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import PdfPeminjamanAlat from "./pages/pdfViewer/pdfPeminjamanAlat";

// import React from 'react';
// // import './App.css'; 
// import TodosForm from './TodosForm';

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/dashboard/peminjaman-alat/pdf" element={<PdfPeminjamanAlat />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
    // <div className="App">
    //   <h1>Dynamic Todo List</h1>
    //   <TodosForm />
    // </div>
  );
}

export default App;
