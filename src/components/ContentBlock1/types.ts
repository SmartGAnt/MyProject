import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    {
      color?: string;
      title: string;
    }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
