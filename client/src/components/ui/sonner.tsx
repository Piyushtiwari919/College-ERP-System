import { Toaster as Sonner } from "sonner";
import { useDarkMode } from "usehooks-ts";

const Toaster = (props: any) => {
  const { isDarkMode } = useDarkMode();

  return (
    <Sonner theme={isDarkMode ? "dark" : "light"} {...props} />
  );
};

export default Toaster;