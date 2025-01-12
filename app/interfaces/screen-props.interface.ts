export interface ScreenProps {
  onNext?: () => void;
  onBack?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
  currentStep?: number;
  totalSteps?: number;
}
