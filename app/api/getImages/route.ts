export async function GET(request: Request) {
  const response = await fetch("https://ai-image-generator-by-diana.azurewebsites.net/api/getimages"
  , {
    cache: "no-store",
  });

  const blob = await response.blob();
  const textData = await blob.text();

  console.log(textData); // Add this line to log the response data

  const data = JSON.parse(textData);

  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
