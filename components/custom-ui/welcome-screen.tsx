import React from "react";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import WolfLogo from "@/public/wolf.png";
import ContentLayout from "@/components/layouts/content-layout";
import { ScreenProps } from "@/app/interfaces/screen-props.interface";

const WelcomeScreen = ({
  onNext,
  onBack,
  isFirst,
  isLast,
  currentStep,
  totalSteps,
}: ScreenProps) => {
  return (
    <ContentLayout>
      <CardContent className="p-0 py-6">
        {/* Logo and Title */}
        <div className="text-center px-4">
          <div className="flex justify-center">
            <div className="relative w-12 h-12">
              <Image
                src={WolfLogo}
                alt="Wolf Logo"
                style={{ objectFit: "cover" }}
                priority
                fill
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mt-4">
            Welcome to Ivy Wolf
          </h1>
        </div>

        {/* Image Container */}
        <div className="mt-4 mb-6 px-10">
          <div className="relative w-full aspect-[2/2]">
            <Image
              src="/skateboarding.jpg"
              alt="Skateboarding"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Description */}
        <div className="px-0">
          <p className="text-base text-gray-500 text-center mb-10 font-bold">
            A wearable that lives and breathes
          </p>

          {/* Next Button */}
          <Button
            className="w-full py-7 mb-4 text-base bg-black hover:bg-gray-900"
            variant="default"
            onClick={onNext}
          >
            Next
          </Button>
        </div>
      </CardContent>
    </ContentLayout>
  );
};

export default WelcomeScreen;
