// This transforms fields with "foo_bar" in .json to "fooBar"
import { OpenSourceSystemType } from "../types/system";
import OpenSourceSystemData from "../data/open_source_systems.json";

export const baseSystems: OpenSourceSystemType[] = OpenSourceSystemData.map((system: any) => {
  const transformedSystem = Object.keys(system).reduce((acc: Record<string, any>, key) => {
    const transformedKey = key.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase());
    acc[transformedKey] = system[key];
    return acc;
  }, {});

  return transformedSystem as OpenSourceSystemType;
}) as OpenSourceSystemType[];