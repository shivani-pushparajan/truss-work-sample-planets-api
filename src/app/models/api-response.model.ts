import { Planet } from "./planet.model";

export interface ApiResponse {
    count: number;
    next: string;
    previous: string;
    results: Array<Planet>;
}