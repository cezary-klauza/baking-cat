import { Loader2Icon } from "lucide-react";

const Loader = () => {
  return (
    <div className="w-full flex justify-center items-center p-8">
      <Loader2Icon
        size={60}
        color="hsl(var(--input))"
        className="animate-spin"
      />
    </div>
  );
};

export default Loader;
