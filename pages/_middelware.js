export default function middleware(req, ev) {
  console.log("ejecuta");
  return new Response("Hello, world!");
}
