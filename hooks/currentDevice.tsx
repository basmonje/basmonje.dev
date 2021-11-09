import { useEffect, useState } from "react";

const currentDevice = (inmediate = true) => {
  const [device, setDevice] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const currentDevice = window.innerWidth;
      if (currentDevice < 576) {
        setDevice("xs");
      } else if (currentDevice < 768) {
        setDevice("sm");
      } else if (currentDevice < 960) {
        setDevice("md");
      } else if (currentDevice < 1280) {
        setDevice("lg");
      } else if (currentDevice < 1900) {
        setDevice("xl");
      } else {
        setDevice("Couldn't find device");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    device,
  };
};

export default currentDevice;
