import React from "react";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ContentLayout from "@/components/layouts/content-layout";
import { ScreenProps } from "@/app/interfaces/screen-props.interface";

const ConnectedCultureScreen = ({ onNext, onBack }: ScreenProps) => {
  return (
    <ContentLayout>
      <CardContent className="p-0 py-6">
        {/* Title */}
        <div className="text-center px-4">
          <h1 className="text-2xl font-extrabold text-gray-900">
            Connected Culture
          </h1>
        </div>

        {/* Image Container */}
        <div className="mt-4 mb-6 px-10">
          <div className="relative w-full aspect-[2/2]">
            <Image
              src="/socials.jpg"
              alt="Connected Culture"
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              priority
              fill
            />
          </div>
        </div>

        {/* Description */}
        <div className="px-0">
          <div className="text-base text-gray-600 font-semibold text-center mb-10 space-y-1">
            <p>From the rarest collectables</p>
            <p>To charms that earn RoBuxs!</p>
            <p>Your options are endless</p>
          </div>

          {/* Pagination */}
          <p className="text-sm text-gray-500 text-center mb-6">1/3</p>

          {/* Navigation Buttons */}
          <div className="space-y-3">
            <Button
              className="w-full py-7 text-base bg-black hover:bg-gray-900"
              variant="default"
              onClick={onNext}
            >
              Next
            </Button>

            <p className="text-center font-extrabold" onClick={onBack}>
              Back
            </p>
          </div>
        </div>
      </CardContent>
    </ContentLayout>
  );
};

export default ConnectedCultureScreen;
