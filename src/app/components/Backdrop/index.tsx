"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type BackdropProps = PropsWithChildren<{
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}>;

export const Backdrop = ({
  children,
  onClick,
}: Readonly<BackdropProps>) => {
  return (
    <motion.div
      className="backdrop"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
