import { Variants } from "framer-motion";

export interface TimelineDataProps {
  title: string;
  description: string;
}

export interface LookTileScheme {
  titleNumber: string;
  title: string;
  animation: Variants;
  content: (item: TimelineDataProps, index: number) => React.ReactNode;
  data: TimelineDataProps[];
}