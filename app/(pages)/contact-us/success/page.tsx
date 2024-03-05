import { Check } from "lucide-react";

export default function ContactSuccess() {
  return (
    <div className="h-[600px] flex flex-col align-center justify-center items-center">
      <Check className="pb-4" size={200} />
      <h1 className="text-5xl font-bold pt-4 pb-6">Success</h1>
      <p className="text-2xl font-medium pb-6">
        Your message has been received!
      </p>
    </div>
  );
}
