declare global {
  interface Console {
    superLog: () => void;
  }
}

// When you overwrite globals you need to make sure you export something in your file, you don't need to do that when declaring a module

export {};
