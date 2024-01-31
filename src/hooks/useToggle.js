import { useState } from "react";

export default function useToggle() {
  const [effect, setEffect] = useState(false);

  function open() {
    setEffect(true);
  }

  function close() {
    setEffect(false);
  }

  function auto() {
    setEffect(false);
  }

  return { effect, open, close, auto };
}
