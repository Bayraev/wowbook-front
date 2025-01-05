import { useState, useEffect } from "react";

/**
 * Custom hook to detect if a media query matches
 * @param query - Media query string (e.g., '(max-width: 1440px)')
 * @returns boolean - true if the query matches, false otherwise
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Проверяем, есть ли окно (браузерная среда)
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(query);

    // Устанавливаем начальное состояние
    const handleChange = () => setMatches(mediaQuery.matches);

    handleChange(); // Выполняем для начальной проверки

    // Добавляем слушатель на изменение
    mediaQuery.addEventListener("change", handleChange);

    // Убираем слушатель при размонтировании
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
};
