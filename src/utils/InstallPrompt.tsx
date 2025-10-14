import React, { useState } from "react";
import usePWAInstall from "@/hooks/usePWAInstall";

const InstallPrompt: React.FC = () => {
  const { isInstallable, installPWA } = usePWAInstall();
  const [isDismissed, setIsDismissed] = useState<boolean>(
    localStorage.getItem("pwaPromptDismissed") === "true"
  ); //testing

  if (!isInstallable || isDismissed) return null;

  const handleDismiss = (): void => {
    localStorage.setItem("pwaPromptDismissed", "true");
    setIsDismissed(true);
  };

  const isIOS: boolean =
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-end justify-center z-50"
      onClick={handleDismiss}
    >
      <div
        className="w-full bg-[#F5F5F5] border-t border-main/10 py-12 px-4 rounded-t-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {isIOS ? (
          <p className="text-gray-700 text-center">
            To install <strong>Micro Coverage</strong>, tap the{" "}
            <strong>Share</strong> button in Safari and select{" "}
            <strong>Add to Home Screen</strong>.
          </p>
        ) : (
          <>
            <p className="text-gray-700 mb-4 text-center">
              Install <strong>Micro Coverage</strong> for a better experience on
              your device!
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={installPWA}
                className="bg-main text-white px-4 py-2 rounded-md hover:bg-main/80 hover:cursor-pointer transition"
              >
                Install App
              </button>
              <button
                onClick={handleDismiss}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition"
              >
                Not Now
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InstallPrompt;

// import React, { useState } from "react";
// import usePWAInstall from "@/hooks/usePWAInstall";

// const InstallPrompt: React.FC = () => {
//   const { isInstallable, installPWA } = usePWAInstall();
//   const [isDismissed, setIsDismissed] = useState<boolean>(
//     localStorage.getItem("pwaPromptDismissed") === "true"
//   );

//     if (!isInstallable || isDismissed) return null;

//   const handleDismiss = (): void => {
//     localStorage.setItem("pwaPromptDismissed", "true");
//     setIsDismissed(true);
//   };

//   // Detect iOS for alternative instructions
//   const isIOS: boolean =
//     /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

//   return (
//     <div className="fixed w-full bg-[#F5F5F5] border-t border-main/10 py-14 bottom-0 p-4 rounded-lg shadow-2xl">
//       {isIOS ? (
//         <p className="text-gray-700">
//           To install Micro Coverage, tap the <strong>Share</strong> button in
//           Safari and select <strong>Add to Home Screen</strong>.
//         </p>
//       ) : (
//       <>
//         <p className="text-gray-700 mb-4 text-center">
//           Install Micro Coverage for a better experience on your device!
//         </p>
//         <div className="flex justify-center space-x-4">
//           <button
//             onClick={installPWA}
//             className="bg-main text-white px-4 py-2 rounded-md hover:bg-main/80 hover:cursor-pointer transition"
//           >
//             Install App
//           </button>
//           <button
//             onClick={handleDismiss}
//             className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition"
//           >
//             Not Now
//           </button>
//         </div>
//       </>
//      )}
//     </div>
//   );
// };

// export default InstallPrompt;
// import React, { useState } from "react";
// import usePWAInstall from "@/hooks/usePWAInstall";

// const InstallPrompt: React.FC = () => {
//   const { isInstallable, installPWA } = usePWAInstall();
//   const [isDismissed, setIsDismissed] = useState<boolean>(
//     localStorage.getItem("pwaPromptDismissed") === "true"
//   );

//   if (!isInstallable || isDismissed) return null;

//   const handleDismiss = (): void => {
//     localStorage.setItem("pwaPromptDismissed", "true");
//     setIsDismissed(true);
//   };

//   // Detect iOS for alternative instructions
//   const isIOS: boolean =
//     /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

//   return (
//     <div className="fixed bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg max-w-md mx-auto md:max-w-lg">
//       {isIOS ? (
//         <p className="text-gray-700">
//           To install Micro Coverage, tap the <strong>Share</strong> button in
//           Safari and select <strong>Add to Home Screen</strong>.
//         </p>
//       ) : (
//         <>
//           <p className="text-gray-700 mb-4">
//             Install Micro Coverage for a better experience on your device!
//           </p>
//           <div className="flex justify-center space-x-4">
//             <button
//               onClick={installPWA}
//               className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
//             >
//               Install App
//             </button>
//             <button
//               onClick={handleDismiss}
//               className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition"
//             >
//               Not Now
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default InstallPrompt;
