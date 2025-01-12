"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const WelcomeScreen = dynamic(() => import("./welcome-screen"));
const ConnectedCultureScreen = dynamic(
  () => import("./connected-culture-screen")
);
const CreatorCollectablesScreen = dynamic(
  () => import("./creator-collectables-screen")
);
const GiveawayScreen = dynamic(() => import("./give-aways-screen"));
const NameInputScreen = dynamic(() => import("./create-wolf-screen"));

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const screens = [
    WelcomeScreen,
    ConnectedCultureScreen,
    CreatorCollectablesScreen,
    GiveawayScreen,
    NameInputScreen,
  ];

  const handleNext = () => {
    if (currentStep < screens.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const CurrentScreen = screens[currentStep];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.2, opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="absolute top-0 left-0 right-0 bottom-0"
        >
          <CurrentScreen
            onNext={handleNext}
            onBack={handleBack}
            isFirst={currentStep === 0}
            isLast={currentStep === screens.length - 1}
            currentStep={currentStep + 1}
            totalSteps={screens.length - 1}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default OnboardingFlow;
