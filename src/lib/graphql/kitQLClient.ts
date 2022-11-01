import { KitQLClient } from "@kitql/client";

const url: string = import.meta.env.VITE_GRAPHQL_ENDPOINT;

export const kitOLClient = new KitQLClient({
  url,
  headersContentType: "application/json",
  logType: ["client", "server", "operationAndvariables"],
// endpointsSRDelayMs: 500, // nice to demo delay in SSR mode
// endpointNetworkDelayMs: 1000, // Nice to demo delay in Network mode
});
