import { useContext, useState } from "react";
import { ThemeContext, ThemeConfigItem } from "../contexts/themesContext";

/**
 * Dropdown component for switching themes.
 * It displays a list of theme options and updates the context when the selection changes.
 */
const Dropdown: React.FC = () => {
  const { theme, setTheme, themeConfig } = useContext(ThemeContext);

  const [selected, setSelected] = useState<string>(themeConfig[theme].name);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = e.target.value;
    setSelected(selectedName);

    const selectedIndex = themeConfig.findIndex(
      (theme: ThemeConfigItem) => theme.name === selectedName
    );

    if (selectedIndex !== -1) {
      setTheme(selectedIndex);
    }
  };

  return (
    <select
      value={selected}
      onChange={handleChange}
      className="rounded animate-bounce cursor-pointer hover:animate-none px-2 py-1 sm:mx-6 hover:opacity-60 transition-all duration-500"
    >
      {themeConfig.map((ele: ThemeConfigItem) => (
        <option className="text-black" key={ele.id} value={ele.name}>
          {ele.name}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
