interface MenuItemProps {
  label: string;
  onClick: () => void;
}

export const MenuItem = ({ label, onClick }: MenuItemProps) => {
  return (
    <button
      onClick={onClick}
      className="block text-left py-3 px-4 hover:bg-slate-100 font-semibold text-sm w-full"
    >
      {label ?? "-"}
    </button>
  );
};
