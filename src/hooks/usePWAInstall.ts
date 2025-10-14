import { useState, useEffect } from "react";

// Define the BeforeInstallPromptEvent interface
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

const usePWAInstall = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState<boolean>(false);

  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handler as EventListener);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handler as EventListener
      );
    };
  }, []);

  const installPWA = async (): Promise<void> => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(
        outcome === "accepted"
          ? "User installed the PWA"
          : "User dismissed the prompt"
      );
      setDeferredPrompt(null);
      setIsInstallable(false);
    }
  };

  return { isInstallable, installPWA };
};

export default usePWAInstall;
// import { useState, useEffect } from "react";

// // Define the BeforeInstallPromptEvent interface
// interface BeforeInstallPromptEvent extends Event {
//   prompt: () => Promise<void>;
//   userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
// }

// const usePWAInstall = () => {
//   const [deferredPrompt, setDeferredPrompt] =
//     useState<BeforeInstallPromptEvent | null>(null);
//   const [isInstallable, setIsInstallable] = useState<boolean>(false);

//   useEffect(() => {
//     const handler = (e: BeforeInstallPromptEvent) => {
//       e.preventDefault();
//       setDeferredPrompt(e);
//       setIsInstallable(true);
//     };

//     window.addEventListener("beforeinstallprompt", handler as EventListener);

//     return () => {
//       window.removeEventListener(
//         "beforeinstallprompt",
//         handler as EventListener
//       );
//     };
//   }, []);

//   const installPWA = async (): Promise<void> => {
//     if (deferredPrompt) {
//       await deferredPrompt.prompt();
//       const { outcome } = await deferredPrompt.userChoice;
//       console.log(
//         outcome === "accepted"
//           ? "User installed the PWA"
//           : "User dismissed the prompt"
//       );
//       setDeferredPrompt(null);
//       setIsInstallable(false);
//     }
//   };

//   return { isInstallable, installPWA };
// };

// export default usePWAInstall;
