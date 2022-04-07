export const setLanguage = (lang) => {
  localStorage.setItem('locale', lang);
}

export const getLanguage = () => {
  return localStorage.getItem('locale') || 'en';
}
