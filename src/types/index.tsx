import { motion, AnimationProps, MotionProps, TargetAndTransition, Variants } from "framer-motion";
import type { useRouter } from "next/navigation";

type useRouterType = typeof import('next/navigation').useRouter;



export type AnimatedHeadingProps = {
  variants: Variants;
  className?: string;
  children: React.ReactNode;
  infinity?: boolean;
};

export type AnimatedTextProps = {
  variants: Variants;
  className?: string;
  children: React.ReactNode;
  infinity?: boolean;
};


export type AnimatedLinkProps = {
  variants: Variants;
  infinity?: boolean;
  children: React.ReactNode;
};

export type AnimatedInputProps = {
  infinity?: boolean;
  className?: string;
  variants: Variants;
  options?: any; 
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} 



export type AnimatedTextAreaProps = {
  infinity?: boolean;
  className?: string;
  variants: Variants;
  options?: any; 
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
} & MotionProps;


export type AnimatedDivProps = {
  variants: Variants;
  className?: string;
  children?: React.ReactNode;
  infinity?: boolean;
  style?: React.CSSProperties;
} & MotionProps;


export type AnimatedButtonProps = {
  onClick?: () => void;
  infinity?: boolean;
  className?: string;
  children?: React.ReactNode;
  variants: Variants;
};


export type Skill = {
  name: string;
}

export type SkillSectionProps = {
  skills: Skill[];
};

export type PageTopProps = {
  pageTitle: string;
  headingClass?: string;
  children?: React.ReactNode;
};

export type OgImageProps = {
  src: string;
  alt: string;
  darkSrc?: string;
};

export type NavItemProps = {
  href: string;
  text: string;
  router: any;
};


export type HamBurgerProps = {
  open: boolean;
  handleClick: () => void;
}



export type MobileMenuProps ={
  links: string[];
  handleClick: () => void;
}

export type ProjectType = {
  id: number;
  name: string;
  coverURL: string;
  description: string;
  githubURL?: string;
  previewURL?: string;
  tools: string[];  
}


export type  ContactItem = {
  title: string;
  Icon: React.ComponentType;
  url: string;
}