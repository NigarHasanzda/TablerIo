"use client";

import React, { useEffect } from "react";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

interface PaginationProps {
  currentPage: number;
  lastPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  lastPage,
  onPageChange,
}) => {
  const pages = Array.from({ length: lastPage }, (_, i) => i + 1);


  return (
    <div style={containerStyle}>
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={btnStyle}
        aria-label="Əvvəlki səhifə"
      >
        <ArrowBackIosNewOutlinedIcon style={{ fontSize: 12 }} />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => page !== currentPage && onPageChange(page)}
          style={{
            ...btnStyle,
            fontWeight: page === currentPage ? "bold" : "400",
            backgroundColor: page === currentPage ? "#5D56F1" : "transparent",
            color: page === currentPage ? "white" : "#374151",
            cursor: page === currentPage ? "default" : "pointer",
          }}
          disabled={page === currentPage}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => currentPage < lastPage && onPageChange(currentPage + 1)}
        disabled={currentPage === lastPage}
        style={btnStyle}
        aria-label="Sonrakı səhifə"
      >
        <ArrowForwardIosOutlinedIcon style={{ fontSize: 12 }} />
      </button>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  marginTop: 20,
  userSelect: "none",
};

const btnStyle: React.CSSProperties = {
  border: "none",
  background: "transparent",
  color: "##ABB0B7",
  padding: "6px 12px",
  borderRadius: "4px",
  fontSize: "16px",
  userSelect: "none",
};

export default Pagination;
