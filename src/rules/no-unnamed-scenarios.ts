import { Feature, ResultError } from "../types";

export const name = "no-unnamed-scenarios";

export function run(feature: Feature) {
    if (!feature) {
        return [];
    }
    let errors: ResultError[] = [];
    feature.children?.forEach(child => {
        if (child.scenario && !child.scenario.name) {
            errors.push({
                message: "Missing Scenario name",
                rule: name,
                line: child.scenario.location?.line || -1,
            });
        }
    });
    return errors;
}