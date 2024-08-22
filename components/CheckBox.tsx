import { Category, Flavore } from "@/types";

type CheckBoxProps = {
  name: Category | Flavore;
  title: string;
  onChange: (isChecked: boolean, value: Category | Flavore) => void;
};

const CheckBox = ({ name, title, onChange }: CheckBoxProps) => (
  <div className="flex items-center">
    <div className="relative mr-2">
      <input
        type="checkbox"
        name={name}
        onChange={(e) => onChange(e.target.checked, name)}
        className="peer shrink-0 appearance-none w-4 h-4 border border-input rounded-sm bg-white checked:bg-red-2 checked:border-0"
      />
      <svg
        className="
        absolute 
        w-3.5 h-3.5 top-[3.5px] left-[50%]
        hidden peer-checked:block
        pointer-events-none translate-x-[-50%]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
    <label htmlFor={name} className="text-gray-2">
      {title}
    </label>
  </div>
);

export default CheckBox;
