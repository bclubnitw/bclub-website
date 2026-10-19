export function getOrCreateDeviceId(): string {
  if (typeof window === "undefined") return "";
  let id = sessionStorage.getItem("bmun_device_id");
  if (!id) {
    id = "dev_" + Math.random().toString(36).substring(2, 11) + "_" + Date.now();
    sessionStorage.setItem("bmun_device_id", id);
  }
  return id;
}