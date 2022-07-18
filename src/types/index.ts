export interface AgaveLink {
    openLink: (config: UseAgaveLinkProps) => void;
}

export interface UseAgaveLinkProps {
    referenceId: string;
    linkToken: string;
    onSuccess: (publicToken: string) => void;
    onExit?: (error?: string) => void;
    showSandboxSourceSystems?: boolean;
    showProductionSourceSystems?: boolean;
    sourceSystem?: string;
    sourceSystemEnvironment?: string;
    category?: string;
}

export type UseAgaveLinkResponse = {
    openLink: (config?: Partial<UseAgaveLinkProps>) => void;
    isReady: boolean;
    error: ErrorEvent | null;
}

declare global {
    interface Window {
        AgaveLink: AgaveLink;
    }
}