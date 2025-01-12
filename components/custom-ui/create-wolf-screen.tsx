import React from "react";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import WolfLogo from "@/public/wolf.png";
import ContentLayout from "@/components/layouts/content-layout";
import { ScreenProps } from "@/app/interfaces/screen-props.interface";

const CreateWolfScreen = ({ onBack }: ScreenProps) => {
  return (
    <ContentLayout>
      <CardContent className="p-0 py-6">
        {/* Logo and Brand */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 whitespace-nowrap">
            Ivy Wolf
          </h1>
          <div className="flex justify-center">
            <div className="relative w-14 h-14 mb-10">
              <Image
                src={WolfLogo}
                alt="Wolf Logo"
                style={{ objectFit: "contain" }}
                priority
                fill
              />
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="mt-8 space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-center">
              Let&apos;s name your IVY WOLF
            </h2>
            <p className="text-sm text-gray-500 text-center">
              You can always change this later.
            </p>
          </div>

          {/* Name Input */}
          <Input
            placeholder="Add your name here"
            className="w-full h-12 text-center border-gray-200 rounded-lg"
          />

          {/* Checkbox Agreement */}
          <div className="flex items-center space-x-3">
            <Checkbox
              id="terms"
              className="border-gray-300 rounded-sm w-6 h-6 mt-0.5"
            />
            <label htmlFor="terms" className="text-sm font-semibold">
              I agree to Ivy Wolf&apos;s Privacy Policy and T&Cs
            </label>
          </div>

          {/* Submit Button */}
          <Button
            className="w-full h-14 text-base bg-black hover:bg-gray-900 rounded-lg"
            variant="default"
          >
            Create IVY WOLF
          </Button>

          <p className="text-center font-extrabold" onClick={onBack}>
            Back
          </p>
        </div>
      </CardContent>
    </ContentLayout>
  );
};

export default CreateWolfScreen;
