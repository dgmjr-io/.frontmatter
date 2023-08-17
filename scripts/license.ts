// Generated by https://quicktype.io

export interface License {
    detailsUrl?: URL;
    isDeprecatedLicenseId?: boolean;
    isDsiApproved?: boolean;
    licenseId?: string;
    name?: string;
    reference?: string;
    referenceNumber?: number;
    seeAlso?: URL[];
}

export const licenses: License[] = require("../database/licensesDb.json");
