const { REACT_APP_HOST_URI, REACT_APP_USE_PROXY } = process.env;

const serviceURL = REACT_APP_USE_PROXY === "true" ? "/" : REACT_APP_HOST_URI;

export const getURI = (path = "") => {
  const input = String(path || "");
  // If already absolute (http/https or protocol-relative) or data URI, return as-is
  if (/^(https?:)?\/\//i.test(input) || input.startsWith("data:")) {
    return input;
  }
  // If relative root path, prefix with serviceURL (publish/author base or "/" proxy)
  if (input.startsWith("/")) {
    const base = (serviceURL || "").replace(/\/$/, "");
    return base + input;
  }
  // Otherwise return unchanged
  return input;
};
