

export default function IconButton({ icon: Icon, onClick, className, label }: {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    onClick?: () => void;
    className?: string;
    label?: string;
}) {
    return (
        <button
            onClick={onClick}
            className={`p-2 rounded-full hover:bg-gray-200 transition-colors ${className}`}
        >
            <Icon className="w-6 h-6" />
            {label && <span className="sr-only">{label}</span>}
        </button>
    );
}