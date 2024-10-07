declare module 'react-typewriter-effect' {
    import { FC } from 'react';
  
    interface TypewriterProps {
      options: {
        strings: string[];
        autoStart?: boolean;
        loop?: boolean;
        cursor?: string;
        deleteSpeed?: number;
        typingSpeed?: number;
      };
    }
  
    const Typewriter: FC<TypewriterProps>;
    export default Typewriter;
  }
  