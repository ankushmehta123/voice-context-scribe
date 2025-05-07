
export async function generateEnhancedSpeech(transcript: string): Promise<string> {
  try {
    // In a production environment, this would use a proper backend
    // For demo purposes, we're implementing a simple client-side approach
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // In production, API keys should never be stored client-side
        // This should be handled by your backend
        "Authorization": "Bearer YOUR_GROQ_API_KEY" 
      },
      body: JSON.stringify({
        model: "llama3-70b-8192",
        messages: [
          {
            role: "system",
            content: "You are an expert speech writer. Enhance the provided speech transcript to make it more engaging, persuasive, and well-structured. Keep the same core ideas but improve clarity, flow, and impact."
          },
          {
            role: "user",
            content: transcript
          }
        ],
        temperature: 0.7,
        max_tokens: 4000
      })
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error generating enhanced speech:", error);
    return "Failed to generate enhanced speech. Please try again.";
  }
}
