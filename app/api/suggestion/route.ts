export async function GET(request: Request) {
    // connect to our azure function endpoint
    const response = await fetch(
      "https://ai-image-generator-by-diana.azurewebsites.net/api/getchatgptsuggestion",
      {
        cache: "no-store",
      }
    );
    const textData = await response.text();
  
    return new Response(JSON.stringify(textData.trim()), {
      status: 200,
    });
  }
  