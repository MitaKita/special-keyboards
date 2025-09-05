'use client';
import { languages } from "@/constants/language";
import { useRouter, usePathname } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";

export const LanguageSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    setSelected(""); // Reset dropdown when route changes
  }, [pathname]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value) {
      setSelected(value);
      router.push(`/keyboard/${value}`);
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      <select
        className="block w-full px-3 py-2 bg-cyan-800 text-white rounded focus:outline-none"
        value={selected}
        onChange={handleChange}
        autoFocus
      >
        <option value="" disabled>
          Select Language
        </option>
        {languages.map((lang) => (
          <option key={lang.param} value={lang.param}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};
