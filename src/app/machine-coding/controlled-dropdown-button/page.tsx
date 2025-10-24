"use client";

import { Registry } from "../registry";
import { ControlledDropdownButton } from "./ControlledDropdownButton";

type Country = {
    code: string;
    name: string;
};

export const countriesList: Country[] = [
    { code: "US", name: "United States" },
    { code: "CA", name: "Canada" },
    { code: "MX", name: "Mexico" },
    { code: "BR", name: "Brazil" },
    { code: "AR", name: "Argentina" },
    { code: "CL", name: "Chile" },
    { code: "CO", name: "Colombia" },
    { code: "PE", name: "Peru" },
    { code: "VE", name: "Venezuela" },
    { code: "EC", name: "Ecuador" },
    { code: "GB", name: "United Kingdom" },
    { code: "FR", name: "France" },
    { code: "DE", name: "Germany" },
    { code: "IT", name: "Italy" },
    { code: "ES", name: "Spain" },
    { code: "PT", name: "Portugal" },
    { code: "NL", name: "Netherlands" },
    { code: "BE", name: "Belgium" },
    { code: "CH", name: "Switzerland" },
    { code: "AT", name: "Austria" },
    { code: "SE", name: "Sweden" },
    { code: "NO", name: "Norway" },
    { code: "DK", name: "Denmark" },
    { code: "FI", name: "Finland" },
    { code: "IE", name: "Ireland" },
    { code: "PL", name: "Poland" },
    { code: "CZ", name: "Czech Republic" },
    { code: "SK", name: "Slovakia" },
    { code: "HU", name: "Hungary" },
    { code: "RO", name: "Romania" },
    { code: "BG", name: "Bulgaria" },
    { code: "GR", name: "Greece" },
    { code: "TR", name: "Turkey" },
    { code: "RU", name: "Russia" },
    { code: "UA", name: "Ukraine" },
    { code: "BY", name: "Belarus" },
    { code: "EE", name: "Estonia" },
    { code: "LV", name: "Latvia" },
    { code: "LT", name: "Lithuania" },
    { code: "IS", name: "Iceland" },
    { code: "CN", name: "China" },
    { code: "JP", name: "Japan" },
    { code: "KR", name: "South Korea" },
    { code: "IN", name: "India" },
    { code: "PK", name: "Pakistan" },
    { code: "BD", name: "Bangladesh" },
    { code: "VN", name: "Vietnam" },
    { code: "TH", name: "Thailand" },
    { code: "MY", name: "Malaysia" },
    { code: "SG", name: "Singapore" },
    { code: "ID", name: "Indonesia" },
    { code: "PH", name: "Philippines" },
    { code: "KH", name: "Cambodia" },
    { code: "LA", name: "Laos" },
    { code: "MM", name: "Myanmar" },
    { code: "NP", name: "Nepal" },
    { code: "LK", name: "Sri Lanka" },
    { code: "SA", name: "Saudi Arabia" },
    { code: "AE", name: "United Arab Emirates" },
    { code: "QA", name: "Qatar" },
    { code: "KW", name: "Kuwait" },
    { code: "OM", name: "Oman" },
    { code: "IR", name: "Iran" },
    { code: "IQ", name: "Iraq" },
    { code: "EG", name: "Egypt" },
    { code: "ZA", name: "South Africa" },
    { code: "NG", name: "Nigeria" },
    { code: "KE", name: "Kenya" },
    { code: "GH", name: "Ghana" },
    { code: "ET", name: "Ethiopia" },
    { code: "TZ", name: "Tanzania" },
    { code: "UG", name: "Uganda" },
    { code: "DZ", name: "Algeria" },
    { code: "MA", name: "Morocco" },
    { code: "TN", name: "Tunisia" },
    { code: "SD", name: "Sudan" },
    { code: "SN", name: "Senegal" },
    { code: "CI", name: "Côte d'Ivoire" },
    { code: "CM", name: "Cameroon" },
    { code: "CD", name: "Democratic Republic of the Congo" },
    { code: "AU", name: "Australia" },
    { code: "NZ", name: "New Zealand" },
    { code: "FJ", name: "Fiji" },
    { code: "PG", name: "Papua New Guinea" },
    { code: "SB", name: "Solomon Islands" },
    { code: "VU", name: "Vanuatu" },
    { code: "TO", name: "Tonga" },
    { code: "WS", name: "Samoa" },
    { code: "FM", name: "Micronesia" },
    { code: "PW", name: "Palau" },
    { code: "KI", name: "Kiribati" },
    { code: "NR", name: "Nauru" },
    { code: "TV", name: "Tuvalu" },
    { code: "AG", name: "Antigua and Barbuda" },
    { code: "BB", name: "Barbados" },
    { code: "BS", name: "Bahamas" },
    { code: "JM", name: "Jamaica" },
    { code: "TT", name: "Trinidad and Tobago" },
    { code: "CU", name: "Cuba" },
    { code: "DO", name: "Dominican Republic" },
    { code: "HT", name: "Haiti" },
    { code: "CR", name: "Costa Rica" },
    { code: "PA", name: "Panama" },
    { code: "GT", name: "Guatemala" },
    { code: "HN", name: "Honduras" },
    { code: "NI", name: "Nicaragua" },
    { code: "SV", name: "El Salvador" },
];

Registry.add("countries.list", countriesList);

const page = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <ControlledDropdownButton
                model="countries.list"
                buttonName="Select country"
                labelKey="name"
                valueKey="code"
            />
        </div>
    );
};

export default page;
