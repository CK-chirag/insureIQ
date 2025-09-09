export interface PolicyData {
    id: string;
    policyType: string;
    insurer: string;
    policyId: string;
    fileName: string;
    fileSize: number;
    uploadDate: string;
    status: "Active" | "Expired" | "Pending";
    premium?: string;
    expiresOn?: string;
    documentsCount?: number;
    isGroup?: boolean;
    memberCount?: number;
    completionPercentage?: number;
    isExpiringSoon?: boolean;
    daysUntilExpiry?: number;
}

const STORAGE_KEY = 'insureIQ_policies';

export const savePolicyToStorage = (policy: PolicyData): void => {
    try {
        const existingPolicies = getPoliciesFromStorage();
        const updatedPolicies = [...existingPolicies, policy];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPolicies));
    } catch (error) {
        console.error('Error saving policy to localStorage:', error);
    }
};

export const getPoliciesFromStorage = (): PolicyData[] => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error('Error reading policies from localStorage:', error);
        return [];
    }
};

export const deletePolicyFromStorage = (policyId: string): void => {
    try {
        const existingPolicies = getPoliciesFromStorage();
        const updatedPolicies = existingPolicies.filter(policy => policy.id !== policyId);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPolicies));
    } catch (error) {
        console.error('Error deleting policy from localStorage:', error);
    }
};

export const generatePolicyId = (): string => {
    return `POL-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export const createPolicyFromFile = (
    file: File, 
    policyType: string, 
    insurer?: string
): PolicyData => {
    const now = new Date();
    const expiryDate = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
    
    return {
        id: generatePolicyId(),
        policyType,
        insurer: insurer || `${policyType} Provider`,
        policyId: `HI-${now.getFullYear()}-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`,
        fileName: file.name,
        fileSize: file.size,
        uploadDate: now.toISOString(),
        status: "Active",
        premium: `$${Math.floor(Math.random() * 500) + 200}/month`,
        expiresOn: expiryDate.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
        }),
        documentsCount: 1,
        isGroup: false,
        memberCount: 1,
        completionPercentage: Math.floor(Math.random() * 40) + 60,
        isExpiringSoon: false,
        daysUntilExpiry: 365
    };
};

