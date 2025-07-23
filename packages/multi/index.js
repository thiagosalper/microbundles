import exportResult from "exportResult";

export default function Multi (a, b) {
    return a * b;
}

export function MultiSave (a, b) {
    return exportResult(
        { result: Multi(a, b) },
        `multi-${a}-${b}.json`   
    )
}