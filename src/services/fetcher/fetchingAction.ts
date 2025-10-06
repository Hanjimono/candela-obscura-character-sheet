/**
 * Performs an HTTP request to the specified API endpoint with optional query parameters,
 * request body, and HTTP method.
 *
 * @param api - The base URL of the API endpoint to fetch.
 * @param params - An optional object containing query parameters to append to the URL.
 * @param method - The HTTP method to use for the request. Defaults to "GET".
 * @param body - An optional object containing the request body for "POST" requests.
 * @returns A promise that resolves to the `Response` object from the fetch call.
 */
export async function doFetching(
  api: string,
  params: Record<string, any> | null = null,
  method: "GET" | "POST" = "GET",
  body: Record<string, any> = {}
): Promise<Response> {
  let apiWithQuery = api
  if (params) {
    const formattedParams = new URLSearchParams(params || {})
    apiWithQuery = api + "?" + formattedParams.toString()
  }
  const response = await fetch(apiWithQuery, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: method === "POST" ? JSON.stringify(body) : undefined
  })
  return response
}
