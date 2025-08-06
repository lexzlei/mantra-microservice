import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

async function generateMantra() {
    try {
        const prompt = `Generate a short, poetic mantra that someone could repeat daily for mindfulness and grounding.
      Make it inspiring and unique.`
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        mantra: { type: Type.STRING },
                    },
                    propertyOrdering: ["mantra"],
                }
            }
        });
        console.log("Generated mantra:", response.text);
        const parsed = JSON.parse(response.text);
        return parsed;
    } catch (error) {
        console.error("Error generating mantra:", error);
        throw new Error("Failed to generate mantra");
    }
}

export default generateMantra;