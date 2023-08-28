import { Dispatch, SetStateAction, useState } from "react";

/**
 * useMonies hook
 * Flex on 'em
 */

export const useMonies = (
  amount: number,
): {
  monies: number;
  setMonies: Dispatch<SetStateAction<number>>;
  moniesFormatted: string;
} => {
  const [monies, setMonies] = useState<number>(amount);

  const moniesFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return {
    monies,
    setMonies,
    moniesFormatted: moniesFormat.format(monies),
  };
};
