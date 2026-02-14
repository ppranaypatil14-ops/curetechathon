
import { GoogleGenAI, Type } from "@google/genai";
import { Vitals, DiagnosisResult, RiskPredictionResult, RiskLevel } from "./types";

// Fix: Initializing GoogleGenAI with the required direct reference to process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIdiagnosis = async (vitals: Vitals, symptoms: string): Promise<DiagnosisResult> => {
  const prompt = `Analyze patient vitals and symptoms for a primary healthcare worker.
  Vitals: Age ${vitals.age}, Gender ${vitals.gender}, BP ${vitals.bp_systolic}/${vitals.bp_diastolic}, Sugar ${vitals.sugar}, Temp ${vitals.temp}F, SpO2 ${vitals.spo2}%.
  Symptoms: ${symptoms}
  
  Provide likely conditions with probabilities, a risk level (LOW, MODERATE, HIGH), and a suggested treatment protocol.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          conditions: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                probability: { type: Type.NUMBER }
              },
              required: ["name", "probability"]
            }
          },
          riskLevel: { type: Type.STRING, description: "LOW, MODERATE, or HIGH" },
          protocol: { type: Type.STRING }
        },
        required: ["conditions", "riskLevel", "protocol"]
      }
    }
  });

  return JSON.parse(response.text) as DiagnosisResult;
};

export const getHealthRiskPrediction = async (vitals: Vitals, lifestyle: string): Promise<RiskPredictionResult[]> => {
  const prompt = `Predict long-term health risks (5-year window) based on:
  Vitals: BP ${vitals.bp_systolic}/${vitals.bp_diastolic}, Sugar ${vitals.sugar}, Age ${vitals.age}.
  Lifestyle: ${lifestyle}
  
  Predict risk for Diabetes, Hypertension, and Heart Disease.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            disease: { type: Type.STRING },
            riskPercentage: { type: Type.NUMBER },
            meterLevel: { type: Type.STRING },
            preventivePlan: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["disease", "riskPercentage", "meterLevel", "preventivePlan"]
        }
      }
    }
  });

  return JSON.parse(response.text) as RiskPredictionResult[];
};
