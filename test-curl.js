async function check() {
  try {
    const res = await fetch("https://ecokit-next.vercel.app/?cb=" + Date.now());
    console.log("STATUS:", res.status);
    const text = await res.text();
    console.log(text.slice(0, 500));
  } catch(e) {
    console.error("Fetch failed", e);
  }
}
check();
