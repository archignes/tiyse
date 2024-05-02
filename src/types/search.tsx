import { Query } from "@/types";
import { OpenSourceSystemType, MultisearchActionObject } from "@/types";

export interface PreppedSearchLinkParams {
    system: OpenSourceSystemType;
    query: string;
}

export interface getNextUnsearchedSystemParams {
    skipSteps?: number
    numberOfSystems?: number
    updatedSystemsSearched?: Record<string, boolean>,
}

export interface SubmitSearchParams {
        system?: OpenSourceSystemType;
    query?: string;
}


export interface HandleSearchShortcutCandidateParams {
    currentQuery: string;
    shortcutCandidate: string;
    systems: OpenSourceSystemType[];    
    multisearchActionObjects: MultisearchActionObject[];
    getNextUnsearchedSystem: (updatedSystemsSearched?: Record<string, boolean>, skipSteps?: number) => OpenSourceSystemType | undefined;
    cleanupSearch: (system: OpenSourceSystemType, query: string) => void;
    getPreppedSearchLink: ({ system, query }: { system: OpenSourceSystemType, query: string }) => string
}

export interface HandleSearchProps {
    system: OpenSourceSystemType,   
    queryObject: Query,
    getLastSkippedSystem: () => OpenSourceSystemType | undefined,
    updateSystemsSkipped: (systemId: string, skipped: boolean) => void,
    handleSearch: (params: HandleSearchProps) => void,
    systemsDisabled: Record<string, boolean>,
    systemsDeleted: Record<string, boolean>,
    systemsCurrentOrder: OpenSourceSystemType[],
    getPreppedSearchLink: ({ system, query }: { system: OpenSourceSystemType, query: string }) => string
    cleanupSearch: (system: OpenSourceSystemType, currentQuery: string) => void,
}
