import { useState, ReactNode } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Button, Input } from "@nextui-org/react";
import { RainbowButton } from "../ui/rainbow-button";

interface ResponsiveModalProps {
  title: string;
  description?: string;
  openButtonText: string;
  showTextBox?: boolean;
  textBoxPlaceholder?: string;
  onCancel?: () => void;
  onSubmit?: (value: string) => void;
  cancelButtonText?: string;
  submitButtonText?: string;
  children?: ReactNode;
}

export function ResponsiveModal({
  title,
  description,
  openButtonText,
  showTextBox = false,
  textBoxPlaceholder = "Enter text...",
  onCancel,
  onSubmit,
  cancelButtonText = "Cancel",
  submitButtonText = "Submit",
  children,
}: ResponsiveModalProps) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const toggleOpen = () => setOpen((prev) => !prev);

  // Input change handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setError(""); // Clear error when user starts typing
  };

  // Submit handler with validation
  const handleSubmit = () => {
    // Check if the textfield is empty
    if (showTextBox && !inputValue.trim()) {
      setError("This field is required.");
      return;
    }
    // Email validation
    if (showTextBox) {
      const regex = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      if (!regex.test(inputValue.trim())) {
        setError("Please enter a valid email.");
        return;
      }
    }
    // Execute any additional function
    if (onSubmit) {
      onSubmit(inputValue);
    }
    setOpen(false); // Close the modal after submission
    setInputValue(""); // Reset textfield value to ""
  };

  const handleCancel = () => {
    // If textfield is present, then set any existing errors to null
    if (showTextBox) {
      setError("");
    }
    // Any additional additional function
    if (onCancel) {
      onCancel();
    }
    setOpen(false); // Close the modal after cancellation
    setInputValue(""); // Reset textfield value to ""
  };

  return (
    <div>
      <div>
        {/* <BackgroundGradient containerClassName="p-[3px]" className=""> */}
        <RainbowButton
          color="primary"
          onClick={toggleOpen}
          className="md:max-w-none md:max-h-none max-w-[80px] max-h-[40px] md:text-base text-sm dark:text-black"
        >
          {openButtonText}
        </RainbowButton>
        {/* </BackgroundGradient> */}
      </div>

      {isDesktop ? (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              {description && (
                <DialogDescription>{description}</DialogDescription>
              )}
            </DialogHeader>
            {/* Optional text input */}
            {showTextBox && (
              <div>
                <Input
                  placeholder={textBoxPlaceholder}
                  fullWidth
                  aria-label="Text input"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                {error && (
                  <p className="text-red-500 text-xs mt-2 ml-2">{error}</p>
                )}
              </div>
            )}
            {children}
            <div className="flex justify-end gap-2 mt-4">
              {onCancel && (
                <Button variant="light" onClick={handleCancel}>
                  {cancelButtonText}
                </Button>
              )}
              <Button variant="solid" color="primary" onClick={handleSubmit}>
                {submitButtonText}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>{title}</DrawerTitle>
              {description && (
                <DrawerDescription>{description}</DrawerDescription>
              )}
            </DrawerHeader>
            {/* Optional text input */}
            {showTextBox && (
              <div className="px-4">
                <Input
                  placeholder={textBoxPlaceholder}
                  fullWidth
                  aria-label="Text input"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                {error && (
                  <p className="text-red-500 text-xs mt-2 ml-2">{error}</p>
                )}
              </div>
            )}
            {children}
            <div className="flex justify-end gap-2 mt-4 px-4 pb-4">
              {onCancel && (
                <Button variant="light" onClick={handleCancel}>
                  {cancelButtonText}
                </Button>
              )}
              <Button variant="solid" color="primary" onClick={handleSubmit}>
                {submitButtonText}
              </Button>
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
}
