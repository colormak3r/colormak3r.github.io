export default function Space({
    size,
    connect = false,
}: {
    size: number;
    connect?: boolean;
}) {
    return (
        <div
            className={`ml-1 ${connect ? "border-l-2 border-text-mine-8" : ""}`}
            style={{ height: `${size}rem` }}
        />
    );
}
