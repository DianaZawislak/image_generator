export async function GET(request: Request) {
    // connect to our azure function endpoint
    const response = await fetch(
      "http://127.0.0.1:7071/api/getChatGPTSuggestion",
      {
        cache: "no-store",
      }
    );
    const textData = await response.text();
  
    return new Response(JSON.stringify(textData.trim()), {
      status: 200,
    });
  }
  