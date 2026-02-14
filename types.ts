
export enum UserRole {
  PHW = 'PHW',
  PATIENT = 'PATIENT',
  DOCTOR = 'DOCTOR',
  NONE = 'NONE'
}

export enum RiskLevel {
  LOW = 'LOW',
  MODERATE = 'MODERATE',
  HIGH = 'HIGH'
}

export interface Vitals {
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  bp_systolic: number;
  bp_diastolic: number;
  sugar: number;
  temp: number;
  spo2: number;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  vitals?: Vitals;
  history?: string;
  symptoms?: string[];
}

export interface Hospital {
  name: string;
  city: string;
  costRange: string;
  successRate: string;
  rating: number;
  distance: string;
}

export interface DiagnosisResult {
  conditions: Array<{ name: string; probability: number }>;
  riskLevel: RiskLevel;
  protocol: string;
}

export interface RiskPredictionResult {
  disease: string;
  riskPercentage: number;
  meterLevel: RiskLevel;
  preventivePlan: string[];
}
